const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: 'dec53tbph',
  api_key: '676252692265247',
  api_secret: 'UcBrgPnl59r_xrMjwOnojr57xJs',
});


exports.delete = (cloudId)=>{
    cloudinary.uploader.destroy(cloudId)
}


exports.uploads=(file)=>{
  return new Promise ((resolve,reject) =>{
    cloudinary.uploader.upload(file , (result) =>{
      resolve({url : result.url , cloudId : result.public_id})
      
    } , {resource_type : "auto"}
    )
    .catch(err => 
    reject(err)
  )
  })
}



