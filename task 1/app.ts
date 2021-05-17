type Post = {
    id: number;
    userId: number;
    body: string;
    title: string
};

// Getting data from API
const fetchData = async function (): Promise<Post[]> {
    const response: any = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}

// Creating new nodes and rendering data from API
const createHtmlElement = function (items: Post): void {
    const whereToRender = <HTMLElement>document.getElementById("render");
    const createNewNode = <HTMLElement>document.createElement("div");
    createNewNode.setAttribute("class", "render__inner");
    whereToRender.appendChild(createNewNode);
    //Inserting data into newly created nodes
    createNewNode.innerHTML = `<span class="span__id">${items.id}</span>
        <span class="span__user">${items.userId}</span>
        <span class="span__title">${items.title}</span>
        <span class="span__body">${items.body}</span>`;
}

// Iterating through the array of values to get data to render
const renderFunction = async function (): Promise<void> {
    const data = await fetchData();
    for (let items of data) {
        createHtmlElement(items);
    }
}


renderFunction();
