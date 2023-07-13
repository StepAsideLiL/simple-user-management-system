import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";
import { useParams } from "react-router-dom";
import SingleUserTable from "../../../components/SingleUserTable";

const UserView = () => {
  const params = useParams();
  const userId = params.id;

  const singleUser = useSelector((state) => state.user);

  const { loading, user, error } = singleUser;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <div>
      {loading && <div>Loading</div>}

      {!loading && error ? <div>Error: {error.message}</div> : null}

      {!loading && Object.keys(user).length ? (
        <SingleUserTable user={user} />
      ) : null}
    </div>
  );
};

export default UserView;
