let invisibleDiv = document.getElementsByClassName('character2');
let characters = document.getElementsByClassName('characters');
let invisibleDiv2 = document.getElementsByClassName('character3');
let click = document.getElementById("click");
let click2 = document.getElementById("click2");
let click3 = document.getElementById("click3");
let click4 = document.getElementById("click4");
let invisible = () => {
  for (let i = 0; i < invisibleDiv.length; i++) {
    invisibleDiv[i].style.display = "none";
  }
  click4.style.display="none";
  click3.style.display="inline-block";
}
let visible = () => {
  for (let i = 0; i < invisibleDiv.length; i++) {
    invisibleDiv[i].style.display = "inline-block";
  }
  click3.style.display="none";
  click4.style.display="inline-block";
}
invisible();
let invisible2 = () => {
  for (let i = 0; i < invisibleDiv2.length; i++) {
    invisibleDiv2[i].style.display = "none";
  }
  click2.style.display="none";
  click.style.display="inline-block";
}
let visible2 = () => {
  for (let i = 0; i < invisibleDiv2.length; i++) {
    invisibleDiv2[i].style.display = "inline-block";
  }
  click.style.display="none";
  click2.style.display="inline-block";
}
invisible2();
