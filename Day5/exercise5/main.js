document.getElementById('myFile').addEventListener('change', function(event) {
    const files = event.target.files;
    handleFiles(files);
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var files = ev.dataTransfer.files;
    handleFiles(files);
}

function handleFiles(files) {
    const previewContainer = document.getElementById('preview');

    for (let i = 0; i < files.length; i++) {
        const div = document.createElement('div');
        div.classList.add('file-container');

        //file name
        const fileName = document.createElement('p');
        fileName.textContent = files[i].name;

        //file icon
        const fileIcon = document.createElement('img');
        fileIcon.style.width = '100px'; 
        fileIcon.style.height = '100px'; 

        if (files[i].type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                fileIcon.src = e.target.result;
            };
            reader.readAsDataURL(files[i]);
        } else {
            fileIcon.src = './file-icon.jpg'; 
        }

        //delete btn
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.onclick = function() {
            previewContainer.removeChild(div); 
        };

        div.appendChild(fileIcon);
        div.appendChild(fileName);
        div.appendChild(deleteButton);
        previewContainer.appendChild(div);

        div.style.width = '100px'; 
        div.style.height = '100px'; 
    }
}