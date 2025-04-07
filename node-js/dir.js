const fs = require('fs');


if(!fs.existsSync('./new-dir')){
    fs.mkdir('./new-dir', (err)=>{
        if(err) throw err;
        console.log('directory created')
    })
}

if(fs.existsSync('./new-dir')){
    fs.rmdir('./new-dir', (err)=>{
        if(err) throw err;
        console.log('directory deleted')
    })
}