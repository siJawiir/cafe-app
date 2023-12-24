import React from "react";
import companyLogo from "../assets/company-logo.png";
import LoginForm from "../components/auth/login-form";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="m-auto w-full max-w-xs">
        <div className="mb-8 text-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-64 h-32 mx-auto mb-4"
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
