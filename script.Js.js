let header = document.getElementsByTagName("header");
let headerHeading = document.getElementById("text");

let headerBackgroundChanger1 = () => {
    header[0].classList.add("header2");
    headerHeading.classList.add("hidden");
};
let headerBackgroundChanger2 = () => {
    header[0].classList.remove("header2");
    headerHeading.classList.remove("hidden");
};
setInterval(headerBackgroundChanger1, 5000);
setInterval(headerBackgroundChanger2, 10000);

const name = document.querySelectorAll('input');
const description = document.querySelector('textarea');
const aligningDiv = document.querySelector('#aligningDiv');
const button = document.querySelector('button');
let comments = [];

// Function to add comments to localStorage
function addComment() {
    const comment = {
        name: name[0].value,
        description: description.value
    };
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    displayNewComment(comment);
    name[0].value = '';
    description.value = '';
}

// Function to display new comment
function displayNewComment(comment) {
    const newComm = document.createElement('div');
    newComm.classList.add('JsClass');
    newComm.innerHTML = `
    <fieldset>
      <legend>${comment.name}</legend>
      <div id="comment-of-people">${comment.description}</div>
    </fieldset>
  `;
    aligningDiv.prepend(newComm);
}

// Function to display existing comments
function displayExistingComments() {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
        comments = JSON.parse(storedComments);
        comments.forEach(comment => {
            const newComm = document.createElement('div');
            newComm.classList.add('JsClass');
            newComm.innerHTML = `
        <fieldset>
          <legend>${comment.name}</legend>
          <div id="comment-of-people">${comment.description}</div>
        </fieldset>`;
            aligningDiv.prepend(newComm);
        });
    }
}

// Event listener
button.addEventListener('click', addComment);

// Display existing comments
displayExistingComments();