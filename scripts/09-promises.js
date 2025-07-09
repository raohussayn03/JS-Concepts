// 09-promises.js

// ⏳ Track Render Simulation by Tayab Hussayn

function renderTrack(trackName) {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.2;
    console.log(`🎛️ Rendering "${trackName}"...`);

    setTimeout(() => {
      if (isSuccess) {
        resolve(`${trackName} rendered successfully!`);
      } else {
        reject(`❌ Failed to render "${trackName}"`);
      }
    }, 1000);
  });
}

// 🧱 Chaining
renderTrack("Lofi Sketch")
  .then(res => {
    console.log(res);
    return renderTrack("Midnight Bounce");
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));

// 🚀 Promise.all vs Promise.race
const track1 = renderTrack("Beat A");
const track2 = renderTrack("Beat B");

Promise.all([track1, track2])
  .then(res => console.log("✅ All rendered:", res))
  .catch(err => console.error("💥 One failed in all:", err));

Promise.race([track1, track2])
  .then(res => console.log("⚡ Fastest render:", res))
  .catch(err => console.error("💣 First to fail:", err));
