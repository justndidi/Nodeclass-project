async function app(){
    const form = document.getElementById("form");
    const url = "http://localhost:3000/users/signup/";
    const errorDiv = document.getElementById("error");

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const payload = {
            username, 
            email,
            password,
        }
        try{
            const response = await fetch(url, { method: "POST", body: JSON.stringify(payload),
            headers:{"content-type": "application/json"}
        });
        const data = await response.json();
        console.log(data);

        if(!response.ok){
            errorDiv.innerHTML=`
                <p style="color: red; text-align: center;">${data.detail}</p>
            `;
            return; 
        }
        location.href = "./index.html";
        }
        catch{
            errorDiv.innerHTML=`
                <p style="color: red; text-align: center;">${data.detail}</p>
            `;
        }
       
        
    });
}


document.addEventListener("DOMContentLoaded", app);