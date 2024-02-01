var dropDown = document.getElementsByClassName('dropdown')[0];
var content = document.getElementsByClassName('content')[0];
var child = document.getElementsByClassName('child')[0];
var numChildren = document.getElementsByClassName('child').length;
var contentHeight;
var contentWidth;

// On DOMCOntentLoaded Gather information about chidren and the the contentHeight for the dropdown. 
// Future improvements: Use cookies to store the contentHeight so this doesn't have to be executed every time the page is refreshed.
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


