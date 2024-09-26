import { Link } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Container from "../../components/shared/Container/Container";
import useAllDoctors from "../../hooks/useAllDoctors";
import axios from "axios";

const Doctors = () => {
  const [allDoctors, isLoading] = useAllDoctors();

  const downloadPdf = async () => {
    try {
      const response = await axios({
        url: "https://seba-server-tau.vercel.app/downloadDoctorPdf", // Replace with your actual endpoint
        method: "GET",
        responseType: "blob", // Important to handle binary data
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "doctors.pdf"); // File name
      document.body.appendChild(link);
      link.click();

      // Clean up after download
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  return (
    <>
      <Container>
        <div className="px-5 py-[100px]">
          {isLoading ? (
            <div
              className="animate-spin block mx-auto size-10 border-[4px] border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <div className="mb-[80px]">
                {/* button to download pdf */}
                {/* Add 'disabled-btn' class to style the button as disabled */}
                {/* To disable the button functionality, add the 'disabled' attribute to the button element */}
                <button
                  onClick={downloadPdf}
                  className="bg-primary text-white hover:bg-secondary py-3 px-8 rounded-2xl mt-[10px] transition-all block mx-auto mb-8 cursor-pointer"
                >
                  Download Doctors PDF
                </button>

                <button className="mt-[10px] block mx-auto">
                  <Link
                    to="/add-doctor"
                    className="bg-primary text-white hover:bg-secondary py-3 px-8 rounded-2xl transition-all"
                  >
                    Add Doctor
                  </Link>
                </button>
              </div>
              <div>
                {allDoctors.length > 0 ? (
                  allDoctors?.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
                  ))
                ) : (
                  <>
                    <div className="text-center text-red-600">
                      No doctors found
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Doctors;
