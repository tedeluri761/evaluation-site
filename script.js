let submit = document.getElementById("submit");
let sections = document.querySelectorAll(".section");
let circle = document.getElementById("circle");
let oneMain = document.getElementById("oneMain");
let flex = document.getElementById("flex");
let h1andParagraph = document.getElementById("h1andParagraph");
let selectedConteiner = document.getElementById("selectedConteiner");
let domH1 = document.getElementById("domH1");
let paragraphDom = document.getElementById("paragraphDom");
let selectedNumber = document.getElementById("selectedNumber");
sections.forEach((element) => {
  element.clickCount = 0;

  element.addEventListener("mouseenter", function () {
    this.classList.add("hover");
  });

  element.addEventListener("mouseleave", function () {
    this.classList.remove("hover");
  });

  element.addEventListener("click", function () {
    sections.forEach((el) => {
      let paragraph = el.querySelector(".paragraph");
      el.style.backgroundColor = "rgba(38, 46, 56, 1)";
      paragraph.style.color = "rgba(124, 135, 152, 1)";
    });

    let closestElement = this.closest(".section");
    let closestParagraph = closestElement.querySelector(".paragraph");

    closestElement.clickCount++;

    if (closestElement.clickCount % 2 === 1) {
      closestElement.style.backgroundColor = "rgba(124, 135, 152, 1)";
      closestParagraph.style.color = "rgba(255, 255, 255, 1)";
    } else {
      closestElement.style.backgroundColor = "rgba(38, 46, 56, 1)";
      closestParagraph.style.color = "rgba(124, 135, 152, 1)";
    }
    submit.addEventListener("click", () => {
      console.log(closestParagraph.textContent);
      oneMain.style.alignItems = "center";
      circle.style.display = "none";
      flex.style.display = "none";
      h1andParagraph.style.display = "none";
      submit.style.display = "none";
      imageilustration.style.display = "block";
      selectedConteiner.style.display = "block";
      domH1.style.display = "block";
      paragraphDom.style.display = "block";
      selectedNumber.textContent = closestParagraph.textContent;
    });
  });
});
