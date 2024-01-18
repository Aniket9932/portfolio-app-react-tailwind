import React from "react";

function SideBar(props: any) {
  const scrollHandler = (elmRef: any) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <header>
      <ul className="cursor-pointer">
        {props.headerComponents.map((res: any, i: any) => {
          return (
            <div
              key={i}
              onClick={() => {
                scrollHandler(res.reference);
              }}
            >
              {res.name}
            </div>
          );
        })}
      </ul>
    </header>
  );
}

export default SideBar;
