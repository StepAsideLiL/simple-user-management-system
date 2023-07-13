import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="py-3 px-2">
        <p className="text-slate-500 text-center">
          Simple User Management System &copy; {year} All rights reserved{" "}
          <Link
            to="http://stepasidelil.web.app/"
            target="_blank"
            className="text-black"
          >
            Rifat Khan
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
