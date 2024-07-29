// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// • Task 1: Select an HTML element by its ID and change its text content.

var element = document.getElementById("text_content")
element.textContent = "This is the new text content"


// • Task 2: Select an HTML element by its class and change its background color.

var element1 = document.getElementsByClassName("bgcolor")
element1[0].style.backgroundColor = "aqua"



// Activity 2: Creating and Appending Elements

// • Task 3: Create a new div element with some text content and append it to the body.

var newDiv = document.createElement('div')
newDiv.textContent = "This is the new div element created through JS"

document.body.appendChild(newDiv)


// • Task 4: Create a new li element and add it to an existing ul list.

var ulElement = document.getElementById("ul-list")
var newLi = document.createElement("li")
newLi.textContent = "This is from JS" 

ulElement.appendChild(newLi)


// Activity 3: Removing Elements

// • Task 5: Select an HTML element and remove it from the DOM.

var delElement = document.getElementById("del-element")
delElement.remove()


// • Task 6: Remove the last child of a specific HTML element.

var parent = document.getElementById("parent")
parent.lastElementChild.remove()


// Activity 4: Modifying Attributes and Classes

// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

var imageElement = document.getElementById("myImage")
imageElement.setAttribute('src', "javascript.png")


// • Task 8: Add and remove a CSS class to/from an HTML element.

var highlightPara = document.getElementById("highlight-text")
var highlightBtn = document.getElementById("highlight-btn")

highlightPara.classList.add("highlight")
highlightPara.classList.remove("highlight")

highlightBtn.addEventListener("click", function () {
    highlightPara.classList.toggle("highlight")
})

// Activity 5: Event Handling

// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

var paraGraph = document.getElementById("para")
var changeBtn = document.getElementById("changepara")

changeBtn.addEventListener("click", function() {
    paraGraph.textContent = "The paragraph is changed !"
})


// • Task 10: Add a mouseover event listener to an element that changes its border color.

var hover = document.getElementById("brdrclr")

hover.addEventListener("mouseover", function() {
    hover.style.border = "3px solid red"
})