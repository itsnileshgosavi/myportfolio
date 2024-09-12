import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
import error_image from "../assets/static/images/error.jpg";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/Theme-Provider";

function ErrorPage() {
    const { theme } = useTheme();
  const error = useRouteError(); // returns an object with error data
  return (
    <div className={`flex justify-center items-center flex-col h-screen dark:bg-gray-900 ${theme=="light" ? "bg-gray-900" : "bg-white"}`}>
      <img src={error_image} alt="error" className="w-96 mix-blend-multiply"/>
      <p className="text-xl md:text-3xl font-bold text-gray-500 font-serif my-5">Oops... Something went wrong</p>
      <h1 className="text-3xl md:text-5xl lg:text-9xl font-bold font-mono text-orange-500 my-5">{error.status} {error.statusText}</h1>
      <p className="text-xl md:text-3xl font-bold text-gray-500 my-5">{error.data}</p>
      <Link to={"/"}>
        <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Back to Home</Button>
      </Link>
    </div>
  )
}

export default ErrorPage