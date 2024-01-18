import React, { useRef } from "react";
import SideBar from "./SideBar";
import Summary from "./Summary";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  const summarySection = useRef();
  const aboutSection = useRef();
  const portfolioSection = useRef();
  const experienceSection = useRef();
  const skillSection = useRef();
  const contactSection = useRef();

  let pageContentList: any = [
    {
      comp: Summary,
      name: "Summary",
      reference: summarySection,
    },
    {
      comp: About,
      name: "About",
      reference: aboutSection,
    },
    {
      comp: Portfolio,
      name: "Portfolio",
      reference: portfolioSection,
    },
    {
      comp: Experience,
      name: "Experience",
      reference: experienceSection,
    },
    {
      comp: Skills,
      name: "Skills",
      reference: skillSection,
    },
    {
      comp: Contact,
      name: "Contact",
      reference: contactSection,
    },
  ];

  return (
    <>
      {/* Side Bar Section */}
      <div className="flex">
        <div className="h-screen sticky top-0 flex items-center">
          <SideBar headerComponents={pageContentList} />
        </div>

        {/* Page Scroll section */}
        <div className="w-full flex-col">
          {pageContentList.map((res: any, i: any) => {
            return (
              <div
                ref={res.reference}
                key={i}
                className="w-full h-screen flex justify-center items-center"
              >
                <res.comp />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
