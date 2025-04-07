const fs = require('fs')
const path = require('path');

const fsPromises = require('fs').promises;

const fileOperations = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'lorem.txt'), 'utf-8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'lorem.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\n nice to meet you')
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'promiseRename.txt'))
    }catch (err){
        console.error(err);
    }
}

fileOperations()


//variant 1

// fs.readFile('./lorem.txt', 'utf-8', (err, data) => {
//     if(err)throw err;
//     console.log(data)
// })

//variant 2 if file is in the same dir (when file is in the different dir the path will be : path.join(__dirname, 'folder-name', 'file name with the extansion'))

// fs.readFile(path.join(__dirname, 'lorem.txt'), 'utf-8', (err, data) => {
//     if(err)throw err;
//     console.log(data)
// })


// //write file
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
//     if(err)throw err;
//     console.log('file is written')
// })


// //update file
// fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing test', (err) => {
//     if(err)throw err;
//     console.log('file is appended')
// })

//delete file

// fs.unlink(path.join(__dirname, 'test.js'), (err) => {
//     if(err)throw err;
//     console.log('deleted')
// })

//write and update file (looks like callback hell)

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
//     if(err)throw err;
//     console.log('file is written')

//     fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nTesting test', (err) => {
//         if(err)throw err;
//         console.log('file is appended')

//         fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'new-reply.txt'), (err) => {
//             if(err)throw err;
//             console.log('file is renamed')
//         })
//     })
// })





//exit on uncaught errors

process.on('uncaughtException', error => {
    console.error('error: ', error);
    process.exit(1)
})
