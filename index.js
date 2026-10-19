
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  for (const post of posts) {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  }
}

async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error("Unable to fetch posts:", error);
  }
}

fetchPosts();
