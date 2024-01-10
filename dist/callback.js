// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// setInterval(function(){
//     console.log('hiiii')
// },3000)

function getname(){
   const response =  fetch('https://jsonplaceholder.typicode.com/todos/1')
   const data = response.json()
   console.log(data) 
}

getname();
console.log('hello')