const Hero_Data = {
    Title: "Computer Science",
    Description: "Mastering the syntax, logic, and architecture of modern programming."
}

const Subject_List = [
    {
        Name: "Python",
        Icon: "fab fa-python",
        Description: "High-level programming for AI, Data Science, and Automation.",
        Page: "Python_Notes.html"
    },
    {
        Name: "C Language",
        Icon: "fas fa-copyright",
        Description: "Foundational low-level programming and memory management.",
        Page: "C_Notes.html"
    },
    {
        Name: "C++",
        Icon: "fas fa-code",
        Description: "Performance-oriented coding for systems and game engines.",
        Page: "Cpp_Notes.html"
    },
    {
        Name: "HTML & CSS",
        Icon: "fab fa-html5",
        Description: "Structuring and styling the modern web ecosystem.",
        Page: "Web_Dev_Notes.html"
    },
    {
        Name: "JavaScript",
        Icon: "fab fa-js",
        Description: "Creating dynamic interactivity and full-stack applications.",
        Page: "JS_Notes.html"
    },
    {
        Name: "Data Structures",
        Icon: "fas fa-sitemap",
        Description: "Optimizing code efficiency through logic and organization.",
        Page: "DSA_Notes.html"
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