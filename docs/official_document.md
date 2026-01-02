# Summarize YouTube videos | Genkit

This tutorial demonstrates how to build a conversational application that allows users to summarize YouTube videos and chat about their contents using natural language.

1. [Set up your project](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#1-set-up-your-project)
2. [Import the required dependencies](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#2-import-the-required-dependencies)
3. [Configure Genkit and the default model](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#3-configure-genkit-and-the-default-model)
4. [Get the video URL from the command line](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#4-parse-the-command-line-and-get-the-video-url)
5. [Set up the prompt](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#5-set-up-the-prompt)
6. [Generate the response](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#6-generate-the-response)
7. [Run the app](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#7-run-the-app)

Before starting work, you should have these prerequisites set up:

- [Node.js v20+](https://nodejs.org/en/download)

- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Implementation Steps

[Section titled “Implementation Steps”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#implementation-steps)

After setting up your dependencies, you can build the project.

### 1\. Set up your project

[Section titled “1. Set up your project”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#1-set-up-your-project)

1. Create a directory structure and a file to hold your source code.

    ```
    mkdir -p summarize-a-video/src && \cd summarize-a-video && \touch src/index.ts
    ```

2. Initialize a new TypeScript project.

    ```
    npm init -y
    ```

3. Install the following Genkit dependencies to use Genkit in your project:

    ```
    npm install genkit @genkit-ai/google-genai
    ```

    - `genkit` provides Genkit core capabilities.
    - `@genkit-ai/google-genai` provides access to the Google AI Gemini models.
4. Get and configure your model API key

    To use the Gemini API, which this tutorial uses, you must first configure an API key. If you don’t already have one, [create a key](https://makersuite.google.com/app/apikey) in Google AI Studio.

    The Gemini API provides a generous free-of-charge tier and does not require a credit card to get started.

    After creating your API key, set the `GEMINI_API_KEY` environment variable to your key with the following command:

    ```
    export GEMINI_API_KEY=<your API key>
    ```

### 2\. Import the required dependencies

[Section titled “2. Import the required dependencies”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#2-import-the-required-dependencies)

In the `index.ts` file that you created, add the following lines to import the dependencies required for this project:

```
import { googleAI } from '@genkit-ai/google-genai';import { genkit } from 'genkit';
```

- The first line imports the `googleAI` plugin from the `@genkit-ai/google-genai` package, enabling access to Google’s Gemini models.

### 3\. Configure Genkit and the default model

[Section titled “3. Configure Genkit and the default model”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#3-configure-genkit-and-the-default-model)

Add the following lines to configure Genkit and set Gemini 2.0 Flash as the default model.

```
const ai = genkit({  plugins: [googleAI()],  model: googleAI.model('gemini-2.5-flash'),});
```

You can then add a skeleton for the code and error-handling.

```
(async () => {  try {    // Step 1: get command line arguments    // Step 2: construct prompt    // Step 3: process video  } catch (error) {    console.error('Error processing video:', error);  }})(); // <-- don't forget the trailing parentheses to call the function!
```

### 4\. Parse the command line and get the video URL

[Section titled “4. Parse the command line and get the video URL”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#4-parse-the-command-line-and-get-the-video-url)

Add code to read the URL of the video that was passed in from the command line.

```
// Step 1: get command line argumentsconst videoURL = process.argv[2];if (!videoURL) {  console.error('Please provide a video URL as a command line argument.');  process.exit(1);}
```

### 5\. Set up the prompt

[Section titled “5. Set up the prompt”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#5-set-up-the-prompt)

Add code to set up the prompt:

```
// Step 2: construct promptconst prompt = process.argv[3] || 'Please summarize the following video:';
```

- This `const` declaration defines a default prompt if the user doesn’t pass in one of their own from the command line.

### 6\. Generate the response

[Section titled “6. Generate the response”](https://genkit.dev/docs/tutorials/summarize-youtube-videos/#6-generate-the-response)

Add the following code to pass a multimodal prompt to the model:

```
// Step 3: process videoconst { text } = await ai.generate({  prompt: [{ text: prompt }, { media: { url: videoURL, contentType: 'video/mp4' } }],});console.log(text);
```

This code snippet calls the `ai.generate` method to send a multimodal prompt to the model. The prompt consists of two parts:

- `{ text: prompt }`: This is the text prompt that you defined earlier.

- `{ media: { url: videoURL, contentType: "video/mp4" } }`: This is the URL of the video that you provided as a command-line argument. The `contentType` is set to `video/mp4` to indicate that the URL points to an MP4 video file.

The `ai.generate` method returns an object containing the generated text, which is then logged to the console.

To run the app, open the terminal in the root folder of your project, then run the following command:

```
npx tsx src/index.ts https://www.youtube.com/watch\?v\=YUgXJkNqH9Q
```

After a moment, a summary of the video you provided appears.

You can pass in other prompts as well. For example:

```
npx tsx src/index.ts https://www.youtube.com/watch\?v\=YUgXJkNqH9Q "Transcribe this video"
```

---
Source: [Summarize YouTube videos](https://genkit.dev/docs/tutorials/summarize-youtube-videos/)
