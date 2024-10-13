import Footer from "../../Components/Global/Footer";
import ResponsiveAppBar from "../../Components/Global/ResponsiveAppBar";
import ClientReview from "../../Components/Home/ClientReview";
import Presentation from "../../Components/Home/Presentation";
import SectionMissions from "../../Components/Home/SectionMissions";
import SectionServices from "../../Components/Home/SectionServices";
import StudentAdvantage from "../../Components/Home/StudentAdvantage";

function Home() {
    return(
        <>
            <ResponsiveAppBar />
            <Presentation />
            <SectionServices />
            <SectionMissions />
            <StudentAdvantage />
            <ClientReview />
            <Footer />
        </>
    )
}

export default Home;