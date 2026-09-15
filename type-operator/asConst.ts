// as const keeps literal values readonly and as narrow as possible

const roles = ['admin', 'editor', 'user'] as const;

type Role = typeof roles[number];

const currentRole: Role = 'admin';
console.log(currentRole);
