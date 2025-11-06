import {createDialogue} from '../utils.js'

const elevenlabs = new ElevenLabsClient({
    apiKey: "sk_2c17725a936248a92285ccb00ffaa957034e934fa8f4cab3", // Defaults to process.env.ELEVENLABS_API_KEY
});


const morningText = 'hmm... let me check. Sarah are the different things you can help us with?'
await createDialogue (morningText, "audio-scene-3/rm-1.mp3");