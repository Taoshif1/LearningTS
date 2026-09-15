// unknown is safer than any because we must check the type before using it
let input: unknown = 'TypeScript';

if (typeof input === 'string') {
    console.log(input.toUpperCase());
}

// never represents a value that never returns normally
const throwError = (message: string): never => {
    throw new Error(message);
};

// throwError('Something went wrong');
console.log(typeof throwError);
