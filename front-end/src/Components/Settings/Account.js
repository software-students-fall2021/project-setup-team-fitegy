import React from 'react';
import './App.css';

function name() {

    fetch('https://reqres.in/api/users/2')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))

}

function Account(props){

    return(
        
        <div>   
            
            <header>
                <h2>Account</h2>
            </header>

            
            <body className="container">
                
                <p> Name: {props["userInfo"].name} {props["userInfo"].lastName}</p> 
           
                <p>Username: {props["userInfo"].username}</p>

                <p>Location: {props["userInfo"].location}</p>
         
            
            </body>

    
        </div>

    );
}

export default Account;