function saveNote(title, content) {
  const notes = getNotes();
  const newNote = { id: Date.now(), title, content };
  notes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(notes));
  return newNote;
}

function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

function deleteNote(id) {
  const notes = getNotes().filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function editNote(id, updatedTitle, updatedContent) {
  const notes = getNotes().map(note => {
    if (note.id === id) {
      return { ...note, title: updatedTitle, content: updatedContent };
    }
    return note;
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}

function clearNotes() {
  localStorage.removeItem('notes');
}
