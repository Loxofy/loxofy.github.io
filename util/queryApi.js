import openAi from "./chatgpt";

const query = async (message) => {
  const res = await openAi
    .createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 1,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `WallbergAI kunde inte besvara din fråga. ${err}`
    );

  return res;
};

export default query;
