// 14-event-loop.js

// 🧠 Event Loop Demo by Tayab Hussayn

console.log("🎬 Script start");

setTimeout(() => {
  console.log("🕒 Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("✅ Promise resolved");
});

console.log("🏁 Script end");

// Output order:
// 🎬 Script start
// 🏁 Script end
// ✅ Promise resolved
// 🕒 Timeout callback
