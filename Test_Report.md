# 🧪 Test Report: Note-Taking App

## 👤 Tester: Juliana Ndunge  
**Date**: June 17, 2025  
**Testing Types**: Unit, Integration, Functional

---

## ✅ Unit Tests
| Function | Test Case | Expected Result |
|----------|-----------|-----------------|
| saveNote | Save a new note | Adds note to localStorage |
| deleteNote | Remove note by ID | Removes from localStorage |
| getNotes | No notes exist | Returns empty array |

---

## 🔗 Integration Test
**Flow**: Add → Save → Render  
**Expected**: Note appears in the list immediately after submission.

---

## 🐞 Functional Bugs
| ID | Bug | Steps | Status |
|----|-----|-------|--------|
| #1 | Note deletes but UI doesn't update | Add → Delete → Note still shown | Fixed in `renderNotes()` |

---

## 📝 Summary
- All core functions are testable
- Manual tests performed for now
- UI responds well to user actions
