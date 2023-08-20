import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

export default function LogInOrSignupButton(props) {
  const { loginWithRedirect } = useAuth0()
  const {btnText,returnTo, screenHint}=props;
  const handleLogin = async () => {
    let params = {
      appState: {
        returnTo: returnTo,
      }
    }
    if (screenHint)
      params.authorizationParams = { screen_hint: screenHint }
    await loginWithRedirect(params);
  };
  return (
    <Link onClick={handleLogin}>{btnText}</Link>
  )
}

LogInOrSignupButton.defaultProps = { returnTo: '/' }