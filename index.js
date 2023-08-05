//defines global variable;
const fs = require('fs');
const inquirer = require('inquirer');
const width1 = "300";
const height1 = "200";
const filename1 = "./examples/logo.svg";
//sets data to be written to empty string at begining
let data2 = "";
//function to create logo
function createLogo() {
  //inquirer propmt for input from users
  const questions = inquirer.prompt([
    {
      type: 'input',
      name: 'characters',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3 && input.length > 0 || 'Text should be three characters in length.'
    },
    {
      type: 'input',
      name: 'charColor',
      message: 'Enter the characters color:',
      validate: (input) => input.length > 0 || 'Please enter a color.'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle','square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
      validate: (input) => input.length > 0 || 'Please enter a color.'
    }
  ])

  .then((data) => {
    //set data string for svg image based on input prompt
    if(data.shape == "circle"){
      data2 = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width1 + '" height="' + height1 + '"><circle cx="100" cy="100" r="90" fill="'+ data.shapeColor + '" /><text font-size="48px" x="55" y="110" fill="' + data.charColor + '">' + data.characters.toUpperCase() + '</text></svg>';
    }
    if(data.shape == "triangle"){
      data2 = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width1 + '" height="' + height1 + '"><polygon points="200,10 300,200 100,200" style="fill:' + data.shapeColor + '" /><text font-size="48px" x="147" y="140" fill="' + data.charColor + '">' + data.characters.toUpperCase() + '</text></svg>';
    }
    if(data.shape == "square"){
      data2 = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width1 + '" height="' + height1 + '"><rect width="' + width1 + '" height="' + height1 + '" style="fill:' + data.shapeColor + ';" /><text font-size="48px" x="90" y="110" fill="' + data.charColor + '">' + data.characters.toUpperCase() + '</text></svg>';
    }
    
  
  //writes the file based on data string given
  fs.writeFile(filename1, data2, (err) =>
  err ? console.log(err) : console.log('Generated logo.svg !')
);
 
});
}
//starts createlogo funtion at start
createLogo();
//export the module
module.exports = {
  createLogo
};
