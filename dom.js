// // // // console.log(document.domain)
// // // // console.log(document.URL)
// // // // console.log(document.title)

// // // // console.log(document.forms)
// // // // console.log(document.links)

// // // //GetElementByID

// // // console.log(document.getElementById('item-list'));

// // // var itemList = document.getElementById('item-list')
// // // // console.log(itemList);
// // // // itemList.textContent = 'Hello';
// // // // itemList.innerText = 'Goodbye';
// // // // itemList.innerHTML= '<h1>HELLO</h1>';
// // // itemList.style.borderBottom = 'solid 3px #000';
// // // itemList.style.borderTop = 'solid 3px #000';


// // //getElementsByClassName //
// // // var items = document.getElementsByClassName('list-group-item');
// // // // console.log(items);
// // // // console.log(items[0]);
// // // // items[0].textContent = 'Hello';
 

// // // for(var i = 0; i < items.length; i++){
// // //     items[i].style.backgroundColor = '#f4f4f4';
// // // }

// // var li = document.getElementsByTagName('li');
// //  console.log(li);
// // console.log(li[0]);
// // li[0].textContent = 'Hello';
 

// // for(var i = 0; i < li.length; i++){
// //     li[i].style.backgroundColor = '#f4f4f4';
// // }

// //QUERY SELECTOR //

// // var titles = document.querySelectorAll('.title');

// // console.log(titles);
// // titles[0].textContent = 'Hello';

// // TRAVERSING THE DOM //

// //  var iList = document.querySelectorAll('#item-list');
// // // parentNode

// // console.log(iList[0].childNodes);

// //nextSibling
// // console.log(iList[0].previousElementSibling);

// //Create a div

// var newDiv = document.createElement('div');


// //Add class
 
// newDiv.className = 'class';

// //add id

// newDiv.id = 'id';

// //add attr
// newDiv.setAttribute('title', 'Hello Div');

// //create text nide

// var newDivText = document.createTextNode('Hello brother')

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('div .row');
// var h1 =document.querySelector('div h1');

// console.log(newDiv);

// container.insertBefore(newDiv, h1)
