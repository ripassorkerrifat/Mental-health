import React, {useEffect, useState} from "react";
import Container from "../../utils/Container";
import {
    BsCalendar3,
    BsEmojiLaughing,
    BsEmojiAngry,
    BsEmojiNeutral,
    BsEmojiSunglasses,
} from "react-icons/bs";

import {HiOutlineEmojiSad} from "react-icons/hi";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

// const findMood = (moods, query) => {
//     moods?.filter(
//         (md) => md?.mood?.toLowerCase() == query?.mood?.toLowerCase()
//     );
// };

const findMood = (moods, query) => {
    if (!moods || !query) {
        return [];
    }

    const lowercaseQuery = query?.toLowerCase();

    return moods.filter(
        (md) => md && md.mood && md.mood.toLowerCase() === lowercaseQuery
    );
};

const today = new Date();
const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const year = today.getFullYear();
const month = monthNames[today.getMonth()];
const day = today.getDate();
const formattedDate = `${month} ${day}, ${year}`;

const isDisableButton = (submittedTime) => {
    if (submittedTime) {
        const currentTime = new Date();
        const submittedDateTime = new Date(submittedTime);
        const twentyFourHoursLater = new Date(
            submittedDateTime.getTime() + 24 * 60 * 60 * 1000
        );
        return currentTime < twentyFourHoursLater;
    }
    return false;
};

const remainingTimeUntilEnable = (submittedTime) => {
    if (submittedTime) {
        const currentTime = new Date();
        const submittedDateTime = new Date(submittedTime);
        const twentyFourHoursLater = new Date(
            submittedDateTime.getTime() + 24 * 60 * 60 * 1000
        ); // Add 24 hours to the submitted time
        const remainingTime = twentyFourHoursLater - currentTime;

        // Calculate hours, minutes, and seconds from remaining milliseconds
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }
    return {
        hours: 0,
        minutes: 0,
        seconds: 0,
    }; // Return 0 if submitted time is not provided
};

