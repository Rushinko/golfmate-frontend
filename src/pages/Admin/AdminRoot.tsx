import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { managePagesConfig } from "./adminPagesConfig";

export function AdminRoot() {
  return (
    <div className="h-full w-full flex flex-row">
      <Sidebar pages={managePagesConfig} />
      <div className="w-full h-full bg-gray-50 dark:bg-backdropDark dark:text-zinc-100 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminRoot;
