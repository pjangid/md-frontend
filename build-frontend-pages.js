const fs = require('fs');

let HEADER, FOOTER, PAGE;
const FRONTENDPAGES= "frontend-pages"

const STYLE = " <link rel='stylesheet' type='text/css' href='styles.css'/>";
const SCRIPTING = " <script src='main.js'></script>";

(function(){
    !fs.existsSync(FRONTENDPAGES) && 
        fs.mkdirSync(FRONTENDPAGES);
    
}())

let fetchViews = function (pageName) {
    return new Promise((resolve, reject) => {
        fs.readFile(pageName, 'utf8', function (err, pageContent) {
            if (err) {
                reject("Cannot build frontend pages\n File Not found");
            } else {
                let isHeader = pageContent.indexOf("</head>")
                let isFooter = pageContent.indexOf("</body>")
                if (isHeader >= 1) {
                    pageContent = [pageContent.slice(0, isHeader), STYLE, pageContent.slice(isHeader)].join("")
                }
                else if (isFooter >= 1) {
                    pageContent = [pageContent.slice(0, isFooter), SCRIPTING, pageContent.slice(isFooter)].join("")
                }
                resolve(pageContent)
            }
        });

    })
}

HEADER = fetchViews('dist/master/header.html');
FOOTER = fetchViews('dist/master/footer.html');

fs.readdir('dist/views/', (err, files) => {
    files.map(filename => {
        console.log('\x1b[33m%s\x1b[0m', 'Building '+ filename)
        PAGE = fetchViews('dist/views/' + filename);
        Promise.all([HEADER, PAGE, FOOTER]).then(function (pageContent) {
            fs.writeFile(FRONTENDPAGES+'/' + filename, pageContent.join(""), function (err) {
                if (err) throw err;
            });
        }).catch((err) => {
            console.log(err)
        });
    });
})

fs.copyFile('dist/styles.css', FRONTENDPAGES+'/styles.css', (err) => {
    if (err) throw err;
    console.log('Styling Generated & Copied');
});
fs.copyFile('dist/main.js', FRONTENDPAGES+'/main.js', (err) => {
    if (err) throw err;
    console.log('Scripting Generated & Copied');
});