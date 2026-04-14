function generateFromAST(ast, maxLength = 5) {
    let results = new Set();

    function generate(node, str) {
        if (str.length > maxLength) return;

        switch (node.type) {
            case 'literal':
                results.add(str + node.value);
                break;

            case 'concat':
                generate(node.left, str);
                generate(node.right, str);
                break;

            case 'union':
                generate(node.left, str);
                generate(node.right, str);
                break;
        }
    }

    generate(ast, '');
    return Array.from(results);
}
