# Gabot!

<img width="245" height="96" alt="Screenshot 2026-06-29 181831" src="https://github.com/user-attachments/assets/f66c6ae0-b123-4955-9e54-5782d21748b6" />

A simple Slack bot made with **Node.js**, **Slack Bolt**, and **Socket Mode**. It has fun slash commands like cat facts, dog facts, jokes, and random animal pictures.
## Features

* `/gabot-dsb-ping` — Check bot response latency.

* `/gabot-catfact` — Get a random cat fact!

* `/gabot-dogfact` — Get a random dog fact!

* `/gabot-joke` — Get a random joke!

* `/gabot-catpic` — Get a random cat picture!

* `/gabot-dogpic` — Get a random dog picture!

* Automatically replies when someone says "bye" in a channel the bot is in!

 * Optional tags:
For /gabot-catpic you can add optional tags to the photo by just adding them after the command!
    ```
    /gabot-catpic cute

    /gabot-catpic black fluffy
    ```
* You can also specify for a gif by adding "gif" after the command:
    ```
    /gabot-catpic gif sleep
    ```
## Technologies Used

* Node.js

* Slack Bolt
  
* Axios
  
* dotenv

## Installation



Clone the repository:



```bash

git clone <repository-url>

cd bot-slacking-off

```



Install dependencies:



```bash

npm install

```



## Environment Variables



Create a `.env` file in the project root.



```env

SLACK_BOT_TOKEN=xoxb-your-bot-token

SLACK_APP_TOKEN=xapp-your-app-token

```



## Running the Bot



Start the bot with:



```bash

node index.js

```



If everything is configured correctly, you should see:



```text

bot is running!

```



## Slack App Setup



Your Slack app should have:



### Socket Mode



* Enabled



### OAuth Scopes



Bot Token Scopes:



* `commands`

* `chat:write`

* `channels:history`

* `groups:history`

* `im:history`

* `mpim:history`



### Slash Commands



Create the following commands:



* `/gabot-dsb-ping`

* `/gabot-catfact`

* `/gabot-dogfact`

* `/gabot-joke`

* `/gabot-catpic`

* `/gabot-dogpic`



Each command should request URL:



```

https://example.com

```



When using Socket Mode, the request URL is ignored, but Slack requires one when creating the command.



### Event Subscriptions



Subscribe to:



* `message.channels`

* `message.groups`

* `message.im`

* `message.mpim`



## APIs Used



* Cat Facts: https://catfact.ninja/

* Dog Facts: https://dogapi.dog/

* Dog Images: https://dog.ceo/dog-api/

* Cat Images: https://cataas.com/

* Official Joke API: https://official-joke-api.appspot.com/



## Project Structure



```

.

├── index.js

├── package.json

├── package-lock.json

├── .env

└── README.md

```



## Future Ideas



* More commands

* Help command

* Weather lookup

* Poll creation

* Reminders

* Meme generator

* User statistics

* AI chat integration

## What I Learned

- How to build a Slack bot using Node.js and Slack Bolt
- How slash commands and async responses work in Slack
- How to use external APIs and handle failures or bad responses
- How to work with async/await and real world timing issues
- How to debug real errors like Axios errors and Slack block validation errors
- How to use environment variables (.env) to store secrets safely
- How to SSH into a remote Linux server and deploy code
- How systemd services run background processes and how to fix path issues
- That APIs and external services can fail and need fallback handling
- The difference between running code locally vs deploying it to a server

## AI Usage

I used AI as a learning and debugging assistant throughout this project. It helped me understand Slack Bolt, Node.js async/await behavior, and how slash commands work.

It also helped me debug errors such as Axios API failures, Slack `invalid_blocks` formatting issues, and systemd service problems when deploying on a Linux server over SSH.

In addition, AI was used to:
- Help integrate and understand external APIs (cat facts, dog facts, jokes, images)
- Improve error handling and reliability in the bot
- Set up and fix systemd service configuration for background execution
- Suggest improvements to code structure and documentation (README)
