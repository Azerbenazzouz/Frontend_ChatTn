import axios from 'axios';  

function login (email,password) {
  console.log(process.env.REACT_APP_URL , process.env.REACT_APP_X_API_KEY)
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
      url: process.env.REACT_APP_URL+'/user/Regester',
      headers: { 
        'x-api-key': process.env.REACT_APP_XAPIKEY, 
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