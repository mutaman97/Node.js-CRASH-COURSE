import { getLinks, saveLinks } from './feed-manager.mjs';
import { question, close } from './rl.mjs';

const feeds = await getLinks();

let input = await question('Enter command (list, add, del, read, quit): ');

while (input != 'quit'){
    let cmdParts = input.trim().split(' ');
    let cmd = cmdParts[0];
    //list
    if (cmd == 'list'){
        feeds.forEach((url, index) => console.log(`${index}\t${url}`));
    }

    // add url
    if (cmd == 'add'){
        if (cmdParts.length < 2) {
            console.log('Please include the URL with the add command.');
        } else {
            feeds.push(cmdParts[1]);
        }

    }

    //del index
    if (cmd == 'del'){
        if (cmdParts.length < 2) {
            console.log('Please include the index of the URL to delete.');
        } else {
            let index = parseInt(cmdParts[1], 10);
            if (index > -1 && index < feeds.length) {
                feeds.splice(index, 1);
            } else {
                console.log("The provided index is out of range.");
            }
        }

    }
    //read index
    
    input = await question('Enter command (list, add, del, read, quit): ');
}

// feeds.push('http://www.tutsplus.com');

await saveLinks(feeds);
close();