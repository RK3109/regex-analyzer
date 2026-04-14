function generateStrings() {
    const regex = document.getElementById("regexInput").value;

    try {
        const parser = new RegexParser(regex);
        const ast = parser.parse();

        const strings = generateFromAST(ast, 6);

        displayStrings(strings);
        displayTree(ast);
    } catch (e) {
        alert(e.message);
    }
}

function checkEquivalence() {
    const r1 = document.getElementById("equivInput1").value;
    const r2 = document.getElementById("equivInput2").value;

    alert("Basic equivalence check not fully implemented yet");
}
