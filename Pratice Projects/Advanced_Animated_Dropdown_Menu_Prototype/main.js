const dropDown = document.getElementsByClassName('dropdown')[0];
const content = document.getElementsByClassName('content')[0];
const child = document.getElementsByClassName('child')[0];
const numChildren = document.getElementsByClassName('child').length;
var contentHeight;

window.addEventListener('DOMContentLoaded', (e) =>{
  content.style.display = 'block';
  contentHeight = child.offsetHeight * numChildren;
  content.style.display = 'none';
});

dropDown.addEventListener('mouseover', (e) => {
  content.style.display = 'block';

  var computedHeight = getComputedStyle(content).getPropertyValue('--content-height');
  if (computedHeight == `${contentHeight}px`){
    return;
  }
  content.style.setProperty('--content-height', `${contentHeight}px`);
});

dropDown.addEventListener('mouseleave', (e) => {
  content.style.display = 'none';
});


