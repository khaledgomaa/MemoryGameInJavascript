var defaultImage = "Moon.gif";
var count = 0;
var numOfImages = 0;
var lastImage;
var flag = true;
var lastIndex = 0;

var imagesId = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5",
  "img6",
  "img7",
  "img8",
  "img9",
  "img10",
  "img11",
  "img12",
];

var memImages = [
  "2.gif",
  "1.gif",
  "5.gif",
  "6.gif",
  "3.gif",
  "4.gif",
  "1.gif",
  "2.gif",
  "6.gif",
  "3.gif",
  "5.gif",
  "4.gif",
];

function returnImage(index) {
  return memImages[index - 1];
}

function showImages() {
  for (var i = 0; i < imagesId.length; i++) {
    document.getElementById(imagesId[i]).src = memImages[i];
  }
}

function resetImages() {
  for (var i = 0; i < imagesId.length; i++) {
    document.getElementById(imagesId[i]).src = defaultImage;
  }
}

function resetOneImage(image) {
  image.src = defaultImage;
}

function touchedImage(image, index) {
  if (!flag && index !== lastIndex) {
    numOfImages++;
    image.src = returnImage(index);
    count++;
    if (count === 2) {
      if (lastImage.src !== image.src) {
        flag = true;
        setTimeout(function () {
          resetOneImage(image);
          resetOneImage(lastImage);
          flag = false;
        }, 300);
        numOfImages -= 2;
        lastIndex = 0;
      }
      if (numOfImages === memImages.length) {
        onFinish();
      }
      count = 0;
    } else {
      lastImage = image;
      lastIndex = index;
    }
  }
}

function onStart() {
  reOrderImages();
  showImages();
  setTimeout(function () {
    resetImages();
    flag = false;
  }, 1000);
  setTimeout(resetImages, 1000);
}

function onFinish() {
  setTimeout(function () {
    alert("Congratz you won the game =D");
    resetImages();
    numOfImages = 0;
    lastImage = "";
    flag = true;
    lastIndex = 0;
    reOrderImages();
    onStart();
  }, 300);
}

function reOrderImages() {
  memImages = shuffle(memImages);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

onStart();
