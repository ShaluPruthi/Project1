const item = document.querySelector(".tex");
const toDoBox = document.querySelector(".to-do");

console.log(item, toDoBox); // Check if elements are selected correctly

item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key pressed"); // Check if Enter key event is detected
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (item) => {
    if (item.trim() !== "") {
        console.log("Adding item:", item); // Check the item being added
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
        console.log(toDoBox.innerHTML); // Check the current state of the to-do box
    }
};
