
var myForm = document.querySelector('#my-form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var msg = document.querySelector('.msg');
var userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click', removeUser);


function onSubmit(e){
    e.preventDefault();

    // make sure all fields are filled
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value +" : "+emailInput.value));

        const dltBtn = document.createElement('button');
        dltBtn.className = 'delete';
        dltBtn.appendChild(document.createTextNode('x'));
        li.appendChild(dltBtn);

        userList.appendChild(li);

        // clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

// remove user 
function removeUser(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure ?')){
            const li = e.target.parentElement;
            userList.removeChild(li);
        }
    }
}