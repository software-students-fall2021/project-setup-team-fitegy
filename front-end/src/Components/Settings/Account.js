import React from 'react';
import './App.css';

function name() {

    fetch('https://reqres.in/api/users/2')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))

}

function Account(){

   
    return(
        
        <div>   
            
            <header>
                <h2>Account</h2>
            </header>

            
            <body className="container">
                
                <p> Name: Jane Smith</p> 

                <p>Age: 21</p>
           
                <p>Username: Jane1</p>
         
                <p>Email: jane@fitegy.com </p>
         
            
            </body>

    
        </div>

    );
}

export default Account;