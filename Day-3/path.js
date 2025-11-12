const path = require('path');

// To get the name of file
let file_name = path.basename("D:/SEM - 8/Empyreal/T-0002 week-1/Day-3/path.js");
console.log(file_name);

// To know the directory
let dir_name = path.dirname("D:/SEM - 8/Empyreal/T-0002 week-1/Day-3/path.js");
console.log(dir_name);

// To know the file extension
let file_ext = path.extname("D:/SEM - 8/Empyreal/T-0002 week-1/Day-3/test.txt");
console.log(file_ext);

// To get path details in the form object
let a = path.parse("D:/SEM - 8/Empyreal/T-0002 week-1/Day-3/path.js");
console.log(a);

// To check whether path is correct or not (Returns true if correct and false vice versa)
let abs = path.isAbsolute("D://SEM - 8//Empyreal//T-0002 week-1/Day-3/path.js");
console.log(abs);

// To join the string in the form of path
let p_join = path.join('a','b','c','d','e');
console.log(p_join);