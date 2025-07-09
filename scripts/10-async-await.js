// 10-async-await.js

// 🎹 Upload Flow by Tayab Hussayn using async/await

function uploadBeat(name) {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.1;

    setTimeout(() => {
      if (success) resolve(`✅ Uploaded "${name}"`);
      else reject(`❌ Failed to upload "${name}"`);
    }, 800);
  });
}

async function runUploadFlow() {
  try {
    const step1 = await uploadBeat("Chillwave");
    console.log(step1);

    const step2 = await uploadBeat("Synth Dreams");
    console.log(step2);

    const step3 = await uploadBeat("808 Soul");
    console.log(step3);
  } catch (err) {
    console.error("⚠️ Upload Error:", err);
  }
}

runUploadFlow();
