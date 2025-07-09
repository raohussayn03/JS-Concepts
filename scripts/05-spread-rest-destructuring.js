// 05-spread-rest-destructuring.js

// 🧠 Producer Tools – Tayab Hussayn

// 🎧 Spread Arrays
const drums = ["kick", "snare"];
const percussion = ["hihat", "clap"];
const fullKit = [...drums, ...percussion];
console.log("🥁 Full Kit:", fullKit);

// 🧱 Spread Object
const artist = { name: "Tayab Hussayn", role: "Producer" };
const artistUpdate = { ...artist, genre: "Lofi" };
console.log("🎙️ Artist:", artistUpdate);

// 🔤 Spread String
const tag = [..."Akyn"];
console.log("🔠 Artist Tag:", tag);

// 🧩 Destructuring Arrays
const [first, second] = fullKit;
console.log("Main Drums:", first, second);

// 📦 Destructuring Objects
const { name, role } = artist;
console.log("🧑‍🎤 Name:", name, "| Role:", role);

// 🔗 Rest Parameters
function mixTrack(title, ...effects) {
  console.log(`🔊 Mixing "${title}" with:`, effects);
}

mixTrack("Tayab's Bounce", "EQ", "Reverb", "Compression");
