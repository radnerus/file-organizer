const fs = require('fs');
const path = require('path');

const arguments = process.argv;

const BASE_DIR = arguments[2];;
console.log(BASE_DIR);

if (!BASE_DIR) {
    return console.log('Please specify path for cleaning up.');
} else if (!fs.existsSync(BASE_DIR) || !fs.statSync(BASE_DIR).isDirectory()) {
    return console.log('Please specify a valid path for cleaning up.');
}


let movedFiles = 0;
fs.readdirSync(BASE_DIR).forEach(fileName => {
    const fullFileName = `${BASE_DIR}/${fileName}`;
    const fileStats = fs.statSync(fullFileName);
    if (fileStats.isFile()) {
        const extension = path.extname(fullFileName).slice(1).toLowerCase();
        // console.log(extension);
        if (extension) {
            movedFiles++;
            const folderToBeMoved = `${BASE_DIR}/${extension}`;
            if (!fs.existsSync(folderToBeMoved)) {
                fs.mkdirSync(folderToBeMoved);
                console.log(`Folder ${folderToBeMoved} created.`);
            }
            const destination = `${folderToBeMoved}/${fileName}`;
            fs.renameSync(fullFileName, destination);
            console.log(`File moved from \n${fullFileName} \nto \n${destination}\n`);
        }
    }
});


console.log(`Moved ${movedFiles} file to their respective extension directories.`);