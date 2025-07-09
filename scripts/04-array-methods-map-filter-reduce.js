// 04-array-methods-map-filter-reduce.js

// 🎶 Playlist Analyzer by Tayab Hussayn

const playlist = [
  { title: "Rain Mood", length: 120 },
  { title: "Late Night Loop", length: 180 },
  { title: "Focus Beats", length: 90 },
  { title: "Tayab's Flow", length: 200 }
];

// .map – extract titles
const titles = playlist.map(track => track.title);
console.log("🎵 Track Titles:", titles);

// .filter – only long tracks
const longTracks = playlist.filter(track => track.length >= 150);
console.log("📏 Long Tracks:", longTracks);

// .reduce – total length
const totalTime = playlist.reduce((acc, track) => acc + track.length, 0);
console.log("⏱️ Total Duration:", totalTime, "secs");

// .find – find Tayab’s track
const tayabTrack = playlist.find(track => track.title.includes("Tayab"));
console.log("🎯 Found:", tayabTrack);
