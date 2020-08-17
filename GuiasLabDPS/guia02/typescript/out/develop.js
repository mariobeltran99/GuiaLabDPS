"use strict";
var message = 'Hello World';
console.log(message);
var full_nombre = "jorge cano";
var age = 27;
var developer = true;
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArrary = [123, 123, 233, 34, 4, 423];
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
function hello() {
}
function setName(name) {
}
function setLastName(name, surName) {
    return "string";
}
var variableExterna = "Uriel";
function changeName(name) {
    variableExterna = name;
    return "Hola" + name;
}
console.log(changeName(variableExterna));
var Persona = (function () {
    function Persona(_first_name, _last_name) {
        this.first_name = "_first_name";
        this.last_name = "_last_name";
    }
    return Persona;
}());
var personaUno = new Persona();
var personaDos = new Persona("Jorge");
var personaTres = new Persona("Jorge", "Cano");
console.log(personaTres);
var a = "Uriel";
var b = "Saludos a ti " + this.a + ",";
console.log(b);
function getSaludo() {
    var emojis = '(⌐■_■)';
    return "Saludos " + personaTres.last_name + "," + personaTres.first_name + " Le enviamos un saludo desde la consola! " + emojis;
}
console.log(getSaludo());
var personOne = {
    first_name: 'Mario',
    last_name: 'Beltran',
    twitter_account: '@MarioBeltran'
};
var Person = (function () {
    function Person() {
        this.firstname = "Josue";
        this.lastname = "Garcia";
        this.twitter_user = "@JoshGar";
    }
    Person.prototype.changeLastName = function (last_name) {
        this.lastname = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstname = "Josue";
myPerson.changeLastName("Beltran");
console.log(myPerson);
function color(value) {
    return function (target) {
    };
}
