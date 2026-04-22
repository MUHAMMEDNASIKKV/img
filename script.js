function generate(){

let file = document.getElementById("photo").files[0];
let name = document.getElementById("name").value;

if(!file){
alert("Upload image first");
return;
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bg = new Image();
bg.src = "bg.png";

bg.onload = function(){

ctx.drawImage(bg,0,0,1080,1350);

let userImg = new Image();

userImg.onload = function(){

// circle image
ctx.save();

ctx.beginPath();
ctx.arc(540,670,160,0,Math.PI*2);
ctx.closePath();
ctx.clip();

ctx.drawImage(userImg,380,510,320,320);

ctx.restore();

// name text
ctx.fillStyle="black";
ctx.font="bold 55px Arial";
ctx.textAlign="center";
ctx.fillText(name,540,980);

// download
let link = document.getElementById("download");
link.href = canvas.toDataURL();
link.download = "quran-academy.png";
link.innerHTML = "Download Image";
link.style.display="inline-block";

}

userImg.src = URL.createObjectURL(file);

}

}
