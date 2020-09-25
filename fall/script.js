var falling = true;

TweenLite.set("#falling-leaves", { perspective: 600 });
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

var total = 500;
var container = document.getElementById("falling-leaves"),
  w = window.innerWidth,
  h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement("div");
  TweenLite.set(Div, {
    attr: { class: "leave" },
    x: Random(0, w),
    y: Random(-200, -150),
    z: Random(-200, 200),
  });
  container.appendChild(Div);
  animm(Div);
}

function animm(elm) {
  //vitesse de chute
  TweenMax.to(elm, Random(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });

  //Perspective ?
  TweenMax.to(elm, Random(400, 800), {
    x: "+=100",
    rotationZ: Random(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });

  TweenMax.to(elm, Random(2, 8), {
    rotationX: Random(0, 360),
    rotationY: Random(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}

function Random(min, max) {
  return min + Math.random() * (max - min);
}

$(document).ready(function () {
//  var WallpaperBatch = ["bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg"];

  var WallpaperBatch = [
    "https://images.pexels.com/photos/1114896/pexels-photo-1114896.jpeg?cs=srgb&dl=pexels-johannes-plenio-1114896.jpg&fm=jpg", 
    "https://images.pexels.com/photos/3070989/pexels-photo-3070989.jpeg?cs=srgb&dl=pexels-harrison-haines-3070989.jpg&fm=jpg", 
    "https://images.pexels.com/photos/3265995/pexels-photo-3265995.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
    "https://images.pexels.com/photos/1545345/pexels-photo-1545345.jpeg?cs=srgb&dl=pexels-david-bartus-1545345.jpg&fm=jpg", 
    "https://images.pexels.com/photos/589817/pexels-photo-589817.jpeg?cs=srgb&dl=pexels-valiphotos-589817.jpg&fm=jpg",
    "https://images.pexels.com/photos/1563563/pexels-photo-1563563.jpeg?cs=srgb&dl=pexels-dariusz-grosa-1563563.jpg&fm=jpg",
    "https://images.pexels.com/photos/3198922/pexels-photo-3198922.jpeg?cs=srgb&dl=pexels-tara-robinson-3198922.jpg&fm=jpg",
    "https://images.pexels.com/photos/589821/pexels-photo-589821.jpeg?cs=srgb&dl=pexels-valiphotos-589821.jpg&fm=jpg",
    "https://images.pexels.com/photos/589810/pexels-photo-589810.jpeg?cs=srgb&dl=pexels-valiphotos-589810.jpg&fm=jpg",
    "https://images.pexels.com/photos/2170233/pexels-photo-2170233.jpeg?cs=srgb&dl=pexels-emre-kuzu-2170233.jpg&fm=jpg"
  ];

  var Wallpaper =
    WallpaperBatch[Math.floor(Math.random() * WallpaperBatch.length)];

  var Path = Wallpaper;

  $("body").css("background-image", "url(" + Path + ")");

  console.log(WallpaperBatch);
  console.log(Wallpaper);
  console.log(Path);
});
