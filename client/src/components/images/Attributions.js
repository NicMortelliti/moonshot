import React from "react";

// Styled components
import { FooterFinePrint } from "../styles/Footer.styled";

const Attributions = () => {
  // This is an object containing the attribution info
  // for all media used in this application. This object gets
  // mapped through in the "RenderAttributions" function
  // to render them to the page.
  const attributionData = [
    {
      basicName: "Moon image",
      mediaName: "moon.jpg",
      userName: "Tarun",
      userLink: "https://www.pexels.com/@tarun-74117201/",
      siteName: "Pexels",
      siteLink: "https://www.pexels.com/photo/a-half-moon-in-the-sky-8630167/",
    },
  ];

  // For each attribution within attributionData, we
  // will create a separate attribution item.
  const RenderAttributions = () =>
    attributionData.map(
      ({ basicName, userName, userLink, siteName, siteLink }) => {
        return (
          <FooterFinePrint>
            {basicName} by <a href={userLink}>{userName}</a> on{" "}
            <a href={siteLink}>{siteName}</a>
          </FooterFinePrint>
        );
      }
    );

  return <RenderAttributions />;
};

export default Attributions;
