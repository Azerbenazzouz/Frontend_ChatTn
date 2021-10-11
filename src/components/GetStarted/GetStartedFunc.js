import axios from 'axios';  

function login (email,password) {
    console.log( )
    var data = JSON.stringify({
        "email": email,
        "password": password
      });

      var config = {
        method: 'post',
        url: 'https://chattn.herokuapp.com/user/Login',
        headers: { 
          'x-api-key': "PK/X5#QsE?8lhhYsw!D2;", 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
function Register ( name , email , password ) {

    var data = JSON.stringify({
      "username": name,
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: 'https://chattn.herokuapp.com/user/Regester',
      headers: { 
        'x-api-key': 'PK/X5#QsE?8lhhYsw!D2;', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      
      if (response.status!==299) {
        login(response.data.email,response.data.password);
      }else {
        console.log(response.data.details[0].message);
      }
    })
    .catch(function (error) {
      console.log(error);
      
    });
    
}

export {login,Register};