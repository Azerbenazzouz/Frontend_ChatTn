import axios from 'axios';  

function login (email,password) {
    console.log( )
    var data = JSON.stringify({
        "email": email,
        "password": password
      });
      console.log(process.env.URL)

      var config = {
        method: 'post',
        url: process.env.URL+'/user/Regester',
        headers: { 
          'x-api-key': process.env.X_API_KEY, 
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
      url: process.env.URL+'/user/Regester',
      headers: { 
        'x-api-key': process.env.X_API_KEY, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      
      if (response.status===299) {
        console.log(response.data.details[0].message);
      }else {
        login(response.data.email,response.data.password);
      }
    })
    .catch(function (error) {
      console.log(error);

    });
    
}

export {login,Register};