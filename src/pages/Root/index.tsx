import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { pagesConfig } from "../pagesConfig";

export function Root() {
  return (
    <div className="h-full w-full flex flex-row">
      <Sidebar pages={pagesConfig} />
      <div className="w-full h-full bg-gray-50 dark:bg-backdropDark dark:text-zinc-100 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
