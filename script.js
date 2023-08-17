/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

/*const getData = async (url) => {
    try {
      const data = await fetch("https://api.github.com/users/login");
      console.log(data.json());
      return data;
    } catch (e) {
      console.log("There was an error fetching the data: " + error)
    }

    document.getElementById("output").innerHTML = data.json();
  }*/


  const getData = async (url) =>{
    return fetch(`https://api.github.com/users`)
    .then(response => response.json())
    /*.then(data => document.getElementById("output").innerHTML =(data).map(user => user.login));*/
    .then(data => document.getElementById("output").innerHTML =((data).map(user => user.login)) + ((data).map(user => user.avatar_url)));
    /*.then(data => data);*/
    /*res = data.filter(user => user.login)*/
    }
    




  


