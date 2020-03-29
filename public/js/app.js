const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputUserName = document.getElementById('userName');
const inputEmail = document.getElementById('e-mail');
const signup_btn =  document.getElementById('signup-btn');
const userForm = document.querySelector('form');

const getConfirmation = async (data) => {
    const response = await fetch('/user',{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const res = await response.json();
    
}

    signup_btn.addEventListener('click',(e)=>{
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const userName = inputUserName.value;
    const email = inputEmail.value;
    const name = {firstName, lastName};
    
    const newUser = {
        name,
        userName,
        email
    };
    fetch('/signup', {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    }).then(res => {
        return res.json();
    }).then(data => {
        if(data.success === true)
            window.location.href = '/signup';
        else
            console.log('Error: '+data.error);
    });
});
