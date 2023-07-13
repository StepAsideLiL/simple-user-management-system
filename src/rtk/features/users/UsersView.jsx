import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import UsersTableOnHomePage from "../../../components/UsersTableOnHomePage";

const UsersView = () => {
  const allUsers = useSelector((state) => state.users);

  const { loading, users, error } = allUsers;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {loading && <div>Loading...</div>}

      {!loading && error ? <div>Error: {error}</div> : null}

      {!loading && users.length ? <UsersTableOnHomePage users={users} /> : null}
    </div>
  );
};

export default UsersView;
