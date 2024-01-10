let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: undefined
};

let json = JSON.stringify(student,null,3);
console.log(json);

