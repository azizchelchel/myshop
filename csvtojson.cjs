let csvToJson = require('convert-csv-to-json');

let fileInputName = 'drug.csv'; 
let fileOutputName = 'drug.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

