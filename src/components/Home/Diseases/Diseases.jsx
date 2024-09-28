import { Link } from "react-router-dom";
import useDiseases from "../../../hooks/useDiseases";
import Container from "../../shared/Container/Container";
import SingleSymptomsCard from "../Symptoms/SingleSymptomsCard/SingleSymptomsCard";

const Diseases = () => {
  const [diseaseInfo] = useDiseases();

  const extraSmallDeviceSymptoms = diseaseInfo.slice(0, 3);
  const smDeviceSymptoms = diseaseInfo.slice(0, 4);
  const xlDeviceSymptoms = diseaseInfo.slice(0, 5);
  const xxlDeviceSymptoms = diseaseInfo.slice(0, 6);

  return (
    <>
      <Container>
        <div className="mb-[80px] lg:mb-[100px] xl:mb-[120px] 2xl:mb-[140px] px-5">
          {/* top */}
          <div className="flex justify-between mb-[35px] lg:mb-10 xl:mb-[49px]">
            <h2 className="text-black font-poppins text-lg sm:text-[22px] md:text-2xl xl:text-[34px] 2xl:text-4xl font-medium leading-[123%]">
              Diseases
            </h2>
            <Link
              to="/"
              className="text-black font-poppins text-lg sm:text-[22px] md:text-2xl xl:text-[34px] 2xl:text-4xl font-medium leading-[123%] cursor-pointer"
            >
              View All
            </Link>
          </div>
          {/* bottom */}
          <div>
            <div className="flex sm:hidden flex-wrap gap-4 lg:gap-6 justify-between">
              {extraSmallDeviceSymptoms.map((singleSymptoms) => (
                <SingleSymptomsCard
                  key={singleSymptoms.id}
                  symptom={singleSymptoms}
                ></SingleSymptomsCard>
              ))}
            </div>
            <div className="hidden sm:flex xl:hidden flex-wrap gap-4 lg:gap-6 justify-between">
              {smDeviceSymptoms.map((singleSymptoms) => (
                <SingleSymptomsCard
                  key={singleSymptoms.id}
                  symptom={singleSymptoms}
                ></SingleSymptomsCard>
              ))}
            </div>
            <div className="hidden xl:flex 2xl:hidden flex-wrap gap-4 lg:gap-6 justify-between">
              {xlDeviceSymptoms.map((singleSymptoms) => (
                <SingleSymptomsCard
                  key={singleSymptoms.id}
                  symptom={singleSymptoms}
                ></SingleSymptomsCard>
              ))}
            </div>
            <div className="hidden 2xl:flex flex-wrap gap-4 lg:gap-6 justify-between">
              {xxlDeviceSymptoms.map((singleSymptoms) => (
                <SingleSymptomsCard
                  key={singleSymptoms.id}
                  symptom={singleSymptoms}
                ></SingleSymptomsCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Diseases;
