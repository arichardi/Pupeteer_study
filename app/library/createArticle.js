fs = require('fs');

function createArticle(data){

    //create a file
    fs.writeFileSync('hello.txt', 'text created with xxx', 'utf8')
    
    for ( let prop in data){

        //append the text to the file
        fs.appendFileSync('hello.txt', '\n\n' + data[prop])
            
    }


}

module.exports = createArticle

