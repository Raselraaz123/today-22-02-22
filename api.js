function lodeData() {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function photosadd() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => console.log(data))
}
function addAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(rep => rep.json())
    .then(data=>otherfunction(data))
}
function otherfunction(data) {
    const div = document.getElementById('addphoto');
    for (const mama of data) {
        const li = document.createElement('li');
        li.innerText = `name${mama.title}`
        div.appendChild(li);
    }
   console.log(data)
}
 

function addnew(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(rose => rose.json())
    .then(data=>notow(data))
}

function notow(data) {
    const ul = document.getElementById("newFilde")
    for (const newl of data) {
        const li = document.createElement('li');
        li.innerText = `name:${newl.name} username:${newl.username} ${newl.email}`;
        ul.appendChild(li);
    }

    console.log(data)
}



function exboy() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(ronc => ronc.json())
        .then(data => newFunction(data));
}

function newFunction(data) {
    const newonel = document.getElementById('ok');
    for (const office of data) {
        const p = document.createElement('p');
        p.innerText = `comment: ${office.name} body: ${office.body}`;
        newonel.appendChild(p);
        }
    console.log(data)
    
}




function photos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
    .then(data=>one(data))
}
function one(data) {
    const newonel = document.getElementById('to');
    for (const office2 of data) {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${office2.url} " alt="">  comment: body: ${office2.title}`;
        newonel.appendChild(div);
    }
}





function newposts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => newgoon(data));
};

function newgoon(data3) {
    const postarea = document.getElementById('posts');
    for (const post of data3){
    const div3 = document.createElement('div');
    div3.classList.add('post5');
    div3.innerHTML = `<h2>${post.title}</h2
    <p>${post.body}</p>`;
    postarea.appendChild(div3);
        console.log(post)
    }
}
const stuInfo = JSON.stringify({ name: "James", roll: 3 });
// const to=JSON.parse(stuInfo )
console.log(stuInfo.name);
const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.cars
console.log(brand)