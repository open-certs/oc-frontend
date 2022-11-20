import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import displayToast from "../components/Toast";
import { apiBaseUrl } from "../config";
import ThemeContext from "../context/ThemeContext/ThemeProvider";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import CertificateContext from "../context/CertificateContext/CertificateProvider";

const Certificate: React.FC = () => {
  const { setCertificate: setCert } = useContext<any>(CertificateContext);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [certificate, setcertificate] = useState<any>(null);
  const { theme } = useContext<any>(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const url = `${apiBaseUrl}/certificate/certDetails/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
          setcertificate(data.certificate);
          // displayToast("Certificate Found", "success");
        } else {
          displayToast(data.error.message, "failure");
          navigate(-1);
        }
      })
      .catch((err) => {
        displayToast("Oops some thing went wrong!!", "failure");
        navigate(-1);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);
  return (
    <div style={{ minHeight: "calc(100vp - 170px)", width: "100%" }}>
      <div className="mt-9 dark:bg-primary-bgDark ">
        <div
          className={`dark:text-primary-200 ${
            theme === "dark"
              ? "background-oregon-grapes"
              : "background-oregon-grapes-light"
          }  dark:bg-no-repeat bg-cover bg-center mt-5`}
        >
          {loading ? (
            <div className="flex justify-center items-center h-screen w-full">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
          ) : null}
          {certificate && (
            <div className="flex flex-wrap justify-center items-center h-screen w-full">
              <div className="max-w-sm w-full lg:flex">
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal backdrop-blur-xl">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center text-[green]">
                      <AiOutlineSafetyCertificate size={20} /> Certificate Found
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      Certificate of Contribution
                    </div>
                    <p className="text-gray-700 text-base">
                      Issued to <b>{certificate.userName}</b> for his/her/their
                      active contribution in <i>{certificate.projectRepo}</i>{" "}
                      project.
                    </p>
                    <br />
                    <p className="text-gray-600 text-base">
                      Issued on :{" "}
                      <i>{new Date(certificate.createdAt).toLocaleString()}</i>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-6 h-6 rounded-full mr-4"
                      src={certificate.images[0].src}
                      alt={certificate.images[0].url}
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        Last Contribution on{" "}
                      </p>
                      <p className="text-gray-600">
                        <i>
                          {new Date(
                            certificate.lastContributionDate
                          ).toLocaleString()}
                        </i>
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2 flex justify-center">
                    <span
                      className=" cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-secondary"
                      onClick={() => {
                        setCert(certificate);
                      }}
                    >
                      {" "}
                      Download
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Certificate;
