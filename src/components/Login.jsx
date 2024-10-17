import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "..";

const Login = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
  }

  const handleGogleLogin = () => {
    console.log("clicked");
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user.email;
    console.log(user);
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }

  const inputClass = "block text-gray-700 text-sm font-bold mb-2";

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#a6ff98" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign Up
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className={inputClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
            style={{ outlineColor: "#6fc1ff" }}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className={inputClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
            style={{ outlineColor: "#6fc1ff" }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className={inputClass}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
            style={{ outlineColor: "#6fc1ff" }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-4">
          <button
            type="submit"
            className="w-full py-3"
            style={{ backgroundColor: "#6fc1ff", color: "white" }}
          >
            Sign In
          </button>
        </div>

        {/* Google Login Button */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out shadow-sm"
            onClick={handleGogleLogin}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="w-5 h-5 mr-3"
            />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
