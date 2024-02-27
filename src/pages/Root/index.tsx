import { Outlet } from "react-router-dom";

export function Root() {
  return(
    <div className="h-full w-full">
      Test
      <Outlet />
    </div>
  )
}

export default Root;