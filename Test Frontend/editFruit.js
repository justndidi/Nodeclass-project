function getFruitUrl() {
  const params = new URLSearchParams(window.location.search);
  const fruitId = params.get("id");
  // return `http://localhost:3000/fruits/${fruitId}/`;
  return `https://nodeclass-project.onrender.com/fruits/${fruitId}/`;
}

async function fetchCurrentFruit() {
  const url = getFruitUrl();
  const formDiv = document.querySelector("div.form-card");

  try {
    const response = await fetch(url);
    const data = await response.json();
    const nameInput = document.getElementById("fruit-name");
    const descriptionInput = document.getElementById("fruit-desc");
    if (!response.ok) {
      if (response.status == 404) {
        formDiv.innerHTML = `<p style="text-align: center;">Fruit not Found</p>`;
        return;
      } else {
        formDiv.innerHTML = `<p style="text-align: center;">An error occured</p>`;
        return;
      }
    }
    nameInput.value = data.fruit.name;
    descriptionInput.value = data.fruit.description;
  } catch {
    formDiv.innerHTML = `<p style="text-align: center;">Something went wrong</p>`;
  }
}

async function updateFruit() {
  const url = getFruitUrl();
  const form = document.getElementById("fruit-form");
  if (!form) {
    return;
  }
  const errorDiv = document.getElementById("fruit-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("fruit-name").value;
    const description = document.getElementById("fruit-desc").value;

    const payload = {
      name,
      description,
    };

    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    try {
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status == 401) {
          location.href = "./login.html";
          return;
        }

        errorDiv.innerHTML = `<p style="text-align: center; color: red;">${data.error}</p>`;
        return;
      }
      if(response.ok){
        location.href = "./index.html";
      }
    } catch {
      errorDiv.innerHTML = `<p style="text-align: center; color: red;">Something went wrong</p>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await fetchCurrentFruit();
  await updateFruit();
});
