const fs=require('fs')

const readStream = fs.createReadStream("./docs/doc1.txt",{encoding:"utf-8"})
const writeStream = fs.createWriteStream("./docs/doc2.txt")

readStream.pipe(writeStream)