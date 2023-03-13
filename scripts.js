const names = document.getElementById('name');
const email = document.getElementById('email');
const message= document.getElementById('msg');
const button= document.querySelector('button');

const userInputData = [];

const WriteToLog= () => {
    const username=names.value;
    const Email= email.value;
    const messages= message.value;

    if(username === '' && Email === '' && messages === ''){
        alert('please fill the form')
        console.log('invalid Input')
        return;
    }  
    const userInput={
        user_name:username,
        user_email: Email,
        user_msg: messages,
    } 
     userInputData.push(userInput);  
     console.log(userInputData); 
    
}
const outputData = () => {
   WriteToLog()
   names.value="";
   email.value="";
   message.value= "";  
}
button.addEventListener('click',outputData)

