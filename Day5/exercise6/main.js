const titleInput = document.querySelector('.app__modal-add-note__add-form__title-note');
const contentInput = document.querySelector('.app__modal-add-note__add-form__content-note');
const createButton = document.querySelector('.app__btn-add-note');
const saveButton = document.querySelector('.app__modal-add-note__add-form__save-btn');
const noteList = document.querySelector('.app__list-note');
let editableNoteIndex = -1; // Để theo dõi ghi chú hiện đang được chỉnh sửa

createButton.addEventListener('click', function() {
    document.querySelector(".app__modal-add-note").style.display = 'block';
    titleInput.value = '';
    contentInput.value = ''; 
    editableNoteIndex = -1; // Reset editable index
});

saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    const title = titleInput.value;
    const content = contentInput.value;

    saveNote(title, content);
    displayNotes();  
});

function saveNote(title, content) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    if (editableNoteIndex === -1) {
        // Nếu không có ghi chú nào đang chỉnh sửa, thêm ghi chú mới
        const newNote = {
            title: title,
            content: content
        };
        notes.push(newNote);
    } else {
        // Nếu có ghi chú đang chỉnh sửa, cập nhật ghi chú đó
        notes[editableNoteIndex] = {
            title: title,
            content: content
        };
        editableNoteIndex = -1; // Reset editable index sau khi cập nhật
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    document.querySelector(".app__modal-add-note").style.display = 'none'; 
}

function displayNotes() {
    noteList.innerHTML = ''; 
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach(function(note, index) {
        const noteElement = document.createElement('div');
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
              <div id="btn">
                    <button class="edit" onclick="editNoteItem(${index})">Edit</button>
                    <button class="delete" onclick="removeNoteItem(${index})">Delete</button>
                </div>
            `;
        noteList.appendChild(noteElement);
    });
}

function removeNoteItem(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

function editNoteItem(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const note = notes[index];
    titleInput.value = note.title; 
    contentInput.value = note.content;
    editableNoteIndex = index; 
    document.querySelector(".app__modal-add-note").style.display = 'block'; 
}

displayNotes();