import React from "react";
import Container from "../../utils/Container";
import {useNavigate, useParams} from "react-router-dom";
import Heading from "../../utils/Heading";
import {motion} from "framer-motion";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

const MoodReason = () => {
    const {mood} = useParams();
    const navigate = useNavigate();

    const {user} = useUserContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const values = {};

        for (let i = 1; i <= 6; i++) {
            values[`step${i}`] = [];
            for (let j = 1; j <= 3; j++) {
                values[`step${i}`].push({title: form[`step${i}${j}`].value});
            }
        }
        const step7 = [{title: form.step71.value}];
        const step8 = [{title: form.step81.value}];

        const data = {
            mood: mood,
            userId: user?._id,
            stepFirst: [
                {title: values["step1"][0].title},
                {title: values["step1"][1].title},
                {title: values["step1"][2].title},
            ],
            stepSecond: [
                {title: values["step2"][0].title},
                {title: values["step2"][1].title},
                {title: values["step2"][2].title},
            ],
            stepThird: [
                {title: values["step3"][0].title},
                {title: values["step3"][1].title},
                {title: values["step3"][2].title},
            ],
            stepFourth: [
                {title: values["step4"][0].title},
                {title: values["step4"][1].title},
                {title: values["step4"][2].title},
            ],
            stepFifth: [
                {title: values["step5"][0].title},
                {title: values["step5"][1].title},
                {title: values["step5"][2].title},
            ],
            stepSixth: [
                {title: values["step6"][0].title},
                {title: values["step6"][1].title},
                {title: values["step6"][2].title},
            ],
            stepSeventh: step7,
            stepEighth: step8,
        };

        fetch(`${config.base_url}/mood/write`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Successfully submitted your mood!");
                    form.reset();
                    navigate("/dashboard/my-write-mood");
                } else {
                    console.log(data);
                    return toast.error("Something went wrong");
                }
            });
    };

    return (
        <Container>
            <div className="text-gray-300 py-12">
                {/* Hero Header */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Why are you feeling{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 capitalize">
                            {mood}
                        </span>
                        ?
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Take a moment to reflect on your emotions. Writing down
                        your thoughts can help you understand and process your
                        feelings better.
                    </p>
                </motion.div>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-5xl mx-auto space-y-8">
                    {/* Step 1 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    I am feeling {mood.toLowerCase()} because
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    List specific reasons, situations, or
                                    thoughts that are contributing to your
                                    stress. Be honest and detailed about what's
                                    on your mind.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <input
                                        id={`step1${num}`}
                                        name={`step1${num}`}
                                        type="text"
                                        className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder={`Reason ${num}...`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    How these stressors are affecting me
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Describe the impact of each stressor on your
                                    emotions, physical sensations, and overall
                                    well-being.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <input
                                        id={`step2${num}`}
                                        name={`step2${num}`}
                                        type="text"
                                        className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder={`Impact ${num}...`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Step 3 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    My emotions right now
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Use words to express your emotions. Are you
                                    feeling anxious, overwhelmed, frustrated, or
                                    a mix of emotions?
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <input
                                        id={`step3${num}`}
                                        name={`step3${num}`}
                                        type="text"
                                        className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder={`Emotion ${num}...`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Step 4 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    Positive aspects and coping strategies
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Identify any positive aspects of your
                                    situation or potential coping strategies
                                    that may help you navigate these stressors.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <input
                                        id={`step4${num}`}
                                        name={`step4${num}`}
                                        type="text"
                                        className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder={`Strategy ${num}...`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Step 5 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.5}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                5
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    Actions I can take to alleviate stress
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    List practical steps or actions you can take
                                    to address each stressor and improve your
                                    overall well-being.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <input
                                        id={`step5${num}`}
                                        name={`step5${num}`}
                                        type="text"
                                        className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder={`Action ${num}...`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Step 6 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                6
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    Affirmations for self-compassion
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Write down positive affirmations to
                                    encourage self-compassion and self-kindness.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num}>
                                    <input
                                        id={`step6${num}`}
                                        name={`step6${num}`}
                                        type="text"
                                        className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder={`Affirmation ${num}...`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Step 7 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.7}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                7
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    Gratitude
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Reflect on at least one thing you are
                                    grateful for, even in the midst of stress.
                                </p>
                            </div>
                        </div>
                        <input
                            id="step71"
                            name="step71"
                            type="text"
                            className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            placeholder="I am grateful for..."
                            required
                        />
                    </motion.div>
                    {/* Step 8 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.8}}
                        viewport={{once: true}}
                        className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                8
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    Closing Thoughts
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Summarize your feelings, express any hopes
                                    or intentions for the future, and
                                    acknowledge that it's okay to experience
                                    stress.
                                </p>
                            </div>
                        </div>
                        <textarea
                            id="step81"
                            name="step81"
                            rows="4"
                            className="w-full bg-primary/60 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                            placeholder="Your closing thoughts..."
                            required
                        />
                    </motion.div>
                    {/* Submit Button */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.9}}
                        viewport={{once: true}}
                        className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="group relative px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500  font-bold text-lg rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
                            <p className="relative z-10">
                                Submit Your Reflection
                            </p>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                        </button>
                    </motion.div>
                </form>
            </div>
        </Container>
    );
};

export default MoodReason;
