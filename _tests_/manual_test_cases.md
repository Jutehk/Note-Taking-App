🧪 Manual Test Cases for Note-Taking App
📌 Test Environment
Browser: Chrome 125

Device: Desktop

OS: Windows 10

App Version: v1.0

Tester: Juliana Ndunge

Date: June 17, 2025

🔹 Functional Test Cases
TC ID	Test Case Description	Steps to Execute	Expected Result	Status
TC01	Add a new note	1. Enter title and content
2. Click "Add Note"	Note appears in list with title and content	✅ Pass
TC02	Add note without title	1. Leave title blank
2. Click "Add Note"	Form should not submit; browser shows required validation	✅ Pass
TC03	Delete a note	1. Add a note
2. Click "Delete"	Note disappears from the list and localStorage	✅ Pass
TC04	Edit a note	1. Add a note
2. Click "Edit"
3. Change text and submit	Original note is replaced with updated content	✅ Pass
TC05	Show empty state	1. Clear all notes
2. Reload page	"No notes found" message is displayed	✅ Pass

🔹 Boundary Test Cases
TC ID	Test Case	Input	Expected Result	Status
TC06	Max note length	500+ characters	Entire note should save and display without UI breaking	✅ Pass
TC07	Empty content	Title only	Should not allow submission (HTML5 validation)	✅ Pass

🔹 Integration Test Cases
TC ID	Scenario	Steps	Expected Outcome	Status
TC08	Add → Edit → Delete	Add a note → Edit it → Delete it	Note updates then disappears from UI and storage	✅ Pass
TC09	Multiple notes	Add 3 different notes	All 3 appear correctly with buttons	✅ Pass

🔹 Negative Test Cases
TC ID	Scenario	Input	Expected Result	Status
TC10	Add duplicate notes	Same title and content multiple times	All saved (no deduplication logic yet)	✅ Pass
TC11	XSS attempt	Title: <script>alert(1)</script>	Treated as plain text (not executed)	✅ Pass

