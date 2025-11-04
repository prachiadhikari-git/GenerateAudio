import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
import {createWriteStream} from 'fs';
import {createDialogue} from '../utils.js'

const elevenlabs = new ElevenLabsClient({
    apiKey: "sk_2c17725a936248a92285ccb00ffaa957034e934fa8f4cab3", // Defaults to process.env.ELEVENLABS_API_KEY
});


const morningText = '[smiling] ProcesSing C B D C cross border payment..'
await createDialogue (morningText, "audio-scene-2/cbdc-4.mp3");