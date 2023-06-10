const fs = require('fs');

class PosBuild{

    constructor() {
        this.buildHeader()
        .then(() => console.log('Finalized!'))
    }

    async buildHeader() {
        console.log('Building header ...');
        const header = fs.readFileSync(`${__dirname}/header.txt`, 'utf8');
        let index = fs.readFileSync(`${__dirname}/build/index.html`, 'utf8');
        index = index.split(/(<!doctype\s+html><html.*?>)/);

        fs.writeFileSync(`${__dirname}/build/index.html`, `${index[1]}${header}${index[2]}`, { flag: 'w+' });
    }
}

new PosBuild();
