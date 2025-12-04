import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

function question() {
    rl.question('Enter your simple quation: ', (input) => {
    
        if(input === 'quit'){
            rl.close();
        } else {
            try{
                const value = eval(input);
                console.log(`${value}`)
            } catch (exception) {
                console.log("I don't know how to do that.")
            }
            question();
        }
    });
}

question();