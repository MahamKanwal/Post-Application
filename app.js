var backgroundImg;
function submitPost() {
	var postTitle = document.getElementById('post-title');
	var postDescription = document.getElementById('postdescrib');
	var time = new Date().toLocaleString();

	var posts = document.getElementById('posts');
	if (postTitle.value.trim() && postTitle.value.trim()) {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Post has been created',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(function () {
			posts.innerHTML += `
                   
                    <div class="card mt-3" style=" border: 2px solid #F81894;">
                        <div class="card-header fontStyle" style=" border: 2px solid #F81894;">
                            @Posts
                        </div>
                        <p class="ps-3">${time}</p>
                        <div class="card-body" style="background-image:url(${backgroundImg});">
                            <h5 class="card-title fontStyle" id="previousTitle">${postTitle.value}</h5>
                            <p class="card-text fontStyle" id="previousDescription">${postDescription.value}</p>
                        </div>
                        <div class="mt-3 d-flex gap-2 p-3">
                        <button type="button" class="btn btn-primary" onclick=editPost(event)>Edit</button>
                        <button type="button" class="btn btn-danger" onclick=deletePost(event)>Delete</button>
                        </div>
                    </div>
                   
                   
                </div>`;

			postTitle.value = '';
			postDescription.value = '';
		}, 1500);
	} else {
		Swal.fire({
			title: 'No input data',
			text: 'Fill some data',
			icon: 'warning',
		});
	}
}

function selectImg(url) {
	backgroundImg = url;
	var images = document.getElementsByClassName('bg-img');
	for (var i = 0; i < images.length; i++) {
		images[i].className = ' bg-img';
	}
	event.target.className += ' image-list-selected';
}

async function editPost(event) {
	var previousTitle = document.getElementById('previousTitle');
	var previousDescription = document.getElementById('previousDescription');
	const { value: formValues } = await Swal.fire({
		title: 'Update Post',
		html: `
  <label>
  Title
  <input id="swal-input1" class="swal2-input" value="${previousTitle.innerHTML}">
  </label>
  <label>
  Description
  <input id="swal-input2" class="swal2-input" value="${previousDescription.innerHTML}">
  </label>
  `,
		focusConfirm: false,
		preConfirm: () => {
			return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value];
		},
	});

    Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Post has been updated',
			showConfirmButton: false,
			timer: 1500,
		});
    setTimeout(function () {
    
        previousTitle.innerHTML = formValues[0];
        previousDescription.innerHTML = formValues[1];
},1500)

}

function deletePost(event) {
	Swal.fire({
		title: 'Do you want to delete the post',
		showDenyButton: true,
		confirmButtonText: 'YES',
		denyButtonText: `NO`,
	}).then((result) => {
		if (result.isConfirmed) {
			event.target.parentNode.parentNode.remove();
		} else if (result.isDenied) {
		}
	});
}