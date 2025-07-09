// 13-ajax-http-methods.js

// 🌐 Demo AJAX Calls by Tayab Hussayn

// Dummy URL: https://jsonplaceholder.typicode.com/posts

// GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("📥 GET:", data))
  .catch(err => console.error("GET error", err));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Tayab Track", body: "🔥 Beat", userId: 99 }),
})
  .then(res => res.json())
  .then(data => console.log("📤 POST:", data));

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Updated Beat", body: "✨", userId: 99 }),
})
  .then(res => res.json())
  .then(data => console.log("✏️ PUT:", data));

// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(() => console.log("🗑️ DELETE: Post deleted"));
