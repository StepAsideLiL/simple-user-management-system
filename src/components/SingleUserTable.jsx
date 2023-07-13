import PropTypes from "prop-types";

const SingleUserTable = ({ user }) => {
  const { _id, name, email, phone } = user;

  return (
    <div>
      <table className="w-full border">
        <thead>
          <tr className="text-left">
            <th className="p-2 border-y">Id</th>
            <th className="p-2 border-y">Name</th>
            <th className="p-2 border-y">Email</th>
            <th className="p-2 border-y">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr key={user._id}>
            <td className="p-2 border-y">{_id}</td>
            <td className="p-2 border-y">{name}</td>
            <td className="p-2 border-y">{email}</td>
            <td className="p-2 border-y">{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

SingleUserTable.propTypes = {
  user: PropTypes.object.isRequired,
};

export default SingleUserTable;
