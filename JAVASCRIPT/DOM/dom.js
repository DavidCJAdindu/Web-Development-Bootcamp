// The DOM

// - Document Object Model.
// - Tree of nodes/elements created by the browser.
// - Javascript can be used to read/write/manipulate to the DOM.
// - Object Oriented Representation. 


console.dir(document);
// Shows the different properties & methods attached to the document object

// Examine the Document Object
console.log(document.domain); // domain
console.log(document.URL); // URL
console.log(document.title); // title of the page
document.title = 'DOM Manipulation'; // change the title of the page
console.log(document.doctype); // outputs the doctype
console.log(document.head); // outputs everything in the head tag
console.log(document.body); // outputs everything in the body tag
console.log(document.all); // outputs a HTML collection of everything in the DOM
console.log(document.forms); // outputs all the 'forms' in the DOM



// >> DOM SELECTORS


// -- GETELEMENTBYID
document.getElementById("Element ID");

console.log(document.getElementById('header-title'));
// ouputs the element with the id 'header-title'

// turn the element with id 'header-title' into a varaible
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

console.log(headerTitle); // output the headerTitle variable
headerTitle.textContent = 'Hello'; // changes the text of 'headerTitle'
headerTitle.innerText = 'Goodbye'; // changes the text of 'headerTitle'
headerTitle.innerHTML = '<h3> Hello </h3>'; // adds a HTML to 'headerTitle'
header.style.borderBottom = 'solid 3px #000'; // changes the styling 


// -- GETELEMENTSBYCLASSNAME
document.getElementsByClassName("Element Class Name");

// turn the elements with class 'list-group-item' into a varaible
var items = document.getElementsByClassName('list-group-item');

console.log(items); // output the items variable
console.log(items[0]); // outputs first item in items HTML Collection
items[0].textContent = 'hello'; // changes the text of the first item 
items[0].style.fontSize = '30px'; // changes the styling of the first item 
items[0].style.backgroundColor = 'yellow'; // change the color to blue

// change background color of all items
for(var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
}


// -- GETELEMENTSBYTAGNAME
document.getElementsByTagName("Tag Name");

// turn the elements with class 'list-group-item' into a varaible
var li = document.getElementsByTagName('li');

console.log(li); // output the items with the 'li' tag
console.log([0]); // outputs the first 'li' tag in a HTML Collection
li[0].textContent = 'hello'; // changes the text of the first 'li' tag
li[0].style.fontSize = '30px'; // changes the styling of the first 'li' tag
li[0].style.backgroundColor = 'yellow'; // change the color to blue

// change background color of all 'li' tags
for(var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = '#f4f4f4';
}


// -- QUERYSELECTOR 
document.querySelector("Tag/Class/ID Name");

// turn the elements with id 'main-header' into a varaible
var header = document.querySelector('#main-header');

header.style.borderBottom = 'solid 4px blue'; // adds a blue border bottom to the header

// turns the element input into a variable
var input = document.querySelector('input');
input.value = 'Hello World'; // adds a value to the input

// turns the element submit type input into a variable
var submit = document.querySelector('input[type="submit"]'); 
submit.value = "Send"; // changes the submit value to send

// turns the 'list-group-item' class into a variable
var item = document.querySelector('.list-group-item');
item.style.color = 'red'; // turns color of first item red.


// -- QUERYSELECTORALL
document.querySelector("Tags/Classes/ID's Names");

// turn the elements with class 'title' into a varaible
var titles = document.querySelectorAll('.title');

console.log(titles); // outputs elements with title class in a node list
titles[0].textContent = 'Hello'; // changes text content of first element to 'Hello'

// change the background colors of the list of items
var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}


// >> TRAVERSING THE DOM


// turn the element with id 'items' into a variable 
var itemList = document.querySelector('#items');
// get parent node parentNode
console.log(itemList.parentNode);
// styling the parent node
itemList.parentNode.style.backgroundColor = 'yellow';
// getting the parent not of the parent node
console.log(itemList.parentNode.parentNode);


// --- PARENT ELEMENT
// turn the element with id 'items' into a variable 
var itemList = document.querySelector('#items');
// get parent node parentNode
console.log(itemList.parentElement);
// styling the parent node
itemList.parentElement.style.backgroundColor = 'yellow';
// getting the parent not of the parent node
console.log(itemList.parentElement.parentElement);


// --- CHILD NODES & CHILDREN
// turn the element with id 'items' into a variable 
var itemList = document.querySelector('#items');
// console.log(itemList.childNodes); // prints child nodes of the element with id 'items'
console.log(itemList.childNodes); // prints children of the 
// console.log(itemList.childNodes); // prints child nodes of the element with id 'items'
console.log(itemList.children); // prints children of the element with id 'items
console.log(itemList.children[1]); // prints second value in the children of the element with id 'items
console.log(itemList.children[1].style.backgroundColor = 'yellow'); // changes the style of the second value in the children of the element with id 'items'


// --- FIRSTCHILD
console.log(itemList.firstChild); //prints the first child of the element with id 'items'
console.log(itemList.firstElementChild); //prints the first element child of the element with id 'items' (more useful than firstchild!)
itemList.firstElementChild.textContent = 'Hello, World'; // changes the text of the first child element with id 'items'


