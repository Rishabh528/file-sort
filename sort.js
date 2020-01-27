// to merge data from three files into one in sorted format.

const fs = require('fs');   //importing functions from fs library for file read and write operations
const os = require('os'); 
let arr = [];

fs.readFile(__dirname + '/input1.txt',(err,data) => {
    if(err) throw err;

    arr = arr.concat(data.toString().split(os.EOL));

    fs.readFile(__dirname + '/input2.txt',(err,data) => {
        if(err) throw err;

        arr = arr.concat(data.toString().split(os.EOL));

        fs.readFile(__dirname + '/input3.txt', (err,data) => {
            if(err) throw err;

            arr = arr.concat(data.toString().split(os.EOL));

            arr = arr.sort((a,b) => {
                return a-b;
            })

            fs.writeFile(__dirname + '/output.txt', arr.join(os.EOL),(err) =>{
                if(err) throw err;

                console.log('Done writing');
            })
        })
    })

})
