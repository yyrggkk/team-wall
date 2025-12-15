fetch('members.json')
.then(response => response.json())
.then(membres => {
    const divNoms = document.getElementById("noms");
    divNoms.innerHTML = membres.map(m => <div class="nom">${m.prenom} ${m.nom} Role: ${m.role}</div>).join("");
})
.catch(error => {
    console.error("Erreur lors du chargement des membres:", error);
});