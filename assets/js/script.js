// let number = parseInt(prompt("ededi daxil edin:"))
// let number2 = parseInt(prompt("ededi daxil edin:"))
// let x = prompt("emeli daxil edin") 
// switch (x) {
//     case "+":
//         console.log(number+number2);
//         break;
//     case "-":
//         console.log(number-number2);
//         break;
//     case "x":
//         console.log(number*number2);
//         break;
//     case "/":
//         console.log(number/number2);
//         break;
//     default:
//         break;
// }


// let number = prompt("Eded daxil edin")
// let sum = 0;
// while (number!=0) {
//     let lastDigit =number%10;
//     number=(number-lastDigit)/10;
//     sum+= lastDigit;
// }
// console.log(sum);


let number = parseInt(prompt("Ededi daxil edin:"));
IsDivided(number);

function IsDivided(number) {
    if (number % 7 == 0) {
        alert("Eded 7-e qaliqsiz bolunur");
    }
    else{
        if (number % 7 <= 3 ) {
            let numberr = number % 7;
            alert(number-numberr);
        }
        else{
            numberr = number % 7;
            numberr = 7-numberr;
            alert(number+numberr);
        }
    }
}

    let number2 = parseInt(prompt("Edediii daxil edin:"));
    Division(number2);

    function Division(number2) {
        let sum = 0;
        if (number2 < 50) {
            for (let i = 3; i <= number2; i+=3) {
                sum++;
            }
            alert(sum); 
        }
        else{
            if (number2 < 100 & number2 > 50) {
                for (let i = 5; i <= number2; i+=5) {
                    sum++;
                }
                alert(sum);
            } 
            else {
                if (number2 >= 100) {
                    for (let i = 8; i <= number2; i+=8) {
                        sum++;
                    }
                alert(sum);
            }
        } 
            } 
 
        }




