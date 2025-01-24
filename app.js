const item = document.querySelector(".tex");
const toDoBox = document.querySelector(".to-do");

console.log(item, toDoBox); 

item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key pressed");
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (item) => {
    if (item.trim() !== "") {
        console.log("Adding item:", item);
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item}
            <i class="fas fa-times"></i>
        `;

        listItem.addEventListener("click", function() {
            this.classList.toggle("done");
        });

        listItem.querySelector("i").addEventListener("click", function() {
            listItem.remove();
        });

        toDoBox.appendChild(listItem);
        console.log(toDoBox.innerHTML);
    }
};
