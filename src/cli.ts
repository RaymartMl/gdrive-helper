#!/usr/bin/env node

import inquirer from "inquirer";
import { run } from "./helpers.js";

const PULL_PDF = "pull pdf";
const PULL_TXT = "pull txt";
const PUSH_DOCS = "push docs";
const COPY_FOLDER = "copy folder";
const REMOVE_NUMBERS = "remove numbers";
const DRIVE_INIT = "drive init";

const questions = [
  {
    type: "rawlist",
    name: "command",
    message: "Select a command",
    choices: [
      PULL_PDF,
      PULL_TXT,
      PUSH_DOCS,
      COPY_FOLDER,
      REMOVE_NUMBERS,
      DRIVE_INIT,
    ],
  },
  {
    type: "input",
    name: "localFolder",
    message: "Local Folder",
    default: "testing",
    when(answer: inquirer.Answers) {
      return [PULL_PDF, PULL_TXT, REMOVE_NUMBERS, PUSH_DOCS].includes(
        answer.command,
      );
    },
  },
  {
    type: "input",
    name: "driveFolder",
    message: "Drive folder",
    default: "testing",
    when(answer: inquirer.Answers) {
      return [PULL_PDF, PULL_TXT, COPY_FOLDER].includes(answer.command);
    },
  },
  {
    type: "input",
    name: "driveFolder2",
    message: "drive folder destination",
    when(answer: inquirer.Answers) {
      return [COPY_FOLDER].includes(answer.command);
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  switch (answers.command) {
    case PULL_PDF: {
      run(
        `drive_linux pull -desktop-links=false -no-prompt=true -export pdf -same-exports-dir -ignore-name-clashes -exports-dir "${answers.localFolder}" "${answers.driveFolder}" && find "./${answers.localFolder}/" -empty -delete`,
      );
      break;
    }
    case PULL_TXT: {
      run(
        `drive_linux pull -desktop-links=false -no-prompt=true -export txt -same-exports-dir -ignore-name-clashes -exports-dir "${answers.localFolder}" "${answers.driveFolder}" && find "./${answers.localFolder}/" -empty -delete`,
      );
      break;
    }
    case PUSH_DOCS: {
      run(`drive_linux push -convert "${answers.localFolder}"`);
      break;
    }
    case REMOVE_NUMBERS: {
      run(
        `for file in ./"${answers.localFolder}"/*.txt; do sed -i -e '/^[0-9][0-9]*$/d' \"$file\"; done`,
      );
      break;
    }

    case COPY_FOLDER: {
      run(
        `drive_linux copy -recursive "${answers.driveFolder}" "${answers.driveFolder2}"`,
      );
      break;
    }

    case DRIVE_INIT: {
      run(`drive_linux init`);
      break;
    }

    default:
      throw new ReferenceError(`Undefined command: ${answers.command}`);
  }
});