// --- LASTCHILD
console.log(itemList.lastChild); //prints the last child of the element with id 'items'
console.log(itemList.lastElementChild); //prints the last element child of the element with id 'items' (more useful than firstchild!)
itemList.lastElementChild.textContent = 'Goodbye, World'; // changes the text of the last child element with id 'items'


// --- NEXT SIBLING
console.log(itemList.nextSibling); //prints the next sibling of the element with id 'items' 
console.log(itemList.nextElementChild); //prints the next element sibling of the element with id 'items' 


// --- PREVIOUS SIBLING
console.log(itemList.previousSibling); //prints the previous sibling of the element with id 'items' 
console.log(itemList.previousElementSibling); //prints the previous element sibling of the element with id 'items' 
itemList.previousElementSibling.style.color = 'blue'; // turns the previous element sibling of the element with id 'items' color blue


// --- CREATING ELEMENTS IN THE DOM
var newDiv = document.createElement('div'); // create a div
// add a class to the new created div 
newDiv.className = 'hello-class';
// add an id to the new created div 
newDiv.id = 'hello-id'
// add a title attribute to the new created div 
newDiv.setAttribute('title', 'hello-attr');

// create a text node
var newDivText = document.createTextNode('Hello World');
// add text node to div
newDiv.appendChild(newDivText);

// select the div with the element of class inside the header
var container = document.querySelector('header .container');
// turn the h1 inside the header into an element
var h1 = document.querySelector('header h1');
// insert the created text node into the DOM before the element h1
container.insertBefore(newDiv, h1);
// changed the font sixe of the created text node into the DOM before the element h1
newDiv.style.fontSize = '30px';


// >> EVENTS 


// add an event listener 
var button = document.getElementById('button').addEventListener('click', buttonClick);

// function that performs when button is clicked
function buttonClick() {
  alert('hello, world!'); // alert 'hello, world'
  console.log('button clicked'); // output 'button clicked'
  document.getElementById('header-title').textContent  = 'Hello, World'; // change text with element id 'header-title'
  document.querySelector('#main').style.backgroundColor = 'blue'// changes the back ground color of the element with id main

  console.log(e); // outputs the properties of the event
  console.log(e.target); // outputs the element that the event is coming from
  console.log(e.target.id); // outputs the id of the element that the event is coming from
  console.log(e.target.className); // outputs the class of the element that the event is coming from
  console.log(e.type); // outputs the type of event
  console.log(e.clientX); // outputs where the mouse is clicked on the X-axis (from the browser window)
  console.log(e.clientY); // outputs where the mouse is clicked on the Y-axis (from the browser window)
  console.log(e.offsetX); // outputs where the mouse is clicked on the X-axis (from the element)
  console.log(e.offsetY); // outputs where the mouse is clicked on the Y-axis (from the element)

  console.log(e.altKey); // outputs true/false weather you are holding alt key while clicking
  console.log(e.ctrlKey); // outputs true/false weather you are holding ctrl key while clicking
  console.log(e.shiftKey); // outputs true/false weather you are holding shift key while clicking

}


// --- TYPES OF EVENTS

button.addEventListener('click', runEvent); // click event
button.addEventListener('dblclick', runEvent); // double click event
button.addEventListener('mousedown', runEvent); // click down
button.addEventListener('mouseup', runEvent); // click up


// variable created from element with id 'box'
var box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent); // mouse enter the element
box.addEventListener('mouseleave', runEvent); // mouse leave the element

box.addEventListener('mouseover', runEvent); // mouse over the element (includes any inner elements)
box.addEventListener('mouseout', runEvent); // mouse out the element(includes any inner elements)

// funtion that outputs the type of event
function runEvent(e) {
  console.log('Event type: ' + e.type);
}


// mouse event lister
box.addEventListener('mousemove', locationEvent);
// funtion that in called when 'mousemove' in element
function locationEvent(e) {
  console.log( '<h3>MouseX: ' + e.offsetX + '</h3> <h3>MouseY: ' + e.offsetY + '</h3>' ); // outputs the position of the mouse on the X&Y axis
  box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"; // changes background color depending on position of mouse on X&Y axis
}


// variable made from element with input type 'text'
var itemInput = document.querySelector('input[type="text"]');

itemInput.addEventListener('keydown', runEvent) // key pressed down
itemInput.addEventListener('keyup', runEvent) // key released up
itemInput.addEventListener('keypress', runEvent) // key pressed

function runEvent(e) {
  // console.log('i am happy');
  console.log(e.target.value); // outputs value of the keydown
}


// variable made from select element
var select = document.querySelector('select');
// event listener added to select variavle
select.addEventListener('change', runEvent)

function runEvent(e) {
  console.log('i am happy'); // outputs when value is changed
}


// variable made from form element
var form = document.querySelector('form');
// event listener added to select variavle
form.addEventListener('submit', runEvent)

function runEvent(e) {
  console.log('i am happy'); // outputs when value is submitted
}























