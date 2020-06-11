function first_click() {
  let first_dots = document.getElementById("first_dots");
  let first_more = document.getElementById("first_more");
  let firstRead = document.getElementById("firstRead");

  if (first_dots.style.display === "none") {
    first_dots.style.display = "inline";
    firstRead.innerHTML = "Read more"; 
    first_more.style.display = "none";
  } else {
    first_dots.style.display = "none";
    firstRead.innerHTML = "Show less"; 
    first_more.style.display = "inline";
  }
}

function second_click() {
  let second_dots = document.getElementById("second_dots");
  let second_more = document.getElementById("second_more");
  let secondRead = document.getElementById("secondRead");

  if (second_dots.style.display === "none") {
    second_dots.style.display = "inline";
    secondRead.innerHTML = "Read more"; 
    second_more.style.display = "none";
  } else {
    second_dots.style.display = "none";
    secondRead.innerHTML = "Show less"; 
    second_more.style.display = "inline";
  }
}
function third_click() {
  let third_dots = document.getElementById("third_dots");
  let third_more = document.getElementById("third_more");
  let thirdRead = document.getElementById("thirdRead");

  if (third_dots.style.display === "none") {
    third_dots.style.display = "inline";
    thirdRead.innerHTML = "Read more"; 
    third_more.style.display = "none";
  } else {
    third_dots.style.display = "none";
    thirdRead.innerHTML = "Show less"; 
    third_more.style.display = "inline";
  }
}

function fourth_click() {
  let fourth_dots = document.getElementById("fourth_dots");
  let fourth_more = document.getElementById("fourth_more");
  let fourthRead = document.getElementById("fourthRead");

  if (fourth_dots.style.display === "none") {
    fourth_dots.style.display = "inline";
    fourthRead.innerHTML = "Read more"; 
    fourth_more.style.display = "none";
  } else {
    fourth_dots.style.display = "none";
    fourthRead.innerHTML = "Show less"; 
    fourth_more.style.display = "inline";
  }
}
function fifth_click() {
  let fifth_dots = document.getElementById("fifth_dots");
  let fifth_more = document.getElementById("fifth_more");
  let fifthRead = document.getElementById("fifthRead");

  if (fifth_dots.style.display === "none") {
    fifth_dots.style.display = "inline";
    fifthRead.innerHTML = "Read more"; 
    fifth_more.style.display = "none";
  } else {
    fifth_dots.style.display = "none";
    fifthRead.innerHTML = "Show less"; 
    fifth_more.style.display = "inline";
  }
}