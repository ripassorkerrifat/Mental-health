import Banner from "./Banner";
import BreathingExercise from "./BreathingExercise";
import MoodCollectror from "./ModdCollectror";
import MoodsGuide from "./MoodsGuide";
import Support from "./Support";

const Home = () => {
    return (
        <div>
            <Banner />
            <MoodCollectror />
            <MoodsGuide />
            <BreathingExercise />
            <Support />
        </div>
    );
};

export default Home;
