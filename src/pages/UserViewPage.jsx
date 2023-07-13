import useDynamicTitle from "../hooks/useDynamicTitle";
import UserView from "../rtk/features/user/userView";

const UserViewPage = () => {
  useDynamicTitle("User Management App - View User");

  return (
    <div>
      <UserView />
    </div>
  );
};

export default UserViewPage;
