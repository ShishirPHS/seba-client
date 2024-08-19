import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] bg-[#086060] py-[80px] px-7">
      <div className="flex flex-col items-center justify-center gap-[100px]">
        <p className="text-center font-poppins text-lg max-w-[815px] text-white">
          Sorry, we could not find the page you are looking for. Please check to
          make sure you have typed the URL correctly.
        </p>
        <Link to="/" className="btn font-inter">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
