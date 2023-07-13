import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axiosApiInstance from "../utils/axiosApiInstance";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../rtk/features/users/usersSlice";

const UsersTableOnHomePage = ({ users }) => {
  const { apiInstance } = axiosApiInstance();

  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    apiInstance
      .delete(`/users/${userId}`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table className="w-full border">
        <thead>
          <tr className="text-left">
            <th className="p-2 border-y">Id</th>
            <th className="p-2 border-y">Name</th>
            <th className="p-2 border-y"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="p-2 border-y">{user._id}</td>
              <td className="p-2 border-y">{user.name}</td>
              <td className="p-2 text-right border-y">
                <div className="space-x-2">
                  <Link
                    to={`view-user/${user._id}`}
                    className="px-4 py-2 font-bold text-blue-500 border rounded hover:text-white hover:bg-blue-500"
                  >
                    View
                  </Link>

                  <Link
                    to={`edit-user/${user._id}`}
                    className="px-4 py-2 font-bold text-blue-700 border rounded hover:text-white hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  <button
                    className="px-4 py-2 font-bold text-red-700 border rounded hover:text-white hover:bg-red-700"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UsersTableOnHomePage.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersTableOnHomePage;
