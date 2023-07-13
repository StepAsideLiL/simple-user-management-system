import { BsGithub } from "react-icons/bs";
import DynamicHeaderNavigation from "./DynamicHeaderNavigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container max-w-5xl py-5 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Simple User Management System
          </h1>
        </div>

        <div className="flex items-center justify-center gap-3">
          <DynamicHeaderNavigation />

          <Link
            to="https://github.com/StepAsideLiL/simple-user-management-system"
            target="_blank"
          >
            <BsGithub className="text-4xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
