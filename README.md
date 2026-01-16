# Example Apukone Client with Ollama

This is a starter template for building an agent that can be connected to Apukone platform.

## Requirements
- [Ollama](https://ollama.com/download)
- [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## How to run it?

1. Install Ollama from the official website at: [https://ollama.com/download](https://ollama.com/download). Ollama is a tool designed to simplify the process of running open-source large language models (LLMs) directly on your computer. Make sure Ollama is running and your model is ready before proceeding to next steps. Ollama website has guides on how to use it, but you will need to run `ollama pull YOUR_MODEL_NAME` at least.

2. Install the latest version of Node.js and NPM: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. Clone the `apukone/apukone-agent-starter` repository by running: `git clone https://github.com/apukone/apukone-agent-starter.git`

4. Navigate to the repository folder: `cd apukone-agent-starter`

5. Install dependencies: `npm install`

6. Rename `.env.example` file to `.env` and replace the values of the two properties inside the file.

- Replace `YOUR_AGENT_TOKEN` with the agent token you find from Apukone UI after creating a new agent.
- Optional: Replace `gemma3:1b` with a model you would like to use with Ollama.

7. Run `index.js` with either `npm run start` or `node index.js`. You should see `Waiting for messages.` in the terminal if the script is running.

8. Now, when you send a message from Apukone using your connected agent id, your agent should receive the message, process it using Ollama, and send the response back to the user who originally sent the message.

## Bonus Tip

Run the script with `pm2 start index.js --name apukone-starter-agent` after installing `npm i pm2 -g`. pm2 is a process manager for nodejs which helps keeping the script running after closing the terminal.