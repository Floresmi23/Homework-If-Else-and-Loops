var containerEle=document.body.querySelector(".container");
var submitEle = document.querySelector(".submit");


var animals = ["dog ", "fish", "cat", "shark", "cat", "dog"];



// Sorts the items list-----------------------
animals = animals.sort(()=> Math.random()-0.5);




// Use a function like this to customize sorting
function compare(a,b){
  if(a>b){
    return -1;
  }
  if(b<a){
    return 1;
  }
  return 0;
}


for(var i=0; i<animals; i++){
  if(animal=="dog"){
    text += "borf borf";
  }else if(animal="cat"){
    text += "I am a cat";
  }else{
    text += "I'm an animal";
  }
  
}





// ---------------------------------------
// How to space everything line by line.
for(var i=0; i<animals.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML=animals[i];
  containerEle.appendChild(ele);
}
// ---------------------------------------







// containerEle.innerHTML=animals;

submitEle.addEventListener("click", function(){
  compare();
})