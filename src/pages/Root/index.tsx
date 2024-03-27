import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { managePagesConfig } from "../Admin/adminPagesConfig";
import { AuthHandler } from "../../components/Auth/AuthHanlder";
import Topbar from "../../components/Topbar/Topbar";

export function Root() {
  return (
    <>
      <AuthHandler />
      <Outlet />
    </>
  );
}

export default Root;
