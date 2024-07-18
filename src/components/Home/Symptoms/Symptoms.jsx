import useSymptoms from "../../../hooks/useSymptoms";
import SingleSymptomsCard from "./SingleSymptomsCard/SingleSymptomsCard";

const Symptoms = () => {
  const [symptomsInfo] = useSymptoms();

  const smallDeviceSymptoms = symptomsInfo.slice(0, 3);
  const lgDeviceSymptoms = symptomsInfo.slice(0, 4);
  const xlDeviceSymptoms = symptomsInfo.slice(0, 5);
  const xxlDeviceSymptoms = symptomsInfo.slice(0, 6);

  return (
    <div className="container mx-auto mt-[38px] lg:mt-[95px] xl:mt-[105px] 2xl:mt-[118px] mb-[60px] lg:mb-[100px] xl:mb-[115px] 2xl:mb-[140px] px-5">
      {/* top */}
      <div className="flex justify-between mb-[35px] lg:mb-10 xl:mb-[49px]">
        <p className="text-black font-poppins text-lg lg:text-2xl xl:text-[34px] 2xl:text-4xl font-medium leading-[123%]">
          Symptoms
        </p>
        <p className="text-black font-poppins text-lg lg:text-2xl xl:text-[34px] 2xl:text-4xl font-medium leading-[123%] cursor-pointer">
          View All
        </p>
      </div>
      {/* bottom */}
      <div>
        <div className="flex lg:hidden flex-wrap gap-6 justify-between">
          {smallDeviceSymptoms.map((singleSymptoms) => (
            <SingleSymptomsCard
              key={singleSymptoms.id}
              symptom={singleSymptoms}
            ></SingleSymptomsCard>
          ))}
        </div>
        <div className="hidden lg:flex xl:hidden flex-wrap gap-6 justify-between">
          {lgDeviceSymptoms.map((singleSymptoms) => (
            <SingleSymptomsCard
              key={singleSymptoms.id}
              symptom={singleSymptoms}
            ></SingleSymptomsCard>
          ))}
        </div>
        <div className="hidden xl:flex 2xl:hidden flex-wrap gap-6 justify-between">
          {xlDeviceSymptoms.map((singleSymptoms) => (
            <SingleSymptomsCard
              key={singleSymptoms.id}
              symptom={singleSymptoms}
            ></SingleSymptomsCard>
          ))}
        </div>
        <div className="hidden 2xl:flex flex-wrap gap-6 justify-between">
          {xxlDeviceSymptoms.map((singleSymptoms) => (
            <SingleSymptomsCard
              key={singleSymptoms.id}
              symptom={singleSymptoms}
            ></SingleSymptomsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
