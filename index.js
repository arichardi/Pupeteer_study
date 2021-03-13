const prompt = require('prompt')

prompt.message = 'blocked News '
prompt.delimiter = ' >< '

console.log( ' \n \n \n Welcome to blockednews \n \n \n' )
console.log( 'We will help you to read your blocked news without problem')

const questions = {
    properties: {
        page: {
            description: 'insert the page url :'
        },
    }
}

function result(err, result) {
    console.log('your page ' + result.page)
}

prompt.start()

prompt.get(questions, result)

