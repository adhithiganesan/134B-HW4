var posts = JSON.parse(localStorage.getItem("posts")) || [];

//Function to create new post
function createNewPost(){
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let summary = document.getElementById("summary").value;

  if(title == null || date == null || summary == null){
    console.log("One of the fields are empty");
    return;
  }

  let newPost = {title: title, date: date, summary: summary};
  
  posts.push(newPost);

  //clear fields
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("summary").value = "";

  //console.log("hey");

  //update local storage
  localStorage.setItem("posts", JSON.stringify(posts));

  //console.log("New post created:", newPost);
  refreshPosts();
}

//Function to refresh list of blog posts
function refreshPosts() {
  //console.log("hey");
  let postList = document.getElementById("postList");

  // Clear current postList
  while (postList.firstChild == true) {
    postList.removeChild(postList.firstChild);
  }

  //console.log("hey");
  posts = JSON.parse(localStorage.getItem("posts")) || [];
  //console.log("hey");
  for (var i = 0; i < posts.length; i++) {
    // Create a new post item
    let singlePost = document.createElement("li");
    //console.log("hey");
    // Create Edit Button
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = (function(post) {
      return function() {
        editPost(post);
      };
    })(posts[i]);
    //console.log("hey");
    // Create Delete Button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = (function(post) {
      return function() {
        deletePost(post);
      };
    })(posts[i]);

    // Update the title, date, and summary of the list item
    singlePost.appendChild(document.createTextNode("Title: " + posts[i].title));
    singlePost.appendChild(document.createElement("br"));
    singlePost.appendChild(document.createTextNode("Date:  " + posts[i].date));
    singlePost.appendChild(document.createElement("br"));
    singlePost.appendChild(document.createTextNode("Summary: " + posts[i].summary));
    singlePost.appendChild(document.createElement("br"));
    singlePost.appendChild(editButton);
    singlePost.appendChild(deleteButton);

    postList.appendChild(singlePost);
    //console.log("hey");
    //console.log("Posts list refreshed.");
  }
}

//Function to edit an existing blog post
function editPost(post) {
  
  var title = prompt("Enter the new title:", post.title);
  var date = prompt("Enter the new date:", post.date);
  var summary = prompt("Enter the new summary:", post.summary);

  //Update values of the post with new values
  post.title = title;
  post.date = date;
  post.summary = summary;

  localStorage.setItem("posts", JSON.stringify(posts));
}

//Function to delete post
function deletePost(post) {
  var index = posts.indexOf(post);
  if(index > -1){
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  refreshPosts();
}

