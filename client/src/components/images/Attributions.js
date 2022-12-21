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
      userName: "MidJourney @nm",
      userLink: null,
      siteName: "MidJourney",
      siteLink:
        "https://cdn.midjourney.com/643db32a-0b97-4f53-8cf5-b42ce8b52261/grid_0.png",
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
