import useDiseases from "../../../hooks/useDiseases";
import SingleSymptomsCard from "../Symptoms/SingleSymptomsCard/SingleSymptomsCard";

const Diseases = () => {
  const [diseaseInfo] = useDiseases();

  const smallDeviceSymptoms = diseaseInfo.slice(0, 3);
  const largeDeviceSymptoms = diseaseInfo.slice(0, 6);

  return (
    <>
      <div className="container mx-auto mt-[60px] md:mt-[140px] mb-[80px] md:mb-[140px] px-5">
        {/* top */}
        <div className="flex justify-between mb-[35px] md:mb-[49px]">
          <p className="text-black font-poppins text-lg md:text-4xl font-medium leading-[123%]">
            Diseases
          </p>
          <p className="text-black font-poppins text-lg md:text-4xl font-medium leading-[123%] cursor-pointer">
            View All
          </p>
        </div>
        {/* bottom */}
        <div className="flex md:hidden flex-wrap gap-6 justify-between">
          {smallDeviceSymptoms.map((singleSymptoms) => (
            <SingleSymptomsCard
              key={singleSymptoms.id}
              symptom={singleSymptoms}
            ></SingleSymptomsCard>
          ))}
        </div>
        <div className="hidden md:flex flex-wrap gap-6 justify-between">
          {largeDeviceSymptoms.map((singleSymptoms) => (
            <SingleSymptomsCard
              key={singleSymptoms.id}
              symptom={singleSymptoms}
            ></SingleSymptomsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Diseases;
