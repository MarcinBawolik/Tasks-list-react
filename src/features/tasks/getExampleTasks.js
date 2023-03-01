export const getExampleTasks = async () => {
    const response = await fetch("/Tasks-list-react/exampleTasks.json");

    if(!response.ok) {
        new Error(response.statusText);       
    }

    return await response.json();
};
