
import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
import {createWriteStream} from 'fs';

const elevenlabs = new ElevenLabsClient({
    apiKey: "sk_2c17725a936248a92285ccb00ffaa957034e934fa8f4cab3", // Defaults to process.env.ELEVENLABS_API_KEY
});

// const audio = await elevenlabs.textToSpeech.convert(
//   'JBFqnCBsd6RMkjVDRZzb', // voice_id
//   {
//     text: 'Hey Vick! Morning',
//     modelId: 'eleven_multilingual_v2',
//     outputFormat: 'mp3_44100_128', // output_format
//   }
// );
export async function createDialogue (inputText, outputFile) {
const audio = await elevenlabs.textToDialogue.stream({
  inputs: [
    {
        text: inputText,
        voiceId: 'cgSgspJ2msm6clMCkdW9', // voice_id
        outputFormat: 'mp3_44100_128',
  
    },
  ],
});

const fileName = outputFile

const fileWriteStream = createWriteStream(fileName)

 // Pipe the audio stream to the file
for await (const chunk of audio) {
        fileWriteStream.write(chunk);
}
fileWriteStream.end();
console.log('Audio saved to mp3');
}



