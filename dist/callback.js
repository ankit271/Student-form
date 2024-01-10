// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// setInterval(function(){
//     console.log('hiiii')
// },3000)

// function getname(){
//    try {
//       const response =  fetch('https://jsonplaceholder.typicode.com/todos/1')
//       const data = JSON.parse(response);
//       console.log(data)       
//    } catch (error) {
//       console.log(error)
//    }
// }

// getname();
console.log('hello')

fetch('https://api.github.com/users/ankit271')
      .then(response => response.json())
      .then(json => console.log(json))