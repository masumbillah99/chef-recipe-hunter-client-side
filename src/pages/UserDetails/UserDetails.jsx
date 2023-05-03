import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const UserDetails = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-0 md:ps-10 mt-32 md:mb-52">
      <h3 className="text-3xl font-bold">Welcome My Profile</h3>
      <hr className="mt-2 mb-10 w-3/4 md:w-1/3 border-2 border-indigo-800 rounded" />
      <div className="md:w-3/4 mx-auto flex flex-col items-center justify-center gap-5 p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
        <img
          className="object-cover w-1/5 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={user?.photoURL}
          alt="chef picture"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user?.displayName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.email}
          </p>
          <button className="bg-blue-500 text-white py-2 px-3 rounded-md">Edit Info</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
