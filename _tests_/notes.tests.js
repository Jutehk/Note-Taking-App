// __tests__/notes.test.js

// Mock localStorage for testing
let storage = {};
global.localStorage = {
  getItem: key => storage[key] || null,
  setItem: (key, value) => { storage[key] = value; },
  removeItem: key => { delete storage[key]; }
};

// Import functions (assumed available if modular)
const {
  saveNote,
  getNotes,
  deleteNote,
  editNote,
  clearNotes
} = window || {}; // Replace with actual imports if using modules

describe("Note Functions", () => {
  beforeEach(() => {
    clearNotes();
  });

  test("should save a note", () => {
    saveNote("Test Title", "Test Content");
    const notes = getNotes();
    expect(notes.length).toBe(1);
    expect(notes[0].title).toBe("Test Title");
  });

  test("should delete a note", () => {
    const note = saveNote("Delete Me", "Bye");
    deleteNote(note.id);
    expect(getNotes().length).toBe(0);
  });

  test("should edit a note", () => {
    const note = saveNote("Old Title", "Old Content");
    editNote(note.id, "New Title", "New Content");
    const updatedNote = getNotes().find(n => n.id === note.id);
    expect(updatedNote.title).toBe("New Title");
  });

  test("should clear all notes", () => {
    saveNote("One", "Note");
    saveNote("Two", "Note");
    clearNotes();
    expect(getNotes().length).toBe(0);
  });
});
