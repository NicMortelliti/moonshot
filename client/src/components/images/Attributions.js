import React from "react";

// Styled Components
import { FooterFinePrint } from "../styles/Footer.styled";

const Attributions = () => {
  // This is an object containing the attribution info
  // for all media used in this application. This object gets
  // mapped through in the "RenderAttributions" function
  // to render them to the page.
  const attributionData = [
    {
      basicName: "Planet image",
      mediaName: "planet.jpg",
      userName: "Javier Miranda",
      userLink:
        "https://unsplash.com/@nuvaproductions?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      siteName: "Unsplash",
      siteLink:
        "https://unsplash.com/s/photos/solar-system?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    {
      basicName: "Spacestation image",
      mediaName: "spacestation.jpg",
      userName: "Bradley Jasper Ybanez",
      userLink:
        "https://unsplash.com/@bradskidley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      siteName: "Unsplash",
      siteLink:
        "https://unsplash.com/collections/1284166/spaceship?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
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
