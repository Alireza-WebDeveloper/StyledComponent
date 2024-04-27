import React from "react";
import { Link } from "react-router-dom";

interface LinkContainerProps {
  title: string;
  href: string;
}

const LinkContainer: React.FC<LinkContainerProps> = ({ title, href }) => {
  return (
    <Link className="py-4 px-2 capitalize" to={href}>
      {title}
    </Link>
  );
};

export default LinkContainer;
