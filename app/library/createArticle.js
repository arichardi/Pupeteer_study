fs = require('fs');

function createArticle(data){

    //create a file
    fs.writeFileSync('hello.txt', 'text created with xxx', 'utf8')
    
    data.forEach(element => {
        
            //append the text to the file
            fs.appendFileSync('hello.txt', '\n\n' + element)
        
    });


}

module.exports = createArticle

