//variables

const intro = document.getElementById("main-title")
const containerIntro = document.getElementById("container-intro")
const containerModal = document.getElementById("container-modal")


//functions

function getPost() {

    fetch("http://localhost:3000/posts/")

        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 8; i++) {
                let post = document.createElement("div");
                post.innerHTML = `
                <div class="shadow-lg p-3 mb-5 bg-body rounded w-70 main-container"  >
                    <div class="row row-cols-1 " >
                         <div id= "main-title" class="col" type="button" class="btn btn-primary" data-bs-toggle="modal"
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
                            <div id="modal-user">"${data[i].userId}"</div>
                            <hr>
                            <p>Comments</p></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Load comments</button>
                        </div> </div> </div> </div> 
                `
                containerModal.appendChild(modal);
            }
        })
}
//steps

getPost();
