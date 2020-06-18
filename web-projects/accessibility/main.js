// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};


// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

document.querySelector("#Transcript").style.
display="none";

document.querySelector("#toggleTranscript").
addEventListener('click',showHideTranscript);

function showHideTranscript() {
  toggleTranscript=document.querySelector
  ("#toggleTranscript");
  transcript=document.querySelector("#Transcript");

if((toggleTranscript
  .innerText
  .toLowerCase()
  ).indexOf("show")>=0)
  {
  toggleTranscript.innerText ="Hide Transcript";
  transcript.style.display="block";
}
else{
 toggleTranscript.innerText ="show Transcript";
  transcript.style.display="none";
  
}

}