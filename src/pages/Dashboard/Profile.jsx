import Emotions from "../../components/Emotions/Emotions";
import Chart from "react-apexcharts";
import {useUserContext} from "../../context/AuthProvider";
import {useEffect, useState} from "react";
import {findMood} from "../../utils/findMood";
import {config} from "../../utils/envCongif";
const Profile = () => {
    const {user} = useUserContext();
    const [allMoods, setAllMoods] = useState([]);
    const [anxious, setAnxious] = useState([]);
    const [stressed, setStressed] = useState([]);
    const [happy, setHappy] = useState([]);
    const [angry, setAngry] = useState([]);
    const [sad, setSad] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`${config.base_url}/mood/${user._id}`)
                .then((res) => res.json())
                .then((data) => setAllMoods(data?.data));
        }
    }, []);

    useEffect(() => {
        setAnxious(findMood(allMoods, "Anxious"));
        setStressed(findMood(allMoods, "Stressed"));
        setHappy(findMood(allMoods, "Happy"));
        setAngry(findMood(allMoods, "Angry"));
        setAnxious(findMood(allMoods, "Anxious"));
        setSad(findMood(allMoods, "Sad"));
    }, [allMoods]);
    return (
        <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="md:col-span-2 ">
                    <div className="flex justify-center items-center">
                        <Chart
                            options={{
                                labels: [
                                    "Anxious",
                                    "Stressed",
                                    "Happy",
                                    "Angry",
                                    "Sad",
                                ],
                                legend: {
                                    fontSize: "16px",
                                    labels: {
                                        colors: "#f1f1f1",
                                        useSeriesColors: false,
                                    },
                                    horizontalAlign: "center",

                                    position: "bottom",
                                },
                                theme: {
                                    mode: "light",
                                    palette: "palette",
                                    monochrome: {
                                        enabled: false,
                                        color: "#255aee",
                                        shadeTo: "light",
                                        shadeIntensity: 0.65,
                                    },
                                },
                                responsive: [
                                    {
                                        breakpoint: 978,
                                        options: {
                                            chart: {
                                                width: 380,
                                            },
                                            legend: {
                                                position: "bottom",
                                            },
                                        },
                                    },
                                    {
                                        breakpoint: 480,
                                        options: {
                                            chart: {
                                                width: 300,
                                            },
                                            legend: {
                                                position: "bottom",
                                            },
                                        },
                                    },
                                ],
                            }}
                            series={[
                                anxious?.length ? anxious.length + 1 : 1,
                                stressed?.length ? stressed.length + 1 : 1,
                                happy?.length ? happy.length + 1 : 1,
                                angry?.length ? angry.length + 1 : 1,
                                sad?.length ? sad.length + 1 : 1,
                            ]}
                            type="pie"
                            width={500}
                            height={380}
                        />
                    </div>
                </div>

                <div className="">
                    <Emotions
                        stressed={stressed}
                        anxious={anxious}
                        happy={happy}
                        angry={angry}
                        sad={sad}
                    />
                </div>
                <div className="rounded-lg flex justify-center items-center bg-primary py-10 px-4 relative">
                    <div>
                        <p className="text-center font-semibold text-2xl">17</p>
                        <h2 className="text-2xl mb-2">Your Journals</h2>
                        <button className="btn-primary bg-blue-400">
                            Add journal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
