// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
       
    }
    return gifts;
}
wrapGifts(gifts);
*/
const newArr = [];

function writeCards(name, event) {
    let newArr = [];
    for(let i = 0; i < name.length; i++){
        
        newArr.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
        
    }
    return newArr
}
writeCards = (["Sarah", "Fai", "Tom"], surprise);

function countDown(init = 10) {
    while (init >= 0){
        console.log(init--);
    }
}