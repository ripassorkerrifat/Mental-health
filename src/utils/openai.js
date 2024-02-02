import {Configuration, OpenAIApi} from "openai";
import {config} from "./envCongif";

// Initialize OpenAI API with configuration
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Function to send message to AI and get response
export async function sendMsgToAi(msg) {
    try {
        // Make API request to create completion
        const response = await openai.createCompletion({
            prompt: msg,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        // Extract and return the text from the first choice in the response
        return response.data.choices[0].text;
    } catch (error) {
        // Handle any errors that occur during the API request
        console.error("Error sending message to AI:", error);
        throw error; // Re-throw the error to propagate it upwards
    }
}
