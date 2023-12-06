const fs = require(`fs`);
const Reese84 = require(`./reese84.js`);
const { fromFile } = require(`../ast.js`);

const reese84File = process.argv.slice(-2)[0];


const ast = fromFile(reese84File);

Reese84.deobfuscate(ast);

const reese84 = new Reese84(ast);

const payloadFile = process.argv.slice(-1)[0];

const rawPayloadData = fs.readFileSync(payloadFile, {encoding : `UTF-8`}).toString();

const rawPayloads = JSON.parse(rawPayloadData);


rawPayloads.forEach((rawPayload, index) => {  

  var p = rawPayload.solution.interrogation.p; 
  var cr = rawPayload.solution.interrogation.cr;

  var decodedData = reese84.decodePayload(p, cr);

  //JSON.stringify(decodedData);  
});
