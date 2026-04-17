let Menu_Bar = document.getElementById("Menu_Bar")
let Menu_Line_1 = document.getElementById("Menu_Bar_Lines_1")
let Menu_Line_2 = document.getElementById("Menu_Bar_Lines_2")
let Menu_Line_3 = document.getElementById("Menu_Bar_Lines_3")

Menu_Bar.addEventListener("mouseover", function() {
    Menu_Line_1.style.transform = "translate(-2px, 2px) rotateZ(-45deg)";
    Menu_Line_1.style.transition = "transform 0.3s ease";
    Menu_Line_1.style.width = "10px"

    Menu_Line_3.style.transform = "translate(-2px, -2px) rotateZ(45deg)";
    Menu_Line_3.style.transition = "transform 0.3s ease";
    Menu_Line_3.style.width = "10px"
})

Menu_Bar.addEventListener("mouseout", function() {
    Menu_Line_1.style.transform = "translateY(0px)";
    Menu_Line_1.style.transition = "transform 0.3s ease";

    Menu_Line_3.style.transform = "translateY(0px)";
    Menu_Line_3.style.transition = "transform 0.3s ease";
})