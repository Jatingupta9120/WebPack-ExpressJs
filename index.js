const path = require('path');
const express = require('express');
const { write } = require('fs');
const app = express();
app.use(express.json());
const Port = 3000;


//=>1st way to use winston logger 
// const winston = require("winston");
// const logger = winston.createLogger({
//     transports: [new winston.transports.Console()],
//   });


//=>2nd way to use winston and morgan logger
// const logger =require ('./logger.js');
// const morgan =require ('morgan');
// const morganFormat = ":method :url :status :response-time ms";
// app.use(
//     morgan(morganFormat, {
//       stream: {
//         write: (message) => {
//           const logObject = {
//             method: message.split(" ")[0],
//             url: message.split(" ")[1],
//             status: message.split(" ")[2],
//             responseTime: message.split(" ")[3],
//           };
//           logger.info(JSON.stringify(logObject));
//         },
//       },
//     })
//   );

let employee = [];
let nextId = 1;


//I Have used Winston logger and morgan logger for logging the things it will help in debugging the code errors
// Route to calculate the sum of two numbers from query parameters
app.get('/sum', (req, res) => {
    const a = parseFloat(req.query.a); // Convert to number
    const b = parseFloat(req.query.b); // Convert to number

    if (isNaN(a) || isNaN(b)) { // Validate numbers
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    res.json({ sum: a + b });
});

// Route to send a welcome message
app.get('/jatin', (req, res) => {
    logger.info("This is an info message");
    res.send('Hello, welcome');
});

// Route to send a game-related message
app.get('/game', (req, res) => {
    logger.info('this is jatin youtuber FreeFire')
    res.send('Welcome Shubham, I am learning Express.js');
});

// POST route to add a new employee
app.post('/employee', (req, res) => {
    const { names, rollnos } = req.body;
    
    if (!names || !rollnos) { // Check for required fields
        return res.status(400).json({ error: 'Missing fields' });
    }

    const newEmployee = { id: nextId++, names, rollnos };
    employee.push(newEmployee);
    res.status(201).json(newEmployee); 
});

// GET route to retrieve an employee by ID
app.get('/employee/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse ID from params
    const emp = employee.find(i => i.id === id);

    if (!emp) { // Handle case where employee is not found
        return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json(emp); // Use json to send the data
});

// GET route to retrieve all employees
app.get('/employee', (req, res) => {
    res.status(200).json(employee); // Send all employees
});

// PUT route to update an employee by ID
app.put('/employee/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse ID from params
    const index = employee.findIndex(i => i.id === id);

    if (index === -1) { // Handle case where employee is not found
        return res.status(404).json({ error: 'Employee not found' });
    }

    const { names, rollnos } = req.body;
    if (names) employee[index].names = names;
    if (rollnos) employee[index].rollnos = rollnos;

    res.status(200).json(employee[index]); // Send the updated employee
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// DELETE route to remove an employee by ID
app.delete('/employee/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse ID from params
    const index = employee.findIndex(i => i.id === id);

    if (index === -1) { // Handle case where employee is not found
        return res.status(404).json({ error: 'Employee not found' });
    }

    employee.splice(index, 1); // Remove employee
    res.status(200).json({ message: 'Employee deleted' }); // Send success message
});

// Start the server
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
