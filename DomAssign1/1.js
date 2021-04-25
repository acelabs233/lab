//createElement()
var a = document.createElement('div');
a.innerHTML = "hello";
//appendChild()
var kid = document.getElementById('kid');
kid.appendChild(a);

//textContent
a.textContent = "this is string";

//innerHTML
a.innerHTML = "ohohohoho";

//innerHTML VS createElement
// createElement has better performance than innerHTML because innerHTML will parse the dom again
// createElement is more secure because malicious code may inject into the node


//insertBefore
var b = document.createElement('div');
b.textContent="hello1";
kid.insertBefore(b,a);

//append
var c = document.createElement('div');
c.textContent="append";
kid.append(c);

//prepend
var d = document.createElement('div');
d.textContent="prepend";
kid.prepend(d);

//replaceChild
var e = document.createElement('div');
e.textContent="replace";
kid.replaceChild(e, a);

//removeChild
kid.removeChild(e);

//cloneNode
var clone = kid.cloneNode(true);
kid.append(clone);

//getAttribute
console.log(kid.getAttribute('value'));

//setAttribute
kid.setAttribute('value','lllllllllllllllllll');
console.log(kid.getAttribute('value'));

//removeAttribute
kid.removeAttribute('value');
console.log(kid.getAttribute('value'));

//hasAttribute
console.log(kid.hasAttribute('value'));

// style property
kid.style.color = 'red';

//classList property
kid.classList.add('blue');
for (let cssClass of kid.classList) {
    console.log(cssClass);
}
// elements width and height
kid.style.border='20px solid';
console.log(kid.offsetHeight);
console.log(kid.clientHeight);


//events- page events , 


//this does not work with chrome
document.addEventListener('beforeunload', (event)=>{
    event.preventDefault(); 
    console.log("trigered");
    event.returnValue = '';
});

document.addEventListener('DOMContentLoaded',() => {
    console.log("trigered loaded");
});

//this also does not work
document.addEventListener('unload',() => {
    console.log("trigered unload");
});

//js events, 

var btn = document.getElementById('kid2');
function display(){
    alert("click event");
}
btn.addEventListener('click', display);


//mouse + keyboard events
kid.addEventListener('mouseenter', ()=>{
    kid.style.color = 'blue';
});
kid.addEventListener('mouseleave', ()=>{
    kid.style.color = 'red';
});

var pp = document.getElementById('purple');

document.addEventListener('keydown', (e)=>{
    console.log(e.key);
    if(e.key == 'k'){
        pp.style.color = 'blue';
    }
});

document.addEventListener('keyup', (e)=>{
    console.log(e.key);
    if(e.key == 'k'){
        pp.style.color = 'red';
    }
});
//scroll events

window.addEventListener('scroll',(event) => {
    console.log('Scrolling...');
});