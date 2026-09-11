async function app(){
    const loginForm = document.getElementById("login-form");
    const url = "http://localhost:3000/users/signin/";
    const errorDiv = document.getElementById("error")
    
    loginForm.addEventListener("submit", async (ev)=>{
        ev.preventDefault();
        errorDiv.innerHTML = ``;
        const loginId = document.getElementById("login-id").value;
        const password = document.getElementById("login-password").value;

        const payload = {
            usernameOrEmail: loginId,
            password,
        }
       
        

        try{
            const response = await fetch(url, { method: "POST", body: JSON.stringify(payload),
            headers:{"content-type": "application/json"}
        });
        const data = await response.json();
        if(!response.ok){
            errorDiv.innerHTML=`
                <p style="color: red; text-align: center;">${data.detail}</p>
            `;
            return; 
        }
        //store the user tokens
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken)
        location.href = "./index.html";
        }
        catch(error){
            errorDiv.innerHTML=`
                <p style="color: red; text-align: center;">${data.detail}</p>
            `;
        }
       
        
    });

}

document.addEventListener("DOMContentLoaded", app);