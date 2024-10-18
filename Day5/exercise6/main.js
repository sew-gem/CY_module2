const titleInput = document.querySelector('app__modal-add-note__add-form__title-note');
const contentInput = document.querySelector('app__modal-add-note__add-form__content-note');
const createButton = document.querySelector('.app__btn-add-note');
const saveButton = document.querySelector('.app__modal-add-note__add-form__save-btn');

createButton.addEventListener('click', function(){
    document.querySelector(".app__modal-add-note").style.display = 'block';
})

saveButton.addEventListener('submit', function(event){
    event.preventDefault();
    const title = titleInput.value;
    const content = contentInput.value;
    saveNote(title, content);
})

function saveNote(title, content){
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = {
        title: title,
        content: content
    }
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));

    titleInput.value = '';
    contentInput.value = '';
}

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteList = document.querySelector('.app__list-note');

    notes.forEach(function(note, index) {
        const noteElement = document.createElement('div');
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <button>Edit</button>
            <button>Delete</button>
        `;
        noteList.appendChild(noteElement);
    });
}
displayNotes();
