let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcyb1gsma/upload'
let CLOUDINARY_URL_PRESET = 'dsxefrhd'

let imgPreview = document.getElementById('img-preview')
let fileUpload = document.getElementById('file-upload')
// console.log(imgPreview);

fileUpload.addEventListener('change', (event) => {
  // console.log(event);
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_URL_PRESET)
  // console.log(file);
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function (res) {
    // console.log(res); 
    imgPreview.src = res.data.secure_url;
    console.log(imgPreview);
    
  }).catch(function (err) {
    console.error(err);

    
  })
  
  
})

// https://res.cloudinary.com/dcyb1gsma/image/upload/v1610644793/mrpubsdqhe18rhihuhyp.jpg
