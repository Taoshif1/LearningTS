"use strict";
// Discriminated union uses a common literal property to narrow a type
const getArea = (shape) => {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        default: {
            const neverShape = shape;
            return neverShape;
        }
    }
};
console.log(getArea({ kind: 'square', size: 5 }));
