const fs = require("fs");
const chalk = require("chalk");

const addContact = (fullname, phone, email) => {
    const contacts = loadContacts();
    const duplicateContact = contacts.find((c) => c.fullname === fullname);

    if (!duplicateContact) {
        contacts.push({ fullname, phone, email });
        saveContacts(contacts);

        console.log(chalk.green("Contact Saved."));
    } else {
        console.log(chalk.red("Contact mojod ast."));
    }
};

const listContacts = () => {
    const contacts = loadContacts();
    if (contacts.length > 0) {
        console.log(chalk.yellowBright("Your contacts:\n"));
        contacts.forEach((contact) => {
            console.log(`\t${chalk.green("Fullname")}: ${contact.fullname}`);
            console.log(`\t${chalk.green("Phone")}: ${contact.phone}`);
            console.log(`\t${chalk.green("Email")}: ${contact.email}`);
            console.log(chalk.redBright("\t============================================================================="));
        });
    } else {
        console.log(chalk.red("You don't have any contacts."));
    }
};

const removeContact = (fullname) => {
    const contacts = loadContacts();
    const filteredContacts = contacts.filter((c) => c.fullname !== fullname);

    if (contacts.length > filteredContacts.length) {
        saveContacts(filteredContacts);
        console.log(chalk.green(`${fullname} has been removed.`));
    } else {
        console.log(chalk.red("Contact not found."));
    }
};

const loadContacts = () => {
    try {
        const data = fs.readFileSync("contacts.json");
        const contacts = data.toString();
        return JSON.parse(contacts);
    } catch (harchi) {
         console.log(harchi);
        return [];
    }
};

const saveContacts = (contacts) => {
    const data = JSON.stringify(contacts);
    fs.writeFileSync("contacts.json", data);
};

module.exports = {
    addContact,
    listContacts,
    removeContact,
};
