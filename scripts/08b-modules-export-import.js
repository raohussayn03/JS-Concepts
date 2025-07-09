// 08b-modules-export-import.js

// 🌍 Beat Importer by Tayab Hussayn

import { beats, addBeat, Producer } from './musicModule.js';

console.log("🎵 Beats Library:", beats);
addBeat("Retro Funk");
console.log("🆕 Updated Beats:", beats);

const tayab = new Producer("Tayab Hussayn");
tayab.produce();
