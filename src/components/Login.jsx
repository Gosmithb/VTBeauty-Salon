import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div onClick={() => loginWithRedirect()}
      className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <Link to='/iniciosesion' className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
        Iniciar Sesion
      </Link>
    </div>
  )
  // <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;