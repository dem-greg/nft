 const images = [
 './image/meet/meet-nft-1.webp',
  './image/meet/meet-nft-2.webp',
  './image/meet/meet-nft-3.webp',
  './image/meet/meet-nft-4.webp',
  './image/meet/meet-nft-5.webp',
  './image/meet/meet-nft-6.webp',
  './image/meet/meet-nft-7.webp'];
  const smile = [
'./image/meet/meet-face-1.png',
'./image/meet/meet-face-2.png',
'./image/meet/meet-face-3.png',
'./image/meet/meet-face-4.png',
'./image/meet/meet-face-5.png',
'./image/meet/meet-face-6.png',
'./image/meet/meet-face-7.png',
];
let a = 0;

function SetImage() {
            if (a == 0) {
                $('.change_photo_item').attr('src', images[0])
                $('.meet_smile_face').attr('src', smile[0])
                a = 1;
            } else if(a==1){
               $('.change_photo_item').attr('src', images[1])
               $('.meet_smile_face').attr('src', smile[1])
                a = 2;
            }else if(a==2){
               $('.change_photo_item').attr('src', images[2])
               $('.meet_smile_face').attr('src', smile[2])
                a = 3;
            }else if(a==3){
               $('.change_photo_item').attr('src', images[3])
                  $('.meet_smile_face').attr('src', smile[3])
                a = 4;
            }else if(a==4){
               $('.change_photo_item').attr('src', images[4])
                  $('.meet_smile_face').attr('src', smile[4])
                a = 5;
            }else if(a==5){
               $('.change_photo_item').attr('src', images[5])
                  $('.meet_smile_face').attr('src', smile[5])
                a = 6;
            }else if(a==6){
               $('.change_photo_item').attr('src', images[6])
                  $('.meet_smile_face').attr('src', smile[6])
                a = 0;
            }
 
        }

$(document).ready(function(){



setInterval(SetImage, 350);


  var sceneOne = document.getElementById('scene_one');
  var parallaxOne = new Parallax(sceneOne);


  var sceneTwo = document.getElementById('scene_two');
  var parallaxTwo = new Parallax(sceneTwo);

  var sceneThree = document.getElementById('scene_three');
  var parallaxThree = new Parallax(sceneThree);





})