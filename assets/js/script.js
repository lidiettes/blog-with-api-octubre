//variables

window.onload = getPost();

const intro = document.getElementById("main-title")
const containerIntro = document.getElementById("container-intro") 
const containerModal = document.getElementById("container-modal")


const userName = []; 
const userId = [];


//functions

// function SaveUser(){
//     fetch ("https://jsonplaceholder.typicode.com/users")
//     .then (response => response.json())
//     .then (data => {
//         data.forEach (e => {
//             userName.push(e.username)
//             userId.push(e.id)
//         })
//     })
// }


function getPost() {
    
    // async function getData(){
    //     const urlUsers = "https://jsonplaceholder.typicode.com/users";
    //     const urlComments = "https://jsonplaceholder.typicode.com/posts/:id/comments";
    //     const responseUsers = await fetch(urlUsers)
    //     const dataUsers = await responseUsers.json()
    //     const responseComments = await fetch("https://jsonplaceholder.typicode.com/posts/:id/comments")
    //     const data = await responseComments.json()
    // }

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 8; i++) {
                let post = document.createElement("div");
                post.innerHTML = `
                <div class="shadow-lg p-3 mb-5 bg-body rounded w-70 main-container"  >
                    <div class="row row-cols-1 " >
                        <div id= "main-title" class="col" type="button"  class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#post${i}">"${data[i].title}"
                        <i class="fa-solid fa-pen-to-square" style="margin-left:20px;"></i>
                        <i class="fa-solid fa-trash-can"></i> </div>
                        
                    
                    </div>
                    
                </div>
                `
                containerIntro.appendChild(post);


                //modal
                let modal = document.createElement("div");
                modal.innerHTML = `
                    <div class="modal fade" id="post${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Post</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        <div id="modal-title" > "${data[i].title}"</div> 
                                        <div id="modal-body"> "${data[i].body}" </div> 
                                        <div id="modal-user" ><p> Names: </p> </div>
                                        <hr>
                                        <div id="container-comments" > <p class="p-comments">Comments</p> </div>
                                    </div>

                                    <div class="modal-footer" >
                                    <button id = "commentsButton" type="button" class="btn btn-primary" onclick="getComments()">Load comments</button>
                                    </div> 

                                </div> 
                        </div> 
                    </div> 
                `
                containerModal.appendChild(modal);
            }
        })
}

function getComments() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(data => {
        const containerComments = document.getElementById("container-comments")
        for (let i = 0; i < 8; i++) {
        let comments = document.createElement("p");
        comments.innerHTML = `
                            ${data[i].body}
                            `
        containerComments.appendChild(comments);
        }
        
    })
    
}

function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(data => {
        const containerName = document.getElementById("modal-user")
        for (let i = 0; i < 8; i++) {
            // if(post.id === user.id){
                let nameUser = document.createElement("p");
                nameUser.innerHTML = `
                            ${data[i].name}
                            `
                containerName.appendChild(nameUser);
            // }
        }
        
    })
    
}

