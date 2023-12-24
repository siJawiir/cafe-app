import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authServices";
import Loading from "../loading";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const responseData = await authService.login(username, password);
      if (responseData) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center">
      <Loading isVisible={loading} />
      <div className="mb-4 text-center">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500 shadow-sm"
          type="email"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4 text-center">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500 shadow-sm"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="w-1/2 mx-auto mt-4 font-bold bg-white text-gray-500 p-3 rounded focus:outline-none hover:bg-gray-200 shadow-sm"
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
