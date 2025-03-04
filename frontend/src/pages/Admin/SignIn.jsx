import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminSignin } from "../../store/actions";
import { CircularProgress } from "@mui/material";
export default function SignIn() {
  const { isAuthLoading, token, isAuthError } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogIn(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    dispatch(adminSignin({ email, password }));
  }
  useEffect(() => {
    if (token) navigate("/admin");
  }, [token, navigate]);
  return (
    <main className="p-4 sm:p-8 md:p-10 lg:p-14 xl:p-16 ">
      <form
        onSubmit={handleLogIn}
        className="min-h-[300px] flex flex-col items-center justify-center gap-4 text-lg "
      >
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold">
          Admin Login
        </h3>
        <input
          type="email"
          required
          maxLength={200}
          placeholder="Enter Email"
          className="border rounded-md p-2"
        />
        <input
          type="password"
          required
          maxLength={128}
          placeholder="Enter Password"
          className="border rounded-md p-2"
        />
        {isAuthError && <p className="text-red-500">{isAuthError || "Something went wrong."}</p>}
        <button
          disabled={isAuthLoading}
          type="submit"
          className="bg-primary text-white p-2 rounded-md min-w-[100px] disabled:opacity-60 disabled:cursor-progress"
        >
          {isAuthLoading ? <CircularProgress sx={{color:"white"}}/> : <p>Log In</p>}
        </button>
      </form>
    </main>
  );
}
