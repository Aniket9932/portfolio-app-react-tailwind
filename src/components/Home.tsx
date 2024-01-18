import React from "react";
import SideBar from "./SideBar";
import Summary from "./Summary";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  let pageContentList: any = [
    {
      comp: Summary,
    },
    {
      comp: About,
    },
    {
      comp: Portfolio,
    },
    {
      comp: Experience,
    },
    {
      comp: Skills,
    },
    {
      comp: Contact,
    },
  ];

  return (
    <>
      {/* Side Bar Section */}
      <div className="flex">
        <div className="h-screen sticky top-0 flex items-center">
          <SideBar />
        </div>

        {/* Page Scroll section */}
        <div className="w-full flex-col">
          {pageContentList.map((res: any, i: any) => {
            return (
              <div
                key={i}
                className="w-full h-screen flex justify-center items-center"
              >
                <res.comp />
              </div>
            );
          })}
        </div>
        {/* <div className="w-full flex-col">
          <div className="w-full h-screen flex justify-center items-center">
            <Summary />
          </div>
          <div className="w-full h-screen flex justify-center items-center">
            <About />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
