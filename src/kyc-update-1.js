

import {createDialogue} from './utils.js'




const morningText = 'Vick, it is 8AM now. KYC update is at 6pm. I will remind you 30 minutes before.'
await createDialogue (morningText, "audio/kyc-update-1.mp3");