

let meds = [];

function addMeds() {

    event.preventDefault();

    let med = {
        "nomeMed": document.getElementById("mname").value,
        "quantMed": document.getElementById("mquant").value,
        "tipoMed": document.getElementById("mtipo").value,
    }

    document.getElementById("mname").value = "";
    document.getElementById("mquant").value = "";
    document.getElementById("mtipo").value = "";

    meds.push(med);

    renderTable();
}

function renderTable() {
    let table = document.getElementById("dataTable");

    table.innerHTML = `<tr>
    <th>ID</th>
    <th>Medicamentos</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>
</tr>`;
    
    for(let i = 0; i < meds.length; i++) {

        table.innerHTML = table.innerHTML + `<td> ${ i }
        <td> ${meds[i].nomeMed} </td>
        <td> ${meds[i].quantMed} </td>
        <td> ${meds[i].tipoMed} </td>
        <td><img src="assets/image/image2.png" width="25px" height="25px" onclick="removeMed(${i})"></td>`
    }
}

function removeMed(index) {
    meds.splice(index, 1);
    renderTable();
}