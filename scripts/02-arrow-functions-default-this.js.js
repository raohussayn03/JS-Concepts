// 02-arrow-default-this.js

// 🎤 Studio Assistant – Arrow Functions by Tayab Hussayn

// ✅ Default parameter
const recordTrack = (track = "Untitled Beat") => {
  console.log(`🎶 Recording: ${track}`);
};

recordTrack(); // Untitled Beat
recordTrack("Midnight Chill");

// ✅ Arrow Function vs Regular Function - 'this' example
const studio = {
  name: "Tayab's Sound Lab",
  artist: "Tayab Hussayn",
  
  regularFunction: function () {
    console.log("Regular:", this.artist); // ✅ 'this' refers to studio
  },
  
  arrowFunction: () => {
    console.log("Arrow:", this.artist); // ❌ 'this' is undefined (arrow functions don’t bind their own 'this')
  }
};

studio.regularFunction(); // Tayab Hussayn
studio.arrowFunction();   // undefined
