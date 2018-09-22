const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

/* add event listener to fill */
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

/* loop through each empty and add eventlistener  */
empties.forEach(item => item.addEventListener('dragover', dragOver));
empties.forEach(item => item.addEventListener('dragenter', dragEnter));
empties.forEach(item => item.addEventListener('dragleave', dragLeave));
empties.forEach(item => item.addEventListener('drop', dragDrop));

/* drag functions */

function dragStart() {
  this.className += ' hold';

  /* slight delay */
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}
/* append fill element when this becomes empty */
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
