

import { ElevenLabsClient, play } from '@elevenlabs/elevenlabs-js';
import {createWriteStream} from 'fs';
import {createDialogue} from './utils.js'

const elevenlabs = new ElevenLabsClient({
    apiKey: "sk_2c17725a936248a92285ccb00ffaa957034e934fa8f4cab3", // Defaults to process.env.ELEVENLABS_API_KEY
});

const morningText = 'umm..., pet therapy at 3 PM on 13th Street. Then K Y C update at 6 PM— [concerned] really important, so don’t skip it!'
await createDialogue (morningText, "wealthadvisor-2.mp3");