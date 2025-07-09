// 12-closure.js

// 🔒 Private Counter by Tayab Hussayn

function createUploadCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    console.log(`📤 Beats uploaded: ${count}`);
  };
}

const uploadBeat = createUploadCounter();

uploadBeat(); // 1
uploadBeat(); // 2
uploadBeat(); // 3
