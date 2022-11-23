import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../config";
import { cookies } from "../context/AuthContext/AuthReducer";
import { Button } from "./Button";
import displayToast from "./Toast";

type Props = {
  token: string;
  data: any;
  value: number;
};

export default function GenerateCertificate({ token, data, value }: Props) {
  const navigate = useNavigate();
  const [includeUserImage, setIncludeUserImage] = useState<boolean>(true);
  const [includeRepositoryImage, setIncludeRepositoryImage] =
    useState<boolean>(true);
  const generate = async (projectToken: string) => {
    const url = `${apiBaseUrl}/certificate`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies.get("token")}`,
        "project-token": projectToken,
      },
      body: JSON.stringify({
        includeUserImage,
        includeRepositoryImage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          displayToast("Oops! Something went wrong", "failure");
        } else {
          displayToast("Certificate generated Successfully", "success"); //github 503 error
          navigate("/certificate/" + data.certificate._id);
        }
      })
      .catch((err) => {
        displayToast("Oops! Something went wrong", "failure");
      });
  };
  if (Math.min(...Object.values<any>(data)) > value) return null;
  console.log({ includeRepositoryImage, includeUserImage });
  return (
    <div className="py-4">
      <FormGroup sx={{ display: "inline-block" }}>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              value={includeUserImage}
              onChange={() => setIncludeUserImage((prev) => !prev)}
            />
          }
          label="Include user Image"
          className="dark:text-primary inline-block"
        />
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              value={includeRepositoryImage}
              onChange={() => setIncludeRepositoryImage((prev) => !prev)}
            />
          }
          label="Include Repo Image"
          className="dark:text-primary inline-block"
        />
      </FormGroup>
      {/* <div className=" justify-center inline-block">
            <div className="form-check form-switch">
                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
        </div> */}
      <Button
        onClick={() => {
          generate(token);
        }}
      >
        Generate Certificate
      </Button>
    </div>
  );
}
