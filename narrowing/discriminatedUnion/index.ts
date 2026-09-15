// Discriminated union uses a common literal property to narrow a type

type Square = {
    kind: 'square';
    size: number;
};

type Circle = {
    kind: 'circle';
    radius: number;
};

type Shape = Square | Circle;

const getArea = (shape: Shape): number => {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        default: {
            const neverShape: never = shape;
            return neverShape;
        }
    }
};

console.log(getArea({ kind: 'square', size: 5 }));
