import {
  faBullseye,
  faGolfBallTee,
  faHouse,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { TPage } from "../../models/types";
import Home from "../App/Home";

export const managePagesConfig: TPage[] = [
  {
    name: "Home",
    to: "/admin/home",
    component: <Home />,
    icon: faHouse,
  },
  {
    name: "Tee Times",
    to: "/admin/teetimes",
    component: <div>Tee Times</div>,
    icon: faGolfBallTee,
  },
  {
    name: "Driving Range",
    to: "/admin/range",
    component: <div>Driving Range Manager</div>,
    icon: faBullseye,
  },
  {
    name: "Pro Shop",
    to: "/admin/proshop",
    component: <div>Pro Shop</div>,
    icon: faShop,
  },
];
