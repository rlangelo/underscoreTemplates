Assignment #6
Author: Rafael Angelo
URL: rla-cs4241-main.herokuapp.com

My program is a fictional character creation. This character can either be a WPI student or staff.

First, website users input a character name (which is optional). Once the character input name is submitted, it will be displayed on the middle of the page.

Then, users can choose whether they want student or staff (attributes will change depending on that choice). On the Student and Staff buttons, I placed a mouseover event that changes the button color when the mouse pointer is over one of those buttons. They also have a mouse out event, so that when the pointer leaves the button, it goes back to its original color.

Once the user chooses student or staff 3 nested divs appear. The outermost div is the top and the innermost div is the bottom. These divs are clickable (they each have a click event)  and the attributes generated for the character are based on which div is clicked.

If the user chose Student and clicks on one of the divs, the events will be triggered by bubbling. If the user chose Staff and clicks on one of the divs, the events will be triggered by capturing. The differences can be noted by looking at the order of which the attributes appear below the divs.