import { useNavigate, useParams } from "react-router-dom";
import useDynamicTitle from "../hooks/useDynamicTitle";
import { useForm } from "react-hook-form";
import axiosApiInstance from "../utils/axiosApiInstance";

const UserEditPage = () => {
  useDynamicTitle("User Management App - Edit User");

  const params = useParams();
  const userId = params.id;

  const navigate = useNavigate();
  const { apiInstance } = axiosApiInstance();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () =>
      apiInstance.get(`/users/${userId}`).then((res) => res.data),
  });

  const handleFormEdit = (data) => {
    apiInstance
      .put(`/users/${userId}`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="py-3 text-2xl font-bold text-center">Edit User</h1>

      <form onSubmit={handleSubmit(handleFormEdit)} className="space-y-3">
        <div>
          <label className="text-xl">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
            // defaultValue={user?.name}
            className="w-full p-3 border-2 rounded outline-none focus:border-black"
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-600">
              Name is required
            </p>
          )}
        </div>

        <div>
          <label className="text-xl">Email</label>
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
            // defaultValue={user?.email}
            className="w-full p-3 border-2 rounded outline-none focus:border-black"
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-600">
              Email is required
            </p>
          )}
        </div>

        <div>
          <label className="text-xl">Phone</label>
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Phone"
            // defaultValue={user?.phone}
            className="w-full p-3 border-2 rounded outline-none focus:border-black"
          />
          {errors.phone?.type === "required" && (
            <p role="alert" className="text-red-600">
              Phone is required
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="px-5 py-2 text-2xl text-blue-700 border-2 rounded hover:bg-blue-700 hover:text-white hover:border-blue-700"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEditPage;
