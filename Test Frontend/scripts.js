async function fetchFruits() {
  const url = "https://nodeclass-project.onrender.com/fruits/";
  try {
    
    const response = await fetch(url);
    const data = await response.json();

    const fruits = data.fruits;
    // console.log(fruits);
    const tbody = document.getElementById("table-body");
    // console.log(tbody);
    tbody.innerHTML = `` ;

    fruits.forEach((fruit) => {
      const tr = document.createElement("tr");
    
      tr.innerHTML = `<td><span class="fruit-name">${fruit.name}</span></td>
              <td>
                <span class="fruit-desc"
                  >${fruit.description}</span
                >
              </td>
              <td class="col-actions">
                <div class="actions-group">
                  <a href="edit.html?id=${fruit._id}" class="btn-text edit">Edit</a>
                  <a href="delete.html?id=${fruit._id}" class="btn-text delete"
                    >Delete</a
                  >
                </div>
              </td>`;
      tbody.appendChild(tr);
    });
  } catch (e) {
    // show error on the page
    const tbody = document.getElementById("table-body");

    tbody.innerHTML = `
        <tr>
            <td style="color: Red;">
            <span>Something Went Wrong!!</span>
            </td>
        </tr>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchFruits();
});
