import { Button } from "antd";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div
      className="h-screen w-screen flex flex-col 
        items-center
        justify-center">
      <div className="flex flex-col gap-5 w-[100]">
  <Link>
      <Button className="w-full border-blue-700 p-5">Login With Google</Button>
      </Link>
      <Link>
      <Button className="w-full ">Login With Github</Button>
      </Link>
      <Link to={"/auth/signin"}>
        <Button className="w-full p-5 border-blue-700">Login with Email</Button>
      </Link>

      <h1>
        Don't have an account <Link to={"/auth/signup"}>Create Account</Link>
      </h1>
      </div>
    </div>
  );
}

export default Auth;