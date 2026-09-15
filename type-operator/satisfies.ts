// satisfies checks a value against a type without losing useful inference

type Config = {
    theme: 'light' | 'dark';
    fontSize: number;
};

const config = {
    theme: 'dark',
    fontSize: 16,
} satisfies Config;

console.log(config.theme);
