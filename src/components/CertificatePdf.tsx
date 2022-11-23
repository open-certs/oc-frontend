import React, { useContext, useEffect, useState } from "react";
import "../assets/certificate_assets/certificate.css";
import certbody from "../assets/certificate_assets/cert-body.png";
import CertificateContext from "../context/CertificateContext/CertificateProvider";

interface CertificateProps {}
export const CertificatePdf: React.FC<CertificateProps> = () => {
  const { certificate, setCertificate } = useContext<any>(CertificateContext);
  const [loadedImgs, setLoadedImgs] = useState<number>(0);
  useEffect(() => {
    if (!certificate) return;
    if (loadedImgs >= 2 + certificate.images.length) {
      window.print();
      setCertificate(null);
    }
  }, [setCertificate, certificate, loadedImgs]);

  return (
    <div style={{ maxWidth: "1100px" }}>
      <div className="body">
        <link rel="stylesheet" href="../assets/certificate_assets/print.css" />
        <div id="cert-container">
          <img
            className="cert-body"
            src={certbody}
            alt="Certificate background"
            onLoad={() => setLoadedImgs((prev) => prev + 1)}
          />
          <div className="cert-text">
            <div className="cert-on">
              Certified On:{" "}
              {certificate.createdAt.split("T").join(" ").slice(0, 19)}
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
                {certificate.userName}
              </span>
              <br />
              has actively contibuted to open source project{" "}
              <b>{certificate.projectRepo}</b> of <br />
              <b>{certificate.projectOwner}.</b>
            </div>
            <h2 className="last-contrib">
              <b>Last contributed at : </b>{" "}
              {certificate.lastContributionDate
                .split("T")
                .join(" ")
                .slice(0, 19)}
            </h2>
            <div className="cert-flex-container cert-footer">
              <div>
                <a href={`/certificate/${certificate._id}`}>
                  <img
                    className="icon-qr"
                    src={`https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${certificate.url}`}
                    alt="QR Code"
                    onLoad={() => setLoadedImgs((prev) => prev + 1)}
                  />
                  <br />
                </a>
                <p className="veryfy">Scan to verify</p>
              </div>
              <div className="flex">
                {certificate.images.map((img: any) => (
                  <div className="pt-75px px-[5%] inline-block w-full">
                    <a href={img.url}>
                      <img
                        style={{ width: "150px" }}
                        className="rounded-full"
                        src={img.src}
                        alt={img.url}
                        onLoad={() => setLoadedImgs((prev) => prev + 1)}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="cert-id">
              Certificate Id:{" "}
              {certificate._id.match(new RegExp(".{1,5}", "g")).join("-")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
