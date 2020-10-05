//This files variables will be exported and used in app.js when node is called

console.log('Executing Utils.js code');

//const name = "Anurag";
//module.exports = name; //Export variable from this file

const add = function(a,b){
    return a+b;
}
module.exports = add;
