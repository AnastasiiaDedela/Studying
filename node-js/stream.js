const fs = require('fs')

const rs = fs.createReadStream('./file-modifications/text.txt', {encoding: 'utf-8'});

const ws = fs.createWriteStream('./file-modifications/new-text.txt')

//variant 1
rs.on('data', (dataChunk)=>{
    ws.write(dataChunk)
})

//variant 2
rs.pipe(ws)