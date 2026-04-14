function insertSymbol(symbol) {
    const input = document.getElementById("regexInput");
    input.value += symbol;
}

function displayStrings(strings) {
    const div = document.getElementById("stringsList");
    div.innerHTML = strings.map(s => `<div>${s}</div>`).join("");
}

function displayTree(ast) {
    document.getElementById("parseTree").innerText = JSON.stringify(ast, null, 2);
}
