// Function overloads allow multiple valid call signatures

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}

console.log(combine(10, 20));
console.log(combine('Type', 'Script'));
