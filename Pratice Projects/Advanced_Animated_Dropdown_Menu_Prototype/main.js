const dropDown = document.getElementsByClassName('dropdown')[0];
const content = document.getElementsByClassName('content')[0];
const child = document.getElementsByClassName('child')[0];
const numChildren = document.getElementsByClassName('child').length;
var contentHeight;

// On DOMCOntentLoaded Gather information about chidren and the the contentHeight for the dropdown. This can be improved to work with a much better updating time instead of re-loading the page all the time if things change within the variables. (Thing for later)

// Future improvements: Use cookies to store the contentHeight so this doesn't have to be executed every time the page is refreshed. Add if statement if the height is available and return;

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


