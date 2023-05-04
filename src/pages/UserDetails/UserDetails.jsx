import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const UserDetails = () => {
  const { user, updateUserProfile, updateUserEmail } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = () => {
    updateUserProfile(user, name, photo);

    updateUserEmail(user, email)
      .then(() => {
        toast.success("email updated");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

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

          {/* The button to open modal */}
          <label htmlFor="my-modal" className="btn px-10 bg-blue-500 border-0">
            Edit Info
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-sky-700">
                Change your personal information
              </h3>
              <hr className="my-3" />
              <div>
                <label htmlFor="name" className="ms-2 font-semibold">
                  Your Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="new name"
                  className="input input-bordered w-full max-w-xs mt-2 mx-3"
                />
              </div>
              <div className="my-3">
                <label htmlFor="photo" className="ms-2 font-semibold">
                  Your Photo URL
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="photo"
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="new photo url"
                  className="input input-bordered w-full max-w-xs mt-2 mx-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="ms-2 font-semibold">
                  Email Address
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="new email address"
                  className="input input-bordered w-full max-w-xs mt-2 mx-3"
                />
              </div>
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  className="btn bg-red-500 hover:bg-green-600 border-0"
                  onClick={handleUpdate}
                >
                  Update
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Modal toggle --> */}
          {/* <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Edit Info
          </button> */}

          {/* <!-- Main modal --> */}
          {/* <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          > */}
          {/* <div className="relative w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit your about information
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="photo"
                      name="photo"
                      onChange={(e) => setPhoto(e.target.value)}
                      id="floating_photo"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="photo"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your PhotoURL
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>

                  <button
                    type="submit"
                    onSubmit={handleUpdate}
                    className="bg-green-500 text-white py-2 px-3 rounded-md"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserDetails;
