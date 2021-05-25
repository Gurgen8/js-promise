///fetch---promise

fetch("https://corona-api.com/countries/us").then(function(response){
  return response.json()
}).then(function(response){

  var div =document.querySelector(".div");
div.innerText=response.data.timeline[0].active
})








