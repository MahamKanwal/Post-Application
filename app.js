function addPost() {

    var postTitle = document.getElementById("post-title");
    var postDescrip = document.getElementById("post-descrip");

    var posts = document.getElementById("post")
    if (postTitle.value && postDescrip.value) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Post has been created',
            showConfirmButton: false,
            timer: 1500,
        });
<div class="card mt-3">
    <div class="card-header fontStyle">
        @Posts
    </div>
    <p class="ps-3">${time}</p>
    <div class="card-body" style="background-image:url(${backgroundImg});">
        <h5 class="card-title fontStyle" id="previousTitle">${postTitle.value}</h5>
        <p class="card-text fontStyle" id="previousDescription">${postDescription.value}</p>
    </div>
    <div class="mt-3 d-flex gap-2 p-3">
        <button type="button" class="btn btn-primary" onclick="editPost(event)">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deletePost(event)">Delete</button>
    </div>
</div>

postTitle.value = "";
postDescrip.value = "";

}

else{
    Swal.fire({
        title: 'No input data',
        text: 'Fill some data',
        icon: 'warning',
    });
}

    }
