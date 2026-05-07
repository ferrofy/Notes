const Search_Input = document.getElementById("Search_Input");
const All_Cards = document.querySelectorAll(".Topic_Card");

if (Search_Input) {
    Search_Input.addEventListener("input", function () {
        const Query = Search_Input.value.toLowerCase().trim();

        All_Cards.forEach(function (Card) {
            const Name = Card.querySelector(".Topic_Name")?.textContent.toLowerCase() || "";
            const Tag = Card.querySelector(".Topic_Tag")?.textContent.toLowerCase() || "";
            const Matches = Name.includes(Query) || Tag.includes(Query);
            Card.classList.toggle("Hidden_Card", Query.length > 0 && !Matches);
        });

        document.querySelectorAll(".Topic_Section").forEach(function (Section) {
            const Visible = Section.querySelectorAll(".Topic_Card:not(.Hidden_Card)").length;
            Section.style.display = Visible === 0 && Query.length > 0 ? "none" : "";
        });
    });
}
