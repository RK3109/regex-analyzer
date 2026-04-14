class RegexParser {
    constructor(pattern) {
        this.pattern = pattern.replace(/\s/g, '');
        this.pos = 0;
    }

    parse() {
        const ast = this.parseUnion();
        if (this.pos < this.pattern.length) {
            throw new Error("Unexpected character");
        }
        return ast;
    }

    parseUnion() {
        let left = this.parseConcat();
        while (this.pattern[this.pos] === '|') {
            this.pos++;
            const right = this.parseConcat();
            left = { type: 'union', left, right };
        }
        return left;
    }

    parseConcat() {
        let nodes = [];
        while (this.pos < this.pattern.length &&
               this.pattern[this.pos] !== ')' &&
               this.pattern[this.pos] !== '|') {
            nodes.push(this.parseAtom());
        }
        return nodes.length === 1
            ? nodes[0]
            : nodes.reduce((a, b) => ({ type: 'concat', left: a, right: b }));
    }

    parseAtom() {
        const ch = this.pattern[this.pos++];

        if (ch === '(') {
            const expr = this.parseUnion();
            this.pos++;
            return expr;
        }

        return { type: 'literal', value: ch };
    }
}

