async function addFruit() {
  const form = document.getElementById("fruit-form");
  const url = "http://localhost:3000/fruits/";
  const errorDiv = document.getElementById("error");
  
  form.addEventListener("submit", async (e) => {
    errorDiv.innerHTML = "";
    e.preventDefault();
   
    const name = document.getElementById("fruit-name").value;
    const desc = document.getElementById("fruit-desc").value;
    const payload = {name: name, description: desc}
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {"content-type": "application/json"}
      });
      const data = await response.json();
      if(!response.ok){
        errorDiv.innerHTML = `<p style="text-align: center; color: red;">${data.error}</p>`;
        return;
      }
      console.log(data);
     // means it was successful
     form.reset();
     location.href = "./index.html"; 
    } catch (e) {
      errorDiv.innerHTML = `<p style="text-align: center; color: red;">Something went wrong!</p>`;
      console.log("something went wrong");
    }
  });
}
document.addEventListener("DOMContentLoaded", addFruit);
