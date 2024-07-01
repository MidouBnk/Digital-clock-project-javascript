function add() {
    var input = document.getElementById("input").value;
    if (input.trim() === "") {
        alert("Veuillez entrer un élément.");
        return;
    }

    var li = document.createElement("li");
    var text = document.createTextNode(input);
    li.appendChild(text);

    // Ajouter un bouton de suppression
    var removeButton = document.createElement("button");
    removeButton.textContent = "Supprimer";
    removeButton.style.marginLeft = "10px";
    removeButton.onclick = function() {
        var ul = document.getElementById("myList");
        ul.removeChild(li);
        saveList(); // Sauvegarder la liste mise à jour dans le localStorage
    };

    li.appendChild(removeButton);
    document.getElementById("myList").appendChild(li);

    // Appliquer des styles
    li.style.background = "green";
    li.style.color = "white";
    li.style.padding = "5px";
    li.style.marginTop = "5px";
    li.style.listStyleType = "none";

    // Réinitialiser le champ de saisie
    document.getElementById("input").value = "";

    // Sauvegarder la liste mise à jour dans le localStorage
    saveList();
}

function saveList() {
    var items = [];
    var listItems = document.querySelectorAll('#myList li');
    listItems.forEach(item => {
        items.push(item.firstChild.textContent);
    });
    localStorage.setItem('myList', JSON.stringify(items));
}

function loadList() {
    var savedItems = localStorage.getItem('myList');
    if (savedItems) {
        var items = JSON.parse(savedItems);
        items.forEach(item => {
            var li = document.createElement("li");
            var text = document.createTextNode(item);
            li.appendChild(text);

            // Ajouter un bouton de suppression
            var removeButton = document.createElement("button");
            removeButton.textContent = "Supprimer";
            removeButton.style.marginLeft = "10px";
            removeButton.onclick = function() {
                var ul = document.getElementById("myList");
                ul.removeChild(li);
                saveList(); // Sauvegarder la liste mise à jour dans le localStorage
            };

            li.appendChild(removeButton);
            document.getElementById("myList").appendChild(li);

            // Appliquer des styles
            li.style.background = "green";
            li.style.color = "white";
            li.style.padding = "5px";
            li.style.marginTop = "5px";
            li.style.listStyleType = "none";
        });
    }
}

// Charger la liste au chargement de la page
window.onload = function() {
    loadList();
};
