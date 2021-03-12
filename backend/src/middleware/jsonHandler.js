"use strict";

import util from "util";
import fs from "fs";
import path from "path";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const entriesDB = path.resolve('././data/entries.json');
const usersDB = path.resolve('././data/users.json');

async function readEntries() {
  const json = await readFile(entriesDB);
  return JSON.parse(json);
}

async function writeEntries(items) {
  const json = JSON.stringify(items);
  return writeFile(entriesDB, json);
}

async function readUsers() {
  const json = await readFile(usersDB);
  return JSON.parse(json);
}

async function writeUsers(items) {
  const json = JSON.stringify(items);
  return writeFile(usersDB, json);
}


export { readEntries, writeEntries, readUsers, writeUsers };
