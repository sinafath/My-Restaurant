const sharp = require('sharp');
const formidable = require('formidable');
const fs = require('fs');

const uploadPath = "public/upload/";
const convertedPath = "public/convertedImage/";

const form = formidable({ multiples: true, keepExtensions: true, uploadDir:  uploadPath });

function mkdirsIfNotExists(pathes = []){
    for(let path of pathes){
      if(!fs.existsSync(path)){
        fs.mkdirSync(path);
      }
    }
}

function upload(req){
  return new Promise((resolve, reject) => {
  
    form.parse(req, (error, fields, files) => {

      if(error){
        return reject(error)
      }
      
      resolve(files[""])
    });
  })
}

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async function handler(req, res) {

  try{
    mkdirsIfNotExists([uploadPath, convertedPath])

    let files = await upload(req);
    let filesPath = [];
    
    if(!Array.isArray(files)){
      files = [files]
    }

    for(let file of files){
            
      await sharp(file.path)
      .webp()
      .toFile(convertedPath + file.name.slice(0, -4) + ".webp");
      
      fs.rename(file.path, uploadPath + file.name, ()=>{})
      filesPath.push(convertedPath + file.name + ".webp")
    }

    res.send({filesPath: filesPath});

  }catch(error){

    console.log(error);
    res.send({message: "Failed :("})

  }
}
