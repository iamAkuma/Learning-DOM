// // // // // console.log(document.domain)
// // // // // console.log(document.URL)
// // // // // console.log(document.title)

// // // // // console.log(document.forms)
// // // // // console.log(document.links)

// // // // //GetElementByID

// // // // console.log(document.getElementById('item-list'));

// // // // var itemList = document.getElementById('item-list')
// // // // // console.log(itemList);
// // // // // itemList.textContent = 'Hello';
// // // // // itemList.innerText = 'Goodbye';
// // // // // itemList.innerHTML= '<h1>HELLO</h1>';
// // // // itemList.style.borderBottom = 'solid 3px #000';
// // // // itemList.style.borderTop = 'solid 3px #000';


// // // //getElementsByClassName //
// // // // var items = document.getElementsByClassName('list-group-item');
// // // // // console.log(items);
// // // // // console.log(items[0]);
// // // // // items[0].textContent = 'Hello';
 

// // // // for(var i = 0; i < items.length; i++){
// // // //     items[i].style.backgroundColor = '#f4f4f4';
// // // // }

// // // var li = document.getElementsByTagName('li');
// // //  console.log(li);
// // // console.log(li[0]);
// // // li[0].textContent = 'Hello';
 

// // // for(var i = 0; i < li.length; i++){
// // //     li[i].style.backgroundColor = '#f4f4f4';
// // // }

// // //QUERY SELECTOR //

// // // var titles = document.querySelectorAll('.title');

// // // console.log(titles);
// // // titles[0].textContent = 'Hello';

// // // TRAVERSING THE DOM //

// // //  var iList = document.querySelectorAll('#item-list');
// // // // parentNode

// // // console.log(iList[0].childNodes);

// // //nextSibling
// // // console.log(iList[0].previousElementSibling);

// // //Create a div

// // var newDiv = document.createElement('div');


// // //Add class
 
// // newDiv.className = 'class';

// // //add id

// // newDiv.id = 'id';

// // //add attr
// // newDiv.setAttribute('title', 'Hello Div');

// // //create text nide

// // var newDivText = document.createTextNode('Hello brother')

// // //add text to div
// // newDiv.appendChild(newDivText);

// // var container = document.querySelector('div .row');
// // var h1 =document.querySelector('div h1');

// // console.log(newDiv);

// // container.insertBefore(newDiv, h1)

// //Event Listener//

// var button = document.getElementById('add-item-btn').addEventListener('click', buttonClick);

// function buttonClick(e){
// //    console.log(e.target.className);
// //    var output = document.getElementById('output');
// //    output.innerHTML = '<h3' + e.target.id + '</h3>';

// // console.log(e.clientX); // lol the position of the X axis was 69 //
// // console.log(e.clientY);
// // console.log(e.offsetX);
// // console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// var button = document.getElementById('add-item-btn');
var box = document.getElementById('box');

// // box.addEventListener('mouseover', runEvent);
//  box.addEventListener('mouseout', runEvent);
// // box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mousemove', runEvent);


var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');


// select.addEventListener('input', runEvent);
// itemInput.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    
    console.log('EVENT TYPE: '+e.type);
    e.preventDefault();
    // console.log(e.target.value);
 }
    // document.getElementById('output').innerHTML = '<h3>' +e.target.value+ '</h3>'
//TRACK MOUSE CO-ORDINATES
    // output.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3><h3> MouseY:' +e.offsetY+ '</h3>';

    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+",40)";

