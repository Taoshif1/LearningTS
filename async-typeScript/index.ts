// Typed Promise and async/await

type User = {
    id: number;
    name: string;
    email: string;
};

const getLocalUser = async (): Promise<User> => {
    return Promise.resolve({
        id: 1,
        name: 'Gazi Taoshif',
        email: 'taoshif@example.com',
    });
};

// Example of a typed API request
const fetchUser = async (id: number): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return (await response.json()) as User;
};

const run = async (): Promise<void> => {
    try {
        const user = await getLocalUser();
        console.log(user);

        // Uncomment when you want to test a real API request
        // console.log(await fetchUser(1));
        console.log(typeof fetchUser);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

run();
