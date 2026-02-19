const Hero_Data = {
    Title: "Physics",
    Description: "Exploring the fundamental laws that govern the motion of matter through space and time."
}

const Subject_List = [
    {
        Name: "Modern Computing Physics",
        Icon: "fas fa-microchip",
        Description: "Exploring quantum bits, superposition, and the physical limits of computation.",
        Page: "Computing_Physics.html"
    },
    {
        Name: "Electronics",
        Icon: "fas fa-plug",
        Description: "Fundamental circuit theory, transistors, and active component behavior.",
        Page: "Electronics_Physics.html"
    },
    {
        Name: "Nuclear Physics",
        Icon: "fas fa-atom",
        Description: "Energy Levels, Radioactivity, Nuclear Reactions, and Applications.",
        Page: "Nuclear_Physics.html"
    }
]

const Social_Links_List = [
    { Icon: "fas fa-arrow-left", Url: "index.html", Class: "Back_Link" },
    { Icon: "fab fa-blogger", Url: "https://ferrofy.blogspot.com/", Class: "" }
]

const Hero_Container = document.getElementById("Hero_Container")
Hero_Container.innerHTML = `
    <h1>${Hero_Data.Title}</h1>
    <p>${Hero_Data.Description}</p>
`

const Card_Container = document.getElementById("Card_Container")
Subject_List.forEach(Subject_Item => {
    const Card_Element = document.createElement("div")
    Card_Element.className = "Card_Box"
    Card_Element.innerHTML = `
        <i class="${Subject_Item.Icon}"></i>
        <h3>${Subject_Item.Name}</h3>
        <p>${Subject_Item.Description}</p>
    `
    Card_Element.onclick = () => {
        window.location.href = Subject_Item.Page
    }
    Card_Container.appendChild(Card_Element)
})

const Social_Container = document.getElementById("Social_Container")
Social_Links_List.forEach(Link_Item => {
    const Anchor = document.createElement("a")
    Anchor.href = Link_Item.Url
    if(Link_Item.Class) Anchor.className = Link_Item.Class;
    Anchor.innerHTML = `<i class="${Link_Item.Icon}"></i>`
    Social_Container.appendChild(Anchor)
})

document.querySelectorAll('.Card_Box').forEach(card => {
    card.onmousemove = e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
});