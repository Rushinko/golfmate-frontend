import * as React from "react";
import { TPage } from "../../models/types";
import SidebarNavLink from "./SidebarNavLink";
import Divider from "../Divider/Divider";
import CourseSelect from "../CourseSelect/CourseSelect";
import SidebarProfile from "./SidebarProfile";

type SidbarProps = {
  pages: TPage[];
  size?: "large" | "normal" | "small";
};

export default function Sidebar({
  pages,
  children,
  size = "normal",
}: React.PropsWithChildren<SidbarProps>) {
  const width = () => {
    switch (size) {
      case "normal":
        return "w-56";
      case "large":
        return "w-64";
      case "small":
        return "w-24";
    }
  };

  return (
    <div
      className={`flex flex-col justify-between ${width()} h-full p-4 bg-gray-200 dark:bg-panel dark:text-zinc-100`}
    >
      <div>
        <div className="flex flex-row text-xl">
          <div className="font-extrabold">GOLF</div>MATE
        </div>
        <Divider direction="horizontal" />
        <CourseSelect />
        <Divider direction="horizontal" />
        {pages.map((page) => {
          return <SidebarNavLink key={page.name} page={page} />;
        })}
        {children}
      </div>
      <div>
        <Divider direction="horizontal" />
        <SidebarProfile />
      </div>
    </div>
  );
}
