console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const NewPost = document.createElement("article");
NewPost.classList.add("post");

const PostContent = document.createElement("p");
PostContent.classList.add("post__content");
PostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const PostFooter = document.createElement("footer");
PostFooter.classList.add("post__footer");

const PostUserName = document.createElement("span");
PostUserName.classList.add("post__username");
PostUserName.textContent = "@user";

const PostButton = document.createElement("button");
PostButton.classList.add("post__button");
PostButton.setAttribute("data-js", "like-button");
PostButton.textContent = "♥ Like";

PostFooter.appendChild(PostUserName);
PostFooter.appendChild(PostButton);

NewPost.appendChild(PostContent);
NewPost.appendChild(PostFooter);

document.body.appendChild(NewPost);

PostButton.addEventListener("click", handleLikeButtonClick);
