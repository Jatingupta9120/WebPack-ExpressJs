/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst app = express();\r\nconst Port = 3000;\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\napp.use(express.json());\r\n\r\nlet employee = [];\r\nlet nextId = 1;\r\n\r\n// Route to calculate the sum of two numbers from query parameters\r\napp.get('/sum', (req, res) => {\r\n    const a = parseFloat(req.query.a); // Convert to number\r\n    const b = parseFloat(req.query.b); // Convert to number\r\n\r\n    if (isNaN(a) || isNaN(b)) { // Validate numbers\r\n        return res.status(400).json({ error: 'Invalid numbers provided' });\r\n    }\r\n\r\n    res.json({ sum: a + b });\r\n});\r\n\r\n// Route to send a welcome message\r\napp.get('/jatin', (req, res) => {\r\n    res.send('Hello, welcome');\r\n});\r\n\r\n// Route to send a game-related message\r\napp.get('/game', (req, res) => {\r\n    res.send('Welcome Shubham, I am learning Express.js');\r\n});\r\n\r\n// POST route to add a new employee\r\napp.post('/employee', (req, res) => {\r\n    const { names, rollnos } = req.body;\r\n    \r\n    if (!names || !rollnos) { // Check for required fields\r\n        return res.status(400).json({ error: 'Missing fields' });\r\n    }\r\n\r\n    const newEmployee = { id: nextId++, names, rollnos };\r\n    employee.push(newEmployee);\r\n    res.status(201).json(newEmployee); \r\n});\r\n\r\n// GET route to retrieve an employee by ID\r\napp.get('/employee/:id', (req, res) => {\r\n    const id = parseInt(req.params.id); // Parse ID from params\r\n    const emp = employee.find(i => i.id === id);\r\n\r\n    if (!emp) { // Handle case where employee is not found\r\n        return res.status(404).json({ error: 'Employee not found' });\r\n    }\r\n\r\n    res.status(200).json(emp); // Use json to send the data\r\n});\r\n\r\n// GET route to retrieve all employees\r\napp.get('/employee', (req, res) => {\r\n    res.status(200).json(employee); // Send all employees\r\n});\r\n\r\n// PUT route to update an employee by ID\r\napp.put('/employee/:id', (req, res) => {\r\n    const id = parseInt(req.params.id); // Parse ID from params\r\n    const index = employee.findIndex(i => i.id === id);\r\n\r\n    if (index === -1) { // Handle case where employee is not found\r\n        return res.status(404).json({ error: 'Employee not found' });\r\n    }\r\n\r\n    const { names, rollnos } = req.body;\r\n    if (names) employee[index].names = names;\r\n    if (rollnos) employee[index].rollnos = rollnos;\r\n\r\n    res.status(200).json(employee[index]); // Send the updated employee\r\n});\r\n\r\napp.get('/', (req, res) => {\r\n    res.sendFile(path.join(__dirname, 'dist', 'index.html'));\r\n});\r\n\r\n// DELETE route to remove an employee by ID\r\napp.delete('/employee/:id', (req, res) => {\r\n    const id = parseInt(req.params.id); // Parse ID from params\r\n    const index = employee.findIndex(i => i.id === id);\r\n\r\n    if (index === -1) { // Handle case where employee is not found\r\n        return res.status(404).json({ error: 'Employee not found' });\r\n    }\r\n\r\n    employee.splice(index, 1); // Remove employee\r\n    res.status(200).json({ message: 'Employee deleted' }); // Send success message\r\n});\r\n\r\n// Start the server\r\napp.listen(Port, () => {\r\n    console.log(`Server is running on port ${Port}`);\r\n});\r\n\n\n//# sourceURL=webpack://day1/./index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;