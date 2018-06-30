const theFourRulesForThis= [
	`Is the function called with new (new binding)? If so, this is the newly constructed object.`,
	`Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.`,
	`Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.`,
	`Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.`
];

//this function will create elements
function createList (theFourRulesForThis) {

    //create unordered list element
    let ul = document.createElement("ul");

    //iterate over theFourRulesForThis array to create individual list items
    for (let i = 0; i < theFourRulesForThis.length; i++){
      //generate list item at the start of each iteration
      let li = document.createElement("li");
      //add string from array indicies to the new list item
      li.appendChild(document.createTextNode(theFourRulesForThis[i]));
      //add list item to the unordered list
      ul.appendChild(li);
    }
    //return the list
    return ul;
}

//add the unordered list to the document inside the list container div
document.getElementById("list-container").appendChild(createList(theFourRulesForThis));
