//Prevents you from using undeclared variables, aka strict mode of javascript
"use strict";

//you cant put "-" between names for variable in js
//you can use "-" if it's in a class name ur selecting
let burgerButton = document.querySelector(".burger-menu");

//addEventListener checks an event that happens with the variable, and does something with it
//when u click on the burger button, something will happen, aka function toggleBurger will activate
//every time u click the loop restarts
burgerButton.addEventListener("click", toggleBurger);

function toggleBurger() {
	//! means if ... DOESN'T have ..., then add ...
	//if the condition is met, it stops, if its not met it does the else
	//when u go to inspect on google, and click on menu, and it changes to true it means the burger menu opens, reclick and it closes.
	if (!document.body.hasAttribute("burger-active-menu")) {
		document.body.setAttribute("burger-active-menu", true);
	} else {
		document.body.removeAttribute("burger-active-menu");
	}
}
