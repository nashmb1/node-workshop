var fs = require('fs');
var readline = require('readline');

var file = 'products.json';


function getAllProducts(productPath) {
    fs.readFile(`${__dirname}/${file}`, 'utf8', (err, file) => {
        console.log('Bienvenu. Voici les produits')

        try {
            JSON.parse(file).forEach(element => {
                //console.log(Object.values(element).join('-'));
                console.log(element.id + ' - ' + element.name + ' / '  + element.EUR_price + ' / ' + element.orders_counter);
            });
        } catch (e) {
            console.log(e);
        }
    });
}

function orderProductById(id) {
    fs.readFile(`${__dirname}/${file}`, 'utf8', (err, file) => {
        console.log('Bienvenu. Voici les produits')
            var products = JSON.parse(file);
        try {
            products.forEach(element => {
                //console.log(Object.values(element).join('-'));
                console.log(element.id + ' - ' + element.name + ' / '  + element.EUR_price + ' / ' + element.orders_counter);

                if (element.id == id) {
                    element.orders_counter++;

                    fs.writeFile(__dirname + '/products.json', JSON.stringify(products), function (err) {
                        if(err) throw err;

                        console.log('Commande terminée. Voici votre fichier: ' + element.file_link);
                    });
                }
            });
        } catch (e) {
            console.log(e);
        }
    });
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    console.log('the line:' + line);
    console.log(line.split('i want product'));
    if (line.split('i want product').length == 2 ) {
        orderProductById(line.split('i want product')[1]);
    }
    console.log('Bad request')
});
//getAllProducts();
//orderProductById(1);

