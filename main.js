function volumeUp(){
var volume = $(".audioDemo").prop("volume")+0.2;
if(volume >1){
volume = 1;
}
$(".audioDemo").prop("volume",volume);
}

function volumeDown(){
var volume = $(".audioDemo").prop("volume")-0.2;
if(volume <0){
volume = 0;
}
$(".audioDemo").prop("volume",volume);
}