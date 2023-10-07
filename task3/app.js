'use strict'

let minRange = 0, 
maxRange = 100, 
attempts = 0; 

alert('загадай ціле число в межах від 0 до 100'); 

// цикли

while (minRange < maxRange) { 

    const guess = Math.floor((minRange + maxRange) / 2); 

    const userResp = prompt(`ваше число дорівнює ${guess}? (>, < чи =)`); 

    if (userResp === '=' || minRange === maxRange) { 
        attempts++; 
        alert(`Комп'ютер вгадав число за ${attempts} кроків`); 
        break; 
    } else if (userResp === '>') { 
        minRange = guess + 1; 
        attempts++; 
    } else if (userResp === '<') { 
        maxRange = guess - 1; 
        attempts++; 
    }
}

// рекурсії

const recurs = function(minRang, maxRang, attempt = 0) {

        let minRange = minRang;
        let maxRange = maxRang;

        const guess = Math.floor((minRange + maxRange) / 2); 
    
        const userResp = prompt(`ваше число дорівнює ${guess}? (>, < чи =)`); 
    
        if (userResp === '=' || minRange === maxRange) { 
            attempt++; 
            alert(`Комп'ютер вгадав число за ${attempt} кроків`);
        } else if (userResp === '>') { 
            minRange = guess + 1; 
            attempt++;
            recurs(minRange, maxRange, attempt);
        } else if (userResp === '<') { 
            maxRange = guess - 1; 
            attempt++;
            recurs(minRange, maxRange, attempt);
        }

}

recurs(minRange, maxRange);