var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form subit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click',removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value.toLowerCase();

    // check if the item already exist
    let stop = false;
    for(var i = 0; i<itemList.childElementCount; i++){
        if(newItem.indexOf(itemList.children[i].firstChild.textContent.toLowerCase())!=-1){
            stop = true;
        }
    }

    if(!stop){
        // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with input
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'delete';

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // append item to li
    itemList.appendChild(li);
    }
    else{
        alert("This item already exist !");
    }
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}