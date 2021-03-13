const puppeteer = require('puppeteer')

async function seachMyPage(webPage) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(webPage)
    const WebText = await page.evaluate( () => {

        //make the object
        const article = {
            title: '',
            //data: '',
            //author: '',
            //body: ''
        }
        //insert the data in the object
        article.title = document.querySelector('.c-content-head')
        //return the object
        return article
    } )

    console.log(WebText.title)
 
    await browser.close()
    
}

const webPage = 'https://www1.folha.uol.com.br/poder/2021/03/doria-admite-disputar-reeleicao-em-aceno-para-rivais-do-centro.shtml'

seachMyPage(webPage)