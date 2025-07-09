// 03-object-literals.js

// 🎼 Track Info Manager by Tayab Hussayn

const track = {
  title: "Skyline Dreams",
  artist: "Tayab Hussayn",
  genre: "Lofi",
  duration: "2:45",
  play() {
    console.log(`🎧 Now playing: ${this.title} by ${this.artist}`);
  }
};

console.log(track);
track.play();
