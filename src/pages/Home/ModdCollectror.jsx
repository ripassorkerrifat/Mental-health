import React from "react";
import Container from "../../utils/Container";

const MoodCollectror = () => {
    return (
        <div className="bg-blue-300">
            <Container>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className=" rounded-lg">
                        <div>
                            <h3>How are you today?</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MoodCollectror;
