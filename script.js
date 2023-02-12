let i = 0; 			
let images = [];	
let text=[];
let time = 2000;
let slide=document.querySelector('.slide');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let p=document.getElementById('p');

images[0] = "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600";
images[1] = "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600";
images[2] = "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600";
images[3] = "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600";
text[0]='Image 1';
text[1]='Image 2';
text[2]='Image 3';
text[3]='Image 4';

function changeImg(){
	slide.src = images[i];
  p.textContent=text[i];
  
	if(i < images.length-1){
	  i++; 

	} 
    else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;
