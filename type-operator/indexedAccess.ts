// Indexed access type reads a property type from another type

type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductName = Product['name'];
type ProductValue = Product[keyof Product];

const productName: ProductName = 'Keyboard';
const productValue: ProductValue = 1200;

console.log(productName, productValue);
