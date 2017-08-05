const fs = require("fs");
const dataPath = "./tasks.txt";

var line = process.argv.slice(2);
var command = line.shift();
var task = line.join(" ");

switch (command) { 
    case "list":
        listTasks(dataPath);    
        break;
    case "add":
        addTask(dataPath,task);    
        break;    
    default:
        console.log("Usage: " + process.argv[0] + " list|add [some task]");    
        break;    
}

function listTasks(file) { 
    getForMani(file, function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
        }
    });
}

function addTask(file, task) { 
    getForMani(file, function (tasks) {
        tasks.push(task);
        storeTasks(file,tasks);
    });    
}

function storeTasks(file,tasks) { 
    fs.writeFile(file, JSON.stringify(tasks), function (err) {
        if (err) throw err;
    });
}

function getForMani(file,cb) { //getDataForFurtherManipulation
    fs.exists(file, function (exists) {
        if (exists) {
            fs.readFile(file, function (err, data) {
                if (err) throw err;
                var tasks = JSON.parse(data || []);
                cb(tasks);
            })
        } else {
            cb([]);
        }
    });
}