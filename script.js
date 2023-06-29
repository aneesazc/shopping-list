var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function toggleFeature(item){
	item.addEventListener("click", function(){
		item.classList.toggle("done");
	})
}

function addDeleteButton(item){
	var button1 = document.createElement("button");
	button1.appendChild(document.createTextNode("Delete"));
	button1.addEventListener("click", function(){
		item.remove();
	})
	item.appendChild(button1);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	toggleFeature(li);
	addDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



for (let i=0; i<listItem.length; i++) {
	toggleFeature(listItem[i]);
	addDeleteButton(listItem[i]);
}
