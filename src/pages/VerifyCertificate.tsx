import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import displayToast from "../components/Toast";
import { apiBaseUrl } from "../config";
import ThemeContext from "../context/ThemeContext/ThemeProvider";

interface VerifyCertificateProps {}
export const VerifyCertificate: React.FC<VerifyCertificateProps> = () => {
  const { theme } = useContext<any>(ThemeContext);
  const [certificateID, setCertificateID] = useState<string>("");
  const [certificate, setCertificate] = useState<string>("");

  const handleVerify = async () => {
    //removing dashes from certificate id
    const id: string = certificateID.replaceAll("-", "");
    const url = `${apiBaseUrl}/certificate/certDetails/${id}`;
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCertificate(data);
        if (!data.error) {
          window.open(`${apiBaseUrl}/certificate/${id}`, "_blank");
          displayToast("Certificate is valid", "success");
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        displayToast("Invalid certificate ID", "failure");
      });
  };
  return (
    <>
      <Header />
      <div className="mt-9 dark:bg-primary-bgDark ">
        <div
          className={`dark:text-primary-200 ${
            theme === "dark"
              ? "background-oregon-grapes"
              : "background-oregon-grapes-light"
          }  dark:bg-no-repeat bg-cover bg-center mt-5`}
        >
          <div className="upper flex items-center justify-between py-6 h-auto">
            <Grid container spacing={2} columns={16}>
              <Grid item xs={16} sm={8} order={{ xs: 2, sm: 1 }}>
                <div className="sm:mt-15 md:px-10 text-center sm:text-left flex flex-col">
                  <span className="mt-5 text-3xl sm:text-5xl text-bg hover:underline">
                    Verify Certificate
                  </span>
                  <p className="text-xl font-semibold opacity-70 mt-3">
                    Verify certificate generated using <em>Open-certs</em>
                  </p>
                  <div className="flex items-end mt-6 ">
                    <div>
                      <span className="block  text-xl font-medium text-gray-900 mb-2">
                        Certificate ID
                      </span>
                      <input
                        type={"text"}
                        className="p-2 border w-full rounded-8 text-black"
                        placeholder="enter certificate ID"
                        required
                        name={"certificateID"}
                        value={certificateID}
                        onChange={(e) => setCertificateID(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={() => handleVerify()}
                      className="mx-5 w-1/4 h-2/5 justify-center items-center text-base px-3 sm:px-6"
                      color={
                        theme === "dark" ? "secondary" : "accent-secondary"
                      }
                    >
                      <span className="block">Verify</span>
                    </Button>
                  </div>
                </div>
              </Grid>
              {/* <Grid item>
                <div
                  dangerouslySetInnerHTML={{
                    __html: certificate,
                  }}
                />
              </Grid> */}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
