const Hero_Data = {
    Title: "Mathematics",
    Description: "The universal language of logic, patterns, and complex problem-solving."
}

const Subject_List = [
    {
        Name: "Calculus",
        Icon: "fas fa-infinity",
        Description: "Studying change through derivatives, integrals, and series.",
        Page: "Calculus_Notes.html"
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