// Equality narrowing

const compareValues = (value: string | number, text: string): void => {
    if (value === text) {
        // Here TypeScript knows value is a string
        console.log(value.toUpperCase());
    } else {
        console.log('Values are different');
    }
};

compareValues('typescript', 'typescript');
