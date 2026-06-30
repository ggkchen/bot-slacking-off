require("dotenv").config();
const axios = require("axios");

const { App } = require("@slack/bolt");
const { response } = require("express");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/gabot-dsb-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pongy!\nLatency: ${latency}ms` });
});

// app.command("/bot_name-help", async ({ ack, respond }) => {
//   await ack();
//   await respond({
//     text:
// `Available Commands:
// /bot_name-ping - Check bot latency
// /bot_name-catfact - Get a cat fact`
//   });
// });

app.command("/gabot-dogfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://dogapi.dog/api/v1/facts?number=1");
    await respond({ text: `Dog Fact:\n${response.data.facts[0]}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a dog fact." });
  }
});

app.command("/gabot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/gabot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/gabot-catpic", async ({ command, ack, respond }) => {
  await ack();

  try {
  const tags = command.text.trim();
  const tagString = tags.replace(/\s+/g, ",");

  const imageUrl = tagString
    ? `https://cataas.com/cat/${tagString}?${Date.now()}`
    : `https://cataas.com/cat?${Date.now()}`;

  await respond({
    text: tags ? `Cat with tags: ${tags}` : "Random cat!",
    blocks: [
      {
        type: "image",
        image_url: imageUrl,
        alt_text: "Cat"
      }
    ]
  });
} catch (err) {
  console.error("Catpic error:", err?.response?.data || err.message);

  await respond({
    text: "Something went wrong fetching the cat image :( (hint: try using a different tag)"
  });
}

});

app.command("/gabot-dogpic", async ({ ack, respond }) => {
  await ack();
 
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random?`);
    const imageUrl = response.data.message;

    await respond({
      text: `Random dog!`,
      blocks: [
        {
          type: "image",
          image_url: imageUrl,
          alt_text: "Dog"
        }
      ]
    });
  } catch (err) {
    await respond({ text: "Failed to fetch an image." });
  }
});

app.message(async ({ message, say }) => {
  if (message.text.toLowerCase().includes("bye")) {
  const responses = ['byee!!', 'buh buy bye', 'see you!'];
  const saying = responses[Math.floor(Math.random() * responses.length)];
  await say(`${saying}!`);
  }
  
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();