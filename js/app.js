let movie = "Movie title is \"Matrix\"";
let firstName = "Bilas";
console.log(firstName.slice(0,3));

console.log(firstName.indexOf("lis"));

console.log(movie);

let count = 123;

if(count===254 && count>2){
    console.log('ok');
    
}else if(count>1000 || count===100){
    console.log("false")
}else{
    console.log("exit")
}

if(count===254){
    if(count>200){
        console.log('ok');
    }
}

const language = "lt";

switch(language){
    case "lt":
        console.log("Sveiki");
        break;
    case "en":
        console.log("Hello");
        break;
    default:
        console.log("nesupratau kalbos");
}

let weather = 20;

let userName = weather>19 ? "Andrius":"Karolis";

console.log(userName)




