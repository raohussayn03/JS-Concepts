// 11-storage-local-session-cookie.js

// 💾 Session Manager by Tayab Hussayn

// ✅ Local Storage – stays until cleared
localStorage.setItem("artist", "Tayab Hussayn");
console.log("🎙️ Local:", localStorage.getItem("artist"));

// ✅ Session Storage – gone after tab is closed
sessionStorage.setItem("currentTrack", "Lo-Fi Legends");
console.log("🕒 Session:", sessionStorage.getItem("currentTrack"));

// ✅ Cookies – limited but useful
document.cookie = "mood=Chill; max-age=3600";
console.log("🍪 Cookie:", document.cookie);
