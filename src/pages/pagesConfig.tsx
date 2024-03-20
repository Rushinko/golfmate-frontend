import { faBullseye, faGolfBallTee, faHouse, faShop } from "@fortawesome/free-solid-svg-icons";
import { TPage } from "../models/types";
import Home from "./Home/Home";
import { HomeIcon } from "@radix-ui/react-icons";





export const pagesConfig: TPage[] = [
  {
    name: "Home",
    to: "/home",
    component: <Home />,
    icon: faHouse,
  },
  {
    name: "Tee Times",
    to: "/teetimes",
    component: <div>Tee Times</div>,
    icon: faGolfBallTee,
  },
  {
    name: "Driving Range",
    to: "/range",
    component: <div>Driving Range Manager</div>,
    icon: faBullseye,
  },
  {
    name: "Pro Shop",
    to: "/proshop",
    component: <div>Pro Shop</div>,
    icon: faShop,
  },
];
