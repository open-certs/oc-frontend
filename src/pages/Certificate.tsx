import React, { useContext } from "react";
import "../assets/certificate_assets/certificate.css";
import certbody from "../assets/certificate_assets/cert-body.png";
import CertificateContext from "../context/CertificateContext/CertificateProvider";

interface CertificateProps {}
export const Certificate: React.FC<CertificateProps> = () => {
  const { certificateData } = useContext<any>(CertificateContext);
  const print = () => {
    window.print();
  };

  return (
    <div style={{ maxWidth: "1100px" }}>
      <div className="body">
        <link rel="stylesheet" href="../assets/certificate_assets/print.css" />
        <div id="cert-container">
          <img className="cert-body" src={certbody} />
          <div className="cert-text">
            <div className="cert-on">
              Certified On:{" "}
              {certificateData.certificate.createdAt
                .split("T")
                .join(" ")
                .slice(0, 19)}
            </div>
            <div className="cert-head">
              <h1 className="text-bg cert-head-text">Certificate</h1>
              <h2 className="text-bg cert-head-text">of Contribution</h2>
            </div>
            <div className="cert-name">
              This is to certify that <br />
              <span
                style={{ fontSize: "2.45rem", color: "red", fontWeight: "900" }}
              >
                {certificateData.certificate.userName}
              </span>
              <br />
              has actively contibuted to open source project{" "}
              <b>{certificateData.certificate.projectRepo}</b> of <br />
              <b>{certificateData.certificate.projectOwner}.</b>
            </div>
            <h2 className="last-contrib">
              <b>Last contributed at : </b>{" "}
              {certificateData.certificate.lastContributionDate
                .split("T")
                .join(" ")
                .slice(0, 19)}
            </h2>
            <div className="cert-flex-container cert-footer">
              <div>
                <a href={`/certificate/${certificateData.certificate._id}`}>
                  <img
                    className="icon-qr"
                    src={`https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${certificateData.certificate.url}`}
                  />
                  <br />
                </a>
                <p className="veryfy">Scan to verify</p>
              </div>
              <div className="pt-75px">
                <a href="https://github.com/">
                  <img
                    className="icon"
                    src={certificateData.certificate.images[0].src}
                  />
                </a>
              </div>
            </div>
            <div className="cert-id">
              Certificate Id:{" "}
              {certificateData.certificate._id
                .match(new RegExp(".{1,5}", "g"))
                .join("-")}
            </div>
          </div>
        </div>
      </div>
      <div className="center" id="print-btn" style={{}}>
        <span onClick={print} className="print">
          print
        </span>
      </div>
    </div>
  );
};

export default Certificate;
