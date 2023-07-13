import useDynamicTitle from "../hooks/useDynamicTitle";
import UsersView from "../rtk/features/users/UsersView";

const HomePage = () => {
  useDynamicTitle("User Management App - Home");

  return (
    <div>
      <UsersView />
    </div>
  );
};

export default HomePage;
