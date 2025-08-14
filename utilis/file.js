const fs = require('fs');
const filePath= require('../database.json');


async function readData(){
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error reading data from file: ' + error.message);
    }
}

async function writeData(data) {

    try {
        await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        throw new Error('Error reading data: ' + error.message);
    }
}

module.export ={
    readData,
    writeData
};

