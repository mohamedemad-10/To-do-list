let btn = document.querySelector("button");
let output_list = document.getElementById("output-list");
let table_list = document.createElement("ul");
table_list.className = "table-list";
output_list.appendChild(table_list);

output_list.style.display = "none";

btn.addEventListener("click", function(event) {
    event.preventDefault();

    let input = document.getElementById("taskInput").value;
    if (input.trim() === "") return;

    let list_item = document.createElement("li");
    list_item.textContent = input;

    let edit_btn = document.createElement("button");
    edit_btn.textContent = "Edit";
    edit_btn.className = "Edit-btn";
    edit_btn.addEventListener("click", function() {
        Swal.fire({
            title: 'Edit Mode',
            text: 'Editing item...',
            icon: 'info',
            confirmButtonText: 'OK'
        });
        document.getElementById("taskInput").value = list_item.textContent;
        table_list.removeChild(list_item);
        updateOutputListVisibility();
    });

    let delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";
    delete_btn.className = "Delete-btn";
    delete_btn.addEventListener("click", function() {
        Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to remove this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                tableList.removeChild(listItem);
            }
        });
        table_list.removeChild(list_item);
        updateOutputListVisibility();
    });

    let conform_btn = document.createElement("button");
    conform_btn.textContent = "Conform";
    conform_btn.className = "Conform-btn";
    conform_btn.addEventListener("click", function() {
        list_item.classList.add("conformed");
        Swal.fire({
            title: 'Task Completed',
            text: 'This task has been confirmed.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        delete_btn.style.display= "none";
        edit_btn.style.display= "none";
        conform_btn.style.display= "none";
        updateOutputListVisibility();
    });

    list_item.appendChild(edit_btn);
    list_item.appendChild(delete_btn);
    list_item.appendChild(conform_btn);
    table_list.appendChild(list_item);

    updateOutputListVisibility();

    document.getElementById("taskInput").value = "";
});

function updateOutputListVisibility() {
    if (table_list.children.length > 0) {
        output_list.style.display = "block";
    } else {
        output_list.style.display = "none";
    }
}

let dark_mode = document.getElementById("checkbox");
dark_mode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
