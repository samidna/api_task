$(function () {
    let options = ['Posts', 'Comments', 'Albums', 'Photos', 'Todos', 'Users'];
    let select = $('.select');
    let option = `<option disabled selected>Open this select menu</option>`;
    for (let i = 0; i < options.length; i++) {
        option += `<option value="${i}" class="selected">${options[i]}</option>`;
    }
    select.html(option);

    select.on('change', function () {
        let selected = $('.select').val()
        if (selected === "0") {
            posts();
        } else if (selected === "1") {
            comments();
        } else if (selected === "2") {
            albums();
        } else if (selected === "3") {
            photos();
        } else if (selected === "4") {
            todos();
        } else if (selected === "5") {
            users();
        }
    })
})
let table = document.querySelector('.tbl');
let head = document.querySelector('.head');
let mainbody = document.querySelector('.mainbody');
let post = ['UserId', 'Id', 'Title', 'Body'];
let comment = ['PostId', 'Id', 'Name', 'Email', 'Body'];
let album = ['UserId', 'Id', 'Title'];
let photo = ['AlbumId', 'Id', 'Title', 'Url', 'ThumbnailUrl'];
let todo = ['UserId', 'Id', 'Title', 'Completed'];
let user = ['Id', 'Name', 'Username', 'Email', 'Address', 'Phone', 'Website', 'Company']


function posts() {
    let tr = `<tr>`;
    for (let i = 0; i < post.length; i++) {
        tr += `<th>${post[i]}</th>`
    }
    tr += `</tr>`;
    head.innerHTML = tr;

    $.get('https://jsonplaceholder.typicode.com/posts', function (data, status) {
        let tr = '';
        for (let i = 0; i < data.length; i++) {
            tr += `<tr>`;
            tr += `<td>${data[i].userId}</td>`
            tr += `<td>${data[i].id}</td>`
            tr += `<td>${data[i].title}</td>`
            tr += `<td>${data[i].body}</td>`
        }
        tr += `</tr>`;
        mainbody.innerHTML = tr;
    })
}
function comments() {
    let tr = `<tr>`;
    for (let i = 0; i < comment.length; i++) {
        tr += `<th>${comment[i]}</th>`
    }
    tr += `</tr>`;
    head.innerHTML = tr;

    $.get('https://jsonplaceholder.typicode.com/comments', function (data, status) {
        let tr = '';
        for (let i = 0; i < data.length; i++) {
            tr += `<tr>`;
            tr += `<td>${data[i].postId}</td>`
            tr += `<td>${data[i].id}</td>`
            tr += `<td>${data[i].name}</td>`
            tr += `<td>${data[i].email}</td>`
            tr += `<td>${data[i].body}</td>`
        }
        tr += `</tr>`;
        mainbody.innerHTML = tr;
    })
}
function albums() {
    let tr = `<tr>`;
    for (let i = 0; i < album.length; i++) {
        tr += `<th>${album[i]}</th>`
    }
    tr += `</tr>`;
    head.innerHTML = tr;

    $.get('https://jsonplaceholder.typicode.com/albums', function (data, status) {
        let tr = '';
        for (let i = 0; i < data.length; i++) {
            tr += `<tr>`;
            tr += `<td>${data[i].userId}</td>`
            tr += `<td>${data[i].id}</td>`
            tr += `<td>${data[i].title}</td>`
        }
        tr += `</tr>`;
        mainbody.innerHTML = tr;
    })
}
function photos() {
    let tr = `<tr>`;
    for (let i = 0; i < photo.length; i++) {
        tr += `<th>${photo[i]}</th>`
    }
    tr += `</tr>`;
    head.innerHTML = tr;

    $.get('https://jsonplaceholder.typicode.com/photos', function (data, status) {
        let tr = '';
        for (let i = 0; i < data.length; i++) {
            tr += `<tr>`;
            tr += `<td>${data[i].albumId}</td>`
            tr += `<td>${data[i].id}</td>`
            tr += `<td>${data[i].title}</td>`
            tr += `<td><img src="${data[i].url}" alt=""></td>`
            tr += `<td><img src="${data[i].thumbnailUrl}" alt=""></td>`
            console.log(data[i].url);
        }
        tr += `</tr>`;
        mainbody.innerHTML = tr;
    })
}

function todos() {
    let tr = `<tr>`;
    for (let i = 0; i < todo.length; i++) {
        tr += `<th>${todo[i]}</th>`
    }
    tr += `</tr>`;
    head.innerHTML = tr;

    $.get('https://jsonplaceholder.typicode.com/todos', function (data, status) {
        let tr = '';
        for (let i = 0; i < data.length; i++) {
            tr += `<tr>`;
            tr += `<td>${data[i].userId}</td>`
            tr += `<td>${data[i].id}</td>`
            tr += `<td>${data[i].title}</td>`
            tr += `<td>${data[i].completed}</td>`
        }
        tr += `</tr>`;
        mainbody.innerHTML = tr;
    })
}

function users() {
    let tr = `<tr>`;
    for (let i = 0; i < user.length; i++) {
        tr += `<th>${user[i]}</th>`
    }
    tr += `</tr>`;
    head.innerHTML = tr;

    $.get('https://jsonplaceholder.typicode.com/users', function (data, status) {
        let tr = '';
        for (let i = 0; i < data.length; i++) {
            tr += `<tr>`;
            tr += `<td>${data[i].id}</td>`
            tr += `<td>${data[i].name}</td>`
            tr += `<td>${data[i].surname}</td>`
            tr += `<td>${data[i].email}</td>`
            tr += `<td>${data[i].address}</td>`
            tr += `<td>${data[i].phone}</td>`
            tr += `<td>${data[i].website}</td>`
            tr += `<td>${data[i].company}</td>`
        }
        tr += `</tr>`;
        mainbody.innerHTML = tr;
    })
}