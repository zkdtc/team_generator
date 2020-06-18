var inquirer = require("inquirer");

var fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

enterNew();
var data_all=[];

function enterNew() {

    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Welcome to the TEAM generator! Please select your role:",
            choices: [
                'Manager', 'Engineer', 'Intern'
            ]
        }
    ]).then(async (data) =>{
            console.log(data.role);
            switch (data.role) {
                case 'Manager':
                    enterManager();
                    break;
                case 'Engineer':
                    enterEngineer();
                    break;
                case 'Intern':
                    enterIntern();
                    break;
            }

        })

}

function enterManager() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name:",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your id:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:",
        },
        {
            type: "input",
            name: "office",
            message: "Please enter your office number:",
        },
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to enter another employee (just hit enter for YES)?',
            default: true
          }

    ]).then(async (data) =>{
        const e=new Manager(data.name, data.id,data.email,data.office);
        data_all.push(e);
        if (data.askAgain){
            enterNew();
        }
        else{
            
            const output=render(data_all);
            fs.writeFile(outputPath,output,function (err) {
                if (err) return console.log(err);
                console.log('Render '+outputPath);
              });
        }
        
    })

}

function enterEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name:",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your id:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:",
        },
        {
            type: "input",
            name: "githubusername",
            message: "Please enter your Github Username:",
        },
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to enter another employee (just hit enter for YES)?',
            default: true
          }

    ]).then(async (data) => {
        const e=new Engineer(data.name, data.id,data.email,data.githubusername);
        data_all.push(e);
        if (data.askAgain){
            enterNew();
        }
        else{
            const output=render(data_all);
            fs.writeFile(outputPath,output,function (err) {
                if (err) return console.log(err);
                console.log('Render '+outputPath);
              });
        }
    })
}

function enterIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name:",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your id:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter your school:",
        },
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to enter another employee (just hit enter for YES)?',
            default: true
          }

    ]).then(async (data) => {
        const e=new Intern(data.name, data.id,data.email,data.school);
        data_all.push(e);
        if (data.askAgain){
            enterNew();
        }
        else{
            const output=render(data_all);
            fs.writeFile(outputPath,output,function (err) {
                if (err) return console.log(err);
                console.log('Render '+outputPath);
              });
        }
    })
}