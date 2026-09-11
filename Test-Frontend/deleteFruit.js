function getFruitUrl() {
    const params = new URLSearchParams(window.location.search);
    const fruitId = params.get("id");

    // return `http://localhost:3000/fruits/${fruitId}/`;
    return `https://nodeclass-project.onrender.com/fruits/${fruitId}`;
}


async function fetchCurrentFruit() {
    const url = getFruitUrl();
    const formDiv = document.querySelector("div.form-card");
    const fruitName = document.getElementById("fruit-name");
    const description = document.getElementById("fruit-desc");

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            if (response.status === 404) {
                formDiv.innerHTML = `<p style="text-align: center;">Fruit not found</p>`;
            } else {
                formDiv.innerHTML = `<p style="text-align: center;">An error occurred</p>`;
            }
            return;
        }
        fruitName.textContent = data.fruit.name;
        description.textContent = data.fruit.description;

    } catch {
        formDiv.innerHTML = `<p style="text-align: center;">Something went wrong</p>`;
    }
}


async function deleteFruit() {
    const form = document.getElementById("form");
    if (!form) {
        return;
    }
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const confirmed = confirm("Are you sure you want to delete this fruit?");
        if (!confirmed) {
            return;
        }
        const url = getFruitUrl();
        try {
            const response = await fetch(url, {
                method: "DELETE"
            });

            if (!response.ok) {
                const data = await response.json();
                alert(data.error);
                return;
            }
            alert("Fruit deleted successfully");
            location.href = "./index.html";
            return;
        } catch {
            alert("Something went wrong while deleting the fruit.");
        }
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    await fetchCurrentFruit();
    await deleteFruit();
});