//-----DPS-------GUIA 2-----------------
//---Mario Josué Beltrán García
//-----EJEMPLOS DE LA GUIA-------------
//Imprimiendo en Consola
const message:string = 'Hello World';
console.log(message);
//Variables y valores primitivos
var full_nombre: string = "jorge cano";
var age: number = 27;
var developer:boolean = true;
//Arreglos
let skills:Array<string> = ['JavaScript','TypeScript','Angular'];
let numberArrary:number[] = [123,123,233,34,4,423];
//Enumerables
enum ROLE {Employee,Manager,Admin,Developer}
let role:ROLE = ROLE.Employee
//funciones
function hello():void{

} 
function setName(name:string):void{

}
function setLastName(name:string,surName:string): string{
    return "string";
}
//Scope de una variable
let variableExterna:string = "Uriel";
function changeName(name:string):string{
    variableExterna = name
    return "Hola" + name
}
console.log(changeName(variableExterna));
//Objetos en typscript
class Persona {
    first_name:string;
    last_name:string;
    constructor(_first_name?:string,_last_name?:string){
        this.first_name="_first_name";
        this.last_name="_last_name";
    }
}
//Instanciar una clase
let personaUno = new Persona();
let personaDos = new Persona("Jorge");
let personaTres = new Persona("Jorge","Cano");
console.log(personaTres);
//Interpolacion
var a:string = "Uriel";
var b = `Saludos a ti ${this.a},`;
console.log(b);
function getSaludo():string{
    let emojis = '(⌐■_■)';
    return `Saludos ${personaTres.last_name},${personaTres.first_name} Le enviamos un saludo desde la consola! ${emojis}`;
}
console.log(getSaludo());
//Interfaces para objetos mediante JSON
interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}
let personOne:MyPersona = {
    first_name:'Mario',
    last_name:'Beltran',
    twitter_account:'@MarioBeltran'
}
//Shapes
class Person{
    firstname:string;
    lastname:string;
    twitter_user:string;
    constructor(){
        this.firstname = "Josue";
        this.lastname = "Garcia";
        this.twitter_user = "@JoshGar"
    }
    
    changeLastName(last_name:string){
        this.lastname = last_name;
    }
}
var myPerson = new Person();
myPerson.firstname = "Josue";
myPerson.changeLastName("Beltran");
console.log(myPerson);
//Decorators
function color(value:string){
    return function(target:any){

    }
}
