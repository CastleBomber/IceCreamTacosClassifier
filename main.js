var form = document.forms.namedItem("fileinfo");
var lastImage;

form.addEventListener('submit', function(ev) {
  ev.preventDefault()
    let formdata = new FormData(form);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    
    fetch("https://1a3c5e234d38.ngrok.io/predict", requestOptions)
       .then(response => response.text().then((result =>{
          console.log(result);
          DisplayResult(result)
       })));
});

//On Image Uploaded
form.addEventListener('change', function(ev){
  lastImage = URL.createObjectURL(ev.target.files[0]);
  document.getElementById("uploadedImg").src = lastImage
})

function DisplayResult(result){
  /*I have created some CSS classes to make this look half decent.*/
  resultDiv = document.getElementById("results")

  divContainer = document.createElement("div")
  divContainer.className = "result"

  divImage = document.createElement("div")
  divImage.className = "image"
  divImage.style.backgroundImage = "url('" + lastImage + "')";

  divText = document.createElement("div")
  divText.appendChild(document.createTextNode(result))
  divText.className = "text"

  divContainer.appendChild(divImage)
  divContainer.appendChild(divText)
  resultDiv.prepend(divContainer)
}


