import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] bg-primary py-[80px] px-7 relative">
      <div className="flex flex-col items-center justify-center gap-[100px] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
        <p className="text-center font-poppins text-lg text-white">
          Sorry, this page is not available
        </p>
        <Link to="/" className="btn font-inter">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