const MoodCollector = () => {
    const {user} = useUserContext();
    const [allMoods, setAllMoods] = useState("");
    const [mood, setMood] = useState("");

    const [anxious, setAnxious] = useState([]);
    const [stressed, setStressed] = useState([]);
    const [happy, setHappy] = useState([]);
    const [angry, setAngry] = useState([]);
    const [sad, setSad] = useState([]);

    const [lastOne, setLastOne] = useState({});

    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const remaining = remainingTimeUntilEnable(lastOne?.createdAt);
            setRemainingTime(remaining);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [lastOne]);

    useEffect(() => {
        if (user) {
            fetch(`${config.base_url}/mood/${user._id}`)
                .then((res) => res.json())
                .then((data) => setAllMoods(data?.data));
        }
    }, []);

    useEffect(() => {
        if (user) {
            fetch(`${config.base_url}/mood/get-last/${user._id}`)
                .then((res) => res.json())
                .then((data) => setLastOne(data?.data));
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

    const handleSubmit = () => {
        if (!mood) {
            return toast.error("Please select a mood.");
        }
        const moodInfo = {
            userId: user?._id,
            mood,
        };

        fetch(`${config.base_url}/mood`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(moodInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMood("");
                    setAllMoods([...allMoods, data?.data]);
                    setLastOne(data?.data);
                    toast.success(data.message);
                }
            });

        setMood("");
    };

    return (
        <div className="bg-blue-300 text-dark">
            <Container>
                <div className="grid md:grid-cols-2 gap-10 py-16 text-center">
                    <div className="relative rounded-lg flex justify-center items-center bg-primary py-10 px-4">
                        <div>
                            <div className="flex  items-center absolute top-4 left-4 text-sm">
                                <BsCalendar3 size={16} className="mr-2" />{" "}
                                {formattedDate}
                            </div>
                            <h2 className="text-2xl">How are feeling today?</h2>
                            <div className="flex  justify-center items-center mt-2">
                                <BsEmojiLaughing
                                    size={30}
                                    className="-mr-1 bg-purple-400 text-gray-700 rounded-full"
                                />
                                <BsEmojiAngry
                                    size={30}
                                    className="-mr-1 bg-rose-400 text-gray-700 rounded-full"
                                />
                                <HiOutlineEmojiSad
                                    size={37}
                                    className="-mr-1  rounded-full"
                                />
                                <BsEmojiNeutral
                                    size={30}
                                    className="-mr-1 bg-blue-300 rounded-full"
                                />
                                <BsEmojiSunglasses
                                    size={30}
                                    className="-mr-2 bg-yellow-400 rounded-full "
                                />
                            </div>
                            <div className="flex mt-4">
                                <div className="relative">
                                    <select
                                        id="level"
                                        onChange={(e) =>
                                            setMood(e.target.value)
                                        }
                                        value={mood}
                                        name="level"
                                        className="py-2 px-4 block border bg-gray-50 border-gray-400 w-full rounded-md  focus:outline-none">
                                        <option value="" selected disabled>
                                            How's your vibe today?
                                        </option>
                                        <option value="Anxious">Anxious</option>
                                        <option value="Stressed">
                                            Stressed
                                        </option>
                                        <option value="Happy">Happy</option>
                                        <option value="Angry">Angry</option>
                                        <option value="Sad">Sad</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isDisableButton(
                                        lastOne?.createdAt
                                    )}
                                    onClick={handleSubmit}
                                    className={`btn-primary  ml-3 py-1 ${
                                        isDisableButton(lastOne?.createdAt)
                                            ? "bg-gray-400"
                                            : "bg-blue-400"
                                    }`}>
                                    Submit
                                </button>
                            </div>
                            {remainingTime?.seconds > 0 && (
                                <p className={`mt-2 `}>
                                    <span>
                                        You already submitted your vibes. Please
                                        wait {remainingTime?.hours}.
                                        {remainingTime?.minutes}.
                                        {remainingTime?.seconds}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="relative rounded-lg flex justify-center items-center bg-primary py-10 px-4">
                        <div>
                            <h2 className="text-2xl mb-3">Your Emotions</h2>
                            <div className="flex  md:space-x-2">
                                <div className="">
                                    <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                                        <img
                                            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f61f.png"
                                            alt=""
                                            className="md:h-[62px] md:w-[62px] h-10 w-10 rounded-full"
                                        />
                                        <h3 className="">Anxious</h3>
                                        <p>
                                            <b>
                                                {anxious?.length
                                                    ? anxious?.length
                                                    : 0}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                                        <img
                                            src="https://i.pinimg.com/originals/0e/f3/54/0ef3543f7eb319f6203a13e85e69d0a6.png"
                                            alt=""
                                            className="md:h-[57px] md:w-[57px] h-9 w-9 rounded-full"
                                        />
                                        <h3 className="">Stressed</h3>
                                        <p>
                                            <b>
                                                {stressed?.length
                                                    ? stressed?.length
                                                    : 0}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_1280.png"
                                            alt=""
                                            className="md:h-[68px] md:w-[68px] h-11 w-11 rounded-full"
                                        />
                                        <h3 className="">Happy</h3>
                                        <p>
                                            <b>
                                                {happy?.length
                                                    ? happy?.length
                                                    : 0}
                                            </b>
                                        </p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                                        <img
                                            src="https://static-00.iconduck.com/assets.00/angry-face-emoji-2048x1974-nj42m72j.png"
                                            alt=""
                                            className="md:h-[55px] md:w-[55px] h-9 w-9 rounded-full"
                                        />
                                        <h3 className="">Angry</h3>
                                        <p>
                                            <b>
                                                {angry?.length
                                                    ? angry?.length
                                                    : 0}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="-space-y-1 flex items-center justify-center flex-col mr-2">
                                        <img
                                            src="https://i.pinimg.com/564x/cd/18/02/cd1802ee8d12a4396ad4a1bd85a5ebbd.jpg"
                                            alt=""
                                            className="md:h-16 md:w-16 h-10 w-10 rounded-full"
                                        />
                                        <h3 className="">Sad</h3>
                                        <p>
                                            <b>
                                                {sad?.length ? sad?.length : 0}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MoodCollector;
