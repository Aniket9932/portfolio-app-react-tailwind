import React from "react";

function SideBar() {
  let headerComponents: any = [
    {
      comp: "Summary",
    },
    {
      comp: "About",
    },
    {
      comp: "Portfolio",
    },
    {
      comp: "Experience",
    },
    {
      comp: "Skills",
    },
    {
      comp: "Contact",
    },
  ];
  return (
    <div>
      {headerComponents.map((res: any, i: any) => {
        return <div key={i} className="">{res.comp}</div>;
      })}
    </div>
  );
}

export default SideBar;
