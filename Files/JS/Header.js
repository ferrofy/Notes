let Nav_Items_List = [
    {
        Title: "HOME",
        href: "#"
    },
    {
        Title: "CSE",
        href: "#"
    },
    {
        Title: "PHYSICS",
        href: "#"
    },
    {
        Title: "MATH",
        href: "#"
    },
];

let Click = 0
let Menu_Bar = document.getElementById("Menu_Bar")
let Menu_Line_1 = document.getElementById("Menu_Bar_Lines_1")
let Menu_Line_2 = document.getElementById("Menu_Bar_Lines_2")
let Menu_Line_3 = document.getElementById("Menu_Bar_Lines_3")
let Menu_Side_Bar = document.getElementById("Menu_Side_Bar")
let Nav_Bar_Heading = document.getElementById("Header_Nav")
let Nav_Bar_Menu = document.getElementById("Menu_Nav")
let Menu_Hr = document.getElementById("Menu_Hr")

for (let Index = 0; Index < Nav_Items_List.length; Index++) {

    let Item_Header = document.createElement("a")
    let Item_Menu = document.createElement("a")

    Item_Header.textContent = Nav_Items_List[Index].Title
    Item_Menu.textContent = Nav_Items_List[Index].Title
    
    Item_Header.href = Nav_Items_List[Index].Href
    Item_Menu.href = Nav_Items_List[Index].Href

    Nav_Bar_Heading.appendChild(Item_Header)
    Nav_Bar_Menu.appendChild(Item_Menu)
}

Menu_Bar.addEventListener("mouseover", function () {
    Menu_Line_1.style.transform = "translate(-2px, 2px) rotateZ(-45deg)";
    Menu_Line_1.style.transition = "transform 0.3s ease";

    Menu_Line_3.style.transform = "translate(-2px, -2px) rotateZ(45deg)";
    Menu_Line_3.style.transition = "transform 0.3s ease";
})

Menu_Bar.addEventListener("mouseout", function () {
    Menu_Line_1.style.transform = "translateY(15px)";
    Menu_Line_1.style.transition = "transform 0.3s ease";

    Menu_Line_3.style.transform = "translateY(-15px)";
    Menu_Line_3.style.transition = "transform 0.3s ease";
})

Menu_Bar.addEventListener("click", function () {
    Menu_Bar.style.zIndex = 2
    Menu_Side_Bar.style.zIndex = 1
    Click++;
    if ((Click % 2) == 1) {
        Menu_Side_Bar.style.width = "35vw"
        Menu_Side_Bar.style.height = "100%"
        Menu_Side_Bar.style.background = "#0E0F10"
        Menu_Side_Bar.style.display = "flex"
        Menu_Bar.style.transition = "transform 0.7s ease";
        Menu_Bar.style.transform = "rotateZ(-540deg)";
        Menu_Hr.style.display = "block"
        
    }
    else {
        Menu_Side_Bar.style.display = "none"
        Menu_Bar.style.transition = "transform 0.7s ease";
        Menu_Bar.style.transform = "rotateZ(0deg)";
        Menu_Hr.style.display = "none"
    }
})