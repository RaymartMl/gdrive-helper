## My frequently used commands

Download all the google slides in a folder, converted to .pdf format.
Used for getting the final slides ready to upload in the Stacktrek LMS.

```bash
drive_linux pull -desktop-links=false -no-prompt=true -export pdf -same-exports-dir -ignore-name-clashes -exports-dir "localFolder" "driveFolder"
```

---

Download all the google slides in a folder, converted to .txt format
Used for analyzing text in slides.

```bash
drive_linux pull -desktop-links=false -no-prompt=true -export txt -same-exports-dir -ignore-name-clashes -exports-dir "localFolder" "driveFolder"
```

---

Upload all .txt files in a folder in google docs format
Used for checking spelling and grammar.

```bash
drive_linux push -convert "localFolder"
```

---

Create a copy of a folder including its files
Used for creating a new version of slides and keeping an archive.

```bash
drive_linux copy -recursive "${driveFolder}" "${driveFolder2}"
```

---

Delete all empty files created by drive_linux.

```bash
find "./${localFolder}/" -empty -delete
```

---

Remove lines that only have numbers.
Used for removing pages numbers in converted .txt files

```bash
for file in ./"localFolder"/*.txt; do sed -i -e '/^[0-9][0-9]*$/d' \"$file\"; done
```

---
