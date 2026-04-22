// Class Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// ==============================
// Function cekKurungSeimbang
// ==============================
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let i = 0; i < ekspresi.length; i++) {
        let char = ekspresi[i];

        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

// ==============================
// Test Case (Minimal 5)
// ==============================
const testCases = [
    "(2 + 3) * (4 - 1)",
    "((a + b)",
    ")(",
    "((()))",
    "(a + b) * ((c - d))"
];

// ==============================
// Output
// ==============================
testCases.forEach(exp => {
    console.log(`'${exp}' → Seimbang: ${cekKurungSeimbang(exp)}`);
});