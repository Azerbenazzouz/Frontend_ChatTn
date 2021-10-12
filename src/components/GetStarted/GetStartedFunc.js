import axios from 'axios';  

function accessToken(token){
  var data = JSON.stringify({
    "token": token
  });
  
  var config = {
    method: 'post',
    url: process.env.REACT_APP_URL+'/user/Token',
    headers: { 
      'x-api-key': process.env.REACT_APP_X_API_KEY, 
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



function login (email,password) {
    var data = JSON.stringify({
        "email": email,
        "password": password
      });

      var config = {
        method: 'post',
        url: process.env.REACT_APP_URL+'/user/Login',
        headers: { 
          'x-api-key': process.env.REACT_APP_X_API_KEY, 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        if (response.status===299) {
           return response.data
        }else {
          accessToken(response.data.refreshToken)
          return ""
        }
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
      url: process.env.REACT_APP_URL+'/user/Regester',
      headers: { 
        'x-api-key': process.env.REACT_APP_X_API_KEY, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      
      if (response.status===299) {
        return response.data.details[0].message
      }else {
        login(response.data.email,response.data.password);
      }
    })
    .catch(function (error) {
      console.log(error);

    });
    
}

export {login,Register,accessToken};