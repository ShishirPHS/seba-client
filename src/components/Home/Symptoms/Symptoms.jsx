import useSymptoms from "../../../hooks/useSymptoms";
import SingleSymptomsCard from "./SingleSymptomsCard/SingleSymptomsCard";

const Symptoms = () => {
  const [symptomsInfo] = useSymptoms();

  const smallDeviceSymptoms = symptomsInfo.slice(0, 3);
  const largeDeviceSymptoms = symptomsInfo.slice(0, 6);

  return (
    <div className="container mx-auto mt-[38px] md:mt-[118px] mb-[60px] md:mb-[140px] px-5">
      {/* top */}
      <div className="flex justify-between mb-[35px] md:mb-[49px]">
        <p className="text-black font-poppins text-lg md:text-4xl font-medium leading-[123%]">
          Symptoms
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
  );
};

export default Symptoms;
