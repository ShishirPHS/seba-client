import { Helmet } from "react-helmet";
import AreYourADoctor from "../../components/Home/AreYourADoctor/AreYourADoctor";
import Banner from "../../components/Home/Banner/Banner";
import BestGynecologistDoctor from "../../components/Home/BestGynecologistDoctor/BestGynecologistDoctor";
import BestSkinDoctor from "../../components/Home/BestSkinDoctor/BestSkinDoctor";
import Blogs from "../../components/Home/Blogs/Blogs";
import Diseases from "../../components/Home/Diseases/Diseases";
import DonateYourBlood from "../../components/Home/DonateYourBlood/DonateYourBlood";
import FreeMedicalAdvice from "../../components/Home/FreeMedicalAdvice/FreeMedicalAdvice";
import Hospital from "../../components/Home/Hospital/Hospital";
import OurPartners from "../../components/Home/OurPartners/OurPartners";
import Reviews from "../../components/Home/Reviews/Reviews";
import Symptoms from "../../components/Home/Symptoms/Symptoms";
import VideoConsultation from "../../components/Home/VideoConsultation/VideoConsultation";
import WhyChoose from "../../components/Home/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seba - Find the Best Doctor Near You</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <VideoConsultation></VideoConsultation>
      <FreeMedicalAdvice></FreeMedicalAdvice>
      <Symptoms></Symptoms>
      <Diseases></Diseases>
      <DonateYourBlood></DonateYourBlood>
      <BestSkinDoctor></BestSkinDoctor>
      <BestGynecologistDoctor></BestGynecologistDoctor>
      <Reviews></Reviews>
      <Hospital></Hospital>
      <Blogs></Blogs>
      <WhyChoose></WhyChoose>
      <OurPartners></OurPartners>
      <AreYourADoctor></AreYourADoctor>
    </div>
  );
};

export default Home;
