import Banner from "../../components/Home/Banner/Banner";
import BestGynecologistDoctor from "../../components/Home/BestGynecologistDoctor/BestGynecologistDoctor";
import BestSkinDoctor from "../../components/Home/BestSkinDoctor/BestSkinDoctor";
import Diseases from "../../components/Home/Diseases/Diseases";
import DonateYourBlood from "../../components/Home/DonateYourBlood/DonateYourBlood";
import FreeMedicalAdvice from "../../components/Home/FreeMedicalAdvice/FreeMedicalAdvice";
import Symptoms from "../../components/Home/Symptoms/Symptoms";
import VideoConsultation from "../../components/Home/VideoConsultation/VideoConsultation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <VideoConsultation></VideoConsultation>
      <FreeMedicalAdvice></FreeMedicalAdvice>
      <Symptoms></Symptoms>
      <Diseases></Diseases>
      <DonateYourBlood></DonateYourBlood>
      <BestSkinDoctor></BestSkinDoctor>
      <BestGynecologistDoctor></BestGynecologistDoctor>
    </div>
  );
};

export default Home;
