

import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
import {createWriteStream} from 'fs';
import {createDialogue} from './utils.js'

const elevenlabs = new ElevenLabsClient({
    apiKey: "sk_2c17725a936248a92285ccb00ffaa957034e934fa8f4cab3", // Defaults to process.env.ELEVENLABS_API_KEY
});

const morningText = '[smiling] booking  cab….[smiling] hey.., Tesla is booked, will arrive in 5 mts.'
await createDialogue (morningText, "audio/wealthadvisor-3.mp3");