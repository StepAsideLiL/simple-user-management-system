import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

const DynamicHeaderNavigation = () => {
  const location = useLocation();

  const isHomePage =
    location.pathname[0] === "/" && location.pathname.length === 1
      ? true
      : false;

  if (isHomePage) {
    return (
      <Link
        to="/add-user"
        className="inline-block px-4 py-2 rounded border text-slate-500 border-slate-500 hover:text-black hover:border-black"
      >
        Add User
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className="inline-block px-4 py-2 rounded border text-slate-500 border-slate-500 hover:text-black hover:border-black"
    >
      <span className="flex items-center justify-center">
        <BsArrowLeftShort className="text-2xl" /> <span>Home</span>
      </span>
    </Link>
  );
};

export default DynamicHeaderNavigation;
