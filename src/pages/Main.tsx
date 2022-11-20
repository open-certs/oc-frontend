import React, { useContext } from "react";
import Lottie from "react-lottie";
import * as HomeAnime from "../assets/home.json";
import AuthContext from "../context/AuthContext/AuthProvider";
import { Grid } from "@mui/material";
import ThemeContext from "../context/ThemeContext/ThemeProvider";
import MicroLogin from "../components/MicroLogin";
import ProjectInput from "../components/ProjectInput";
import ProjectRouter from "../context/ProjectContext/ProjectRouter";

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  const { isAuthenticated } = useContext<any>(AuthContext);
  const { theme } = useContext<any>(ThemeContext);

  return (
    <ProjectRouter>
      <div className="mt-9 dark:bg-primary-bgDark ">
        <div
          className={`dark:text-primary-200 ${
            theme === "dark"
              ? "background-oregon-grapes"
              : "background-oregon-grapes-light"
          }  dark:bg-no-repeat bg-cover bg-center mt-5`}
        >
          <div className=" upper flex items-center justify-between py-6 h-auto">
            <Grid container spacing={2} columns={16}>
              <Grid item xs={16} sm={8} order={{ xs: 2, sm: 1 }}>
                <div className="sm:mt-15 md:px-10 text-center sm:text-left flex flex-col">
                  <span className=" text-5xl sm:text-7xl text-bg hover:underline">
                    Open-Certs
                  </span>
                  <p className="text-xl font-semibold opacity-70">
                    Certify your open source contributions in just few steps.
                  </p>
                  <div className="mt-8">
                    {!isAuthenticated ? <MicroLogin /> : <ProjectInput />}
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={16}
                sm={8}
                order={{ xs: 1, sm: 2 }}
                className="invert dark:invert-0"
              >
                <div id="lottie-Landing-animation" className="sm:mt-15">
                  <Lottie
                    style={{
                      maxWidth: "100%",
                      transformStyle: "flat",
                    }}
                    width={700}
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: HomeAnime,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </ProjectRouter>
  );
};
