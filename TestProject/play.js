let arr = [0, 1, 2, 3, 4, 5, 4, 5, 5];
function randomDataArrayGenerator(arraySize, minValue, maxValue) {
  var numArray = [];
  for (i = 0; i < arraySize; i++) {
    var number = Math.random() * (maxValue - minValue) + minValue;
    numArray.push(number);
  }
  return numArray;
}

var array = randomDataArrayGenerator(10, 20, 40);
//console.log(array);

var array = [1, 4, 5, 2, 3, 7, 8, 9, 5, 4, 6, 6, 4, 1, 5, 4];
console.log("Initial Array " + array);

var squareArray = [];
array.forEach(function square(item) {
  squareArray.push(item * item);
});
console.log("Squre Array " + squareArray);

var coppiedArray = [];
array.forEach(function copyArray(item) {
  coppiedArray.push(item);
});

console.log("Copied Array " + coppiedArray);

function sum(total, num) {
  return total + num;
}

console.log("sum Array " + array.reduce(sum));

var spreadedArray = [...array];
console.log("spreaded Array " + spreadedArray);

// set time out example
console.log("Real Time");
setTimeout(function() {
  console.log("After 1000");
  setTimeout(function() {
    console.log("1000 secs After previous ");
    setTimeout(function() {
      console.log("1000 seconds after previous 1000");
    }, 1000);
  }, 1000);
}, 1000);

//promises example
function Step1() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("After 3000 msecs");
      resolve("My job is over");
    }, 3000);
  });
}
function Step2() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("3000 msecs After 3000");
      resolve("My job is over");
    }, 3000);
  });
}

function Step3() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("3000 secs After 3000 After 3000 msecs");
      resolve();
    }, 3000);
  });
}

let step1Promise = Step1();
let step2Promise = step1Promise.then(string => Step2());
let step3Promise = step2Promise.then(() => Step3());

//post example using async wait
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(res => {
    console.log("res", res);
    return res.json();
  })
  .then(data => {
    console.log("data", data);
    data.forEach(post => {
      getPost(post.title);
    });
  })
  .catch(err => {
    console.error("Error: ", err);
  });

data.forEach(post => {
  getPost(post.id);
});

function getPost(title1) {
  var title = document.createElement("P");
  var txt = document.createTextNode(title1);
  title.appendChild(txt);
  document.getElementById("container").appendChild(title);
}
