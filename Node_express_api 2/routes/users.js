import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        name: "Sonola",
        age: 21,
        Message: "I'm a developer",
        date: Date()
    }
];

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, Id: uuidv4()});

    res.send(`User with the name ${user.name} added to  the database`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.Id != id);

    res.send(`User with the id ${id} is deleted from the database. `);
});

export default router;