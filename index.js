//the text
let text = "Once upon a midnight dreary, while I pondered, weak and weary, over many a quaint and curious volume of forgotten lore—, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door. “’Tis some visitor,” I muttered, “tapping at my chamber door— Only this and nothing more.”"

//checks length of text and logs it out
if (text.length < 350){
console.log(`The text is short, its ${text.length} characters short`)
}
else{
    console.log(`The text is long, its ${text.length} characters long.`)
}

//for loop that counts to 10
for (i=0; i<11; i++){
    console.log(i)
}

//finds and slices "As"
indexas = text.indexOf("As")
sas = indexas - 5
eas = indexas + 7
as = text.slice(sas, eas)

//"is" is not in the text, so i did this instead
if (text.indexOf("if") === -1){
    console.log("If does not appear in the text")
}

//finds and slices "And"
indexand = text.indexOf("and")
sand = indexand - 5
eand = indexand + 8
and = text.slice(sand, eand)

//concats the new string
text = as.concat(and)

//logs the new string
console.log (text);


//Array for norwegian words
let norsk = ["som", "og"]

//Replaces English with Norwegian
text = text.replace("As", norsk[0])
text = text.replace("and", norsk[1])

console.log(text)

//START OF GAME

//logs out empty space to make game easier
console.log("")


let life = 3

while (life > 0){
    console.log("You are looking at a bear")

    let input = window.prompt("Do you fight the bear? yes/no")
    
    if (input == "yes"){
        if (life === 3){
        console.log("You fight the bear, but it does not look like you injured it")
        console.log("The bear claws you and you take some damage")
        life = 2
        }

        else if (life === 2){
            console.log("You punch the bear again with less strength, it doesnt take any damage")
            console.log("The bear claws at you again, and you can hear your bones break, and feel bleeding")
            life = 1
        }

        else if (life === 1){
            console.log("you muster up the last of your energy and give it one final puch")
            console.log("the bear does not flinch")
            console.log("The bear eats you, and you die")
            life = 0
            alert("YOU DIED")
            break
        }
    }

    else if (input == "no"){
        console.log("The bear eats you, and you die")
        alert("YOU DIED")
        break
    }
    else if (input == "run"){
        console.log("you run from the bear and survive")
        alert("YOU SURVIVED")
        break
    }
    else if (input == "shoot"){
        console.log("you shoot the bear, it dies and you survive")
        alert("YOU SURVIVED")
        break
    }
    else {
        console.log("Whatever you were trying to do didnt work, the bear ate you, and you died")
        life = 0
        alert("YOU DIED")
        break
    }

}

let numberArray = []
let wordArray = []
for (i=0; i<10; i++){
    numberArray.push(i)
    wordArray.push("ord")
}

console.log(numberArray, wordArray)