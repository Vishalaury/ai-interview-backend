// import axios from 'axios'

// export const askAi = async (message) => {
//     try{
//         if(!message || !Array.isArray(message) || message.lenght === 0){
//             throw new Error("message array is empty");
//         }
//         const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",{
//             model:"openai/gpt-40-mini",
//             messages: messages
//         },
//         {
//          headers: {
//     Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//     'Content-Type': 'application/json',
//     }},)

//     const content = response?.data?.choices?.[0]?.message?.content;

//     if(!content || !content.trim()){
//         throw new Error("Ai returned empty response");
//     }
//     return content
//     }catch(error){
//                 console.error("OpenRouter Error:", error.response?.data || error.message);
//                 throw new Error("OpenRouter aPI Error");
//     }
// }



import axios from "axios";

export const askAi = async (messages) => {
  try {

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("messages array is empty");
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: messages
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const content = response?.data?.choices?.[0]?.message?.content;

    if (!content || !content.trim()) {
      throw new Error("AI returned empty response");
    }

    return content;

  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message);
    throw new Error("OpenRouter API Error");
  }
};