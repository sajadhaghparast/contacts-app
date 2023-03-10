const yargs = require("yargs");
const chalk = require("chalk");

const { addContact, listContacts, removeContact } = require("./contacts");


yargs.version("1.1.0");

yargs.command({
  command: "create",
  aliases: ["c"],
  describe: `${chalk.green("[create new contact]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Person Phone Number",
      demandOption: true,
      type: "number", //? 0 aval shomare neshon nemide
    },
    email: {
      alias: "e",
      describe: "Person Email Address",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname, phone, email }) {
    addContact(fullname, phone, email);
  },
});

yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.green("[listing the saved contacts]")}`,
  handler() {
    listContacts();
  },
});

yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: `${chalk.green("[remove contact]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname }) {
    removeContact(fullname);
  },
});

yargs.parse();
