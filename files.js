const { log } = require('console');
const fs = require('fs');

// fs.readFile("./docs/doc.txt",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString())
// })

// fs.writeFile("./docs/doc.txt","hello, chechu",()=>{
//     console.log("file written");
    
// })
// if(!fs.existsSync("./assets"))
// {
//     fs.mkdir("./assets",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("folder created")
// })
// }
// else
// {
//     console.log("no such folder");
    
// }

if(fs.existsSync("./docs/remove.txt")){
    fs.unlink("./docs/remove.txt",(err)=>{
        if(err)
        {
            console.log(err);
            
        }
        console.log("deleted")
    })
}
else
{
    console.log("no such file");
    
}