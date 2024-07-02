import Banner from "../../components/Home/Banner/Banner";
import FreeMedicalAdvice from "../../components/Home/FreeMedicalAdvice/FreeMedicalAdvice";
import VideoConsultation from "../../components/Home/VideoConsultation/VideoConsultation";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoConsultation></VideoConsultation>
            <FreeMedicalAdvice></FreeMedicalAdvice>
        </div>
    )
}

export default Home;