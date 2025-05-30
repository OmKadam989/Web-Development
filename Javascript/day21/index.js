// create an element'

// function attach(content){
// const element = document.createElement('li')
// element.innerHTML= content;

// const element2= document.createElement('li')
// element2.innerHTML= content + "V2.0";

// // to attach with dom
// const parent = document.getElementById("root");

// // parent.appendChild(element); 
// // you can attach 1 statement only

// // parent.append(element,"Hello army",244);
// // you can attach multiple statement 
// parent.append(element,element2)
// }
// attach("TS");
// attach("React");
// attach("Git")

// *********************************************************

// to attach an text node, (hello ji)-jinke sath koi tag nahi hai

//  const element = document.createTextNode("Hello coder army");
//  const parent= document.getElementById("root");
//  parent.append(element);

// Create a atrribute node , what is attribute class , id =root

// access for first child
// konsi attribute create karn hai
// const element = document.createAttribute("id");

// usko value dalni hai
// element.value = "first";

// kis valo ke sath attach arna hai uske liye us list acccess lena hoga
// const curr_list = document.querySelector('li');

// curr list ko attach karna hai 
// curr_list.setAttributeNode(element);

// what if i wnat to access to second list

// to access this we can have parent node from this we can iterate any child node

// access of parent 
// const parent= document.getElementById("root");
// get the html collection -> accessing the children 0
// parent.children[1].setAttributeNode(element);

// ****************************************************

// accessing attributes of a element

// const element = document.getElementById("root"); 
// us element ka access lo

// console.log(element.getAttribute("mohan"));
// uska konsa atrribute chahihye 

// element.setAttribute("class","20");
// we can set an update the attribute

// element.removeAttribute("class");
// remove attribute

// ******************************** add nodes to the dom********************************

// // ?access 0f parent, to store the location

// const parent= document.getElementById("root");

// const element = document.createElement('li');
// element.innerHTML= "TS";

// sabse pahila jayega
// parent.prepend(element);

// html se pahile dalna hai tao sabse pahile htl ki access loo

// const child2= parent.children[1];
// parent.insertBefore(element,child2)

// to replace the new chils with old chid
// parent.replaceChild(element,child2)

// parent.innerHTML = "TS"; isse sare inner html gayab hoke sirf ts rahega

// agar sare innerhtml mai ts ko add karmn hai tao in the form of list
// parent.innerHTML += "<li> TS"

// ul se pahile konsa dusara content dalna hai tao
// const parent =  document.getElementById("root");
// const element = document.createElement("div");
// element.innerHTML= "Hello coder army";

// // parent.insertAdjacentElement("beforebegin", element );
// parent.insertAdjacentElement("afterend",element);

// const parent = document.getElementById('root');
// const element = document.createElement("div");
// element.innerHTML = "Hello coder army";

// // Ensure 'root' has a parent
// if (parent.parentNode) {
//     parent.insertAdjacentElement("afterend", element);
// } else {
//     console.error("'root' does not have a parent node, so 'afterend' won't work.");
// }

// ************************* to delete a node *************************
// const parent= document.getElementById("root");
// document.querySelector('li').remove();


