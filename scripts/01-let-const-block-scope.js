// 01-let-const-block-scope.js

// 🎧 Music Producer Setup by Tayab Hussayn

let beatName = "Lofi Vibes";  // let = reassignable
const artist = "Tayab Hussayn";  // const = fixed

console.log("Beat Name:", beatName);
console.log("Artist:", artist);

// 🔒 Block scope example
function uploadBeat() {
  let uploadStatus = "Pending";

  if (true) {
    let uploadStatus = "Uploading...";  // Scoped inside if-block
    console.log("Inside block:", uploadStatus); // Uploading...
  }

  console.log("Outside block:", uploadStatus); // Pending
}

uploadBeat();

// ❌ const reassignment will throw an error
// artist = "Another Artist"; // Uncommenting this will cause error
