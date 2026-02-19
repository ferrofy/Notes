const Hero_Data = {
    Title: "FerroFy Notes",
    Description: "Your Knowledge Hub For Deep Learning Across Subjects"
}

const Subject_List = [
    {
        Name: "Computer Science",
        Icon: "fas fa-terminal",
        Description: "Mastering Logic Code And Architecture",
        Page: "CSE"
    },
    {
        Name: "Mathematics",
        Icon: "fas fa-square-root-variable",
        Description: "From Abstract Algebra To Advanced Calculus",
        Page: "Math"
    },
    {
        Name: "Physics",
        Icon: "fas fa-microscope",
        Description: "Exploring The Laws That Govern Our Universe",
        Page: "Physics"
    }

]

const Social_Links_List = [
    { Icon: "fab fa-blogger", Url: "https://ferrofy.blogspot.com/" }
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