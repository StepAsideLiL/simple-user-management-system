import { useForm } from "react-hook-form";
import useDynamicTitle from "../hooks/useDynamicTitle";
import axiosApiInstance from "../utils/axiosApiInstance";
import { useNavigate } from "react-router-dom";

const UserAddPage = () => {
  useDynamicTitle("User Management App - Add New User");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { apiInstance } = axiosApiInstance();

  const handleFormAdd = (data) => {
    console.log(data);

    apiInstance
      .post("/users", data)
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
      <h1 className="py-3 text-2xl font-bold text-center">Add New User</h1>

      <form onSubmit={handleSubmit(handleFormAdd)} className="space-y-3">
        <div>
          <label className="text-xl">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
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
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAddPage;
