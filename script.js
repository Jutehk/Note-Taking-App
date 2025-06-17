const form = document.getElementById('note-form');
const titleInput = document.getElementById('note-title');
const contentInput = document.getElementById('note-content');
const notesList = document.getElementById('notes-list');

function renderNotes() {
  const notes = getNotes();
  notesList.innerHTML = notes.length
    ? notes.map(note => `
        <div class="note">
          <h3>${note.title}</h3>
          <p>${note.content}</p>
          <button onclick="handleEdit(${note.id})">Edit</button>
          <button onclick="handleDelete(${note.id})">Delete</button>
        </div>
      `).join('')
    : `<p>No notes found.</p>`;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = titleInput.value;
  const content = contentInput.value;
  saveNote(title, content);
  titleInput.value = '';
  contentInput.value = '';
  renderNotes();
});

function handleDelete(id) {
  deleteNote(id);
  renderNotes();
}

function handleEdit(id) {
  const notes = getNotes();
  const note = notes.find(n => n.id === id);
  if (note) {
    titleInput.value = note.title;
    contentInput.value = note.content;
    deleteNote(id);
    renderNotes();
  }
}

renderNotes();
