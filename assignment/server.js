const express =  require("express");
const app = express();
var fs = require('fs');
var path = require('path');
const zipFolder = require('zip-a-folder');
const { promisify } = require('util');
const { resolve } = require('path');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const port = '4000'

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

app.get('/', async function(req, res) {
  files = await getFiles('./test');
  console.log(files);
  if(files.length!=0){
    files.forEach(async (file) => {    
      await fs.rename(file, './preparefolder/' + path.basename(file), function(err) {
        if (err){ 
          throw err;
        }else{
          console.log('Move complete.');
          zipFolder.zipFolder('preparefolder', 'result.zip', function(err) {
            if(err) {
                console.log('Something went wrong!', err);
            }
          });
        }          
      });
    }); 
    res.send("Zip done");
  }else{
    res.send("No file present in test folder.");
  }
  });

  app.listen(port, function() {
    console.log('Server running on ' + port + ' port')
  });