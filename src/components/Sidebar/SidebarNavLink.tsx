import React from "react";
import { TPage } from "../../models/types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faQuestion } from "@fortawesome/free-solid-svg-icons";

type SidebarNavLinkProps = {
  page: TPage;
  size?: "large" | "normal" | "small";
};

export default function SidebarNavLink({
  page,
  size = "normal",
}: SidebarNavLinkProps) {
  const width = () => {
    switch (size) {
      case "normal":
        return "w-48";
      case "large":
        return "w-56";
      case "small":
        return "w-16";
    }
  };
  return (
    <Link to={page.to} className={`flex flex-row h-12 items-center ${width()}`}>
      <FontAwesomeIcon className="mr-2" icon={page.icon || faQuestion} />
      {page.name}
    </Link>
  );
}
