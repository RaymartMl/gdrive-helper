# Drive Helper

A CLI tool for automating repetitive tasks when using google services at my work.
An interface for the linux version of the [drive client](https://github.com/odeke-em/drive).

## Demo

Insert gif or link to demo

## API Reference

#### Create a dedicated directory for working with this CLI.

Run the `drive init` first. This will get your google drive token.

---

#### `pull pdf`

Download all the google slides in a folder, converted to .pdf format. Used for the getting the final slides ready to upload in the Stacktrek LMS.

---

#### `pull txt`

Download all the google slides in a folder, converted to .txt format Used for analyzing text in a slides.

---

#### `push docs`

Upload all .txt file in a folder in google docs format Used for checking spelling and grammar.

---

#### `copy folder`

Create a copy of a folder including its files Used for creating a new version of slides and keeping an archive.

---

#### `remove numbers`

Remove lines with that only has numbers. Used for removing pages numbers in converted .txt files

---

#### `drive init`

Get your google drive token

## Tech Stack

- [Drive CLI](https://github.com/odeke-em/drive)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/)
- [Typescript](https://www.typescriptlang.org/)

## Acknowledgements

- [Drive CLI](https://github.com/odeke-em/drive)

## Authors

- [@RaymartMl](https://github.com/RaymartMl)
