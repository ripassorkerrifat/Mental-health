import Banner from "./Banner";
import Features from "./Features";
import BreathingExercise from "./BreathingExercise";
import MoodCollector from "./ModdCollector";
import MoodsGuide from "./MoodsGuide";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Support from "./Support";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <MoodCollector />
            <MoodsGuide />
            <BreathingExercise />
            <Testimonials />
            <CallToAction />
            <Support />
        </div>
    );
};

export default Home;
