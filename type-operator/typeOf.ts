// typeof can create a type from an existing JavaScript value

const settings = {
    darkMode: true,
    language: 'en',
};

type Settings = typeof settings;

const anotherSettings: Settings = {
    darkMode: false,
    language: 'bn',
};

console.log(anotherSettings);
