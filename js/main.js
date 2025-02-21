//To change color of name

const sophiaElement = document.getElementById("sophia");

sophiaElement.style.color = "rgb(239, 160, 0)";

//To change color of About "me"

const meElement = document.getElementById("me");

meElement.style.color = "rgb(239, 160, 0)";

//Change background color "about me"
//Got help from ChatGPT to target the first elememt in the class https://chatgpt.com/c/67b8766a-bf3c-8001-814c-a3d794568b84

const backgroundElement = document.getElementsByClassName("about-me-part")[0];

backgroundElement.addEventListener("mouseover", function (event) {
  backgroundElement.style.backgroundColor = "rgb(200, 110, 0)";
});
