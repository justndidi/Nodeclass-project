async function refreshTokenAtIntervals() {
  let id;
  refreshTokenFunction();
  clearInterval(id);
  id = setInterval(() => {
    //in four minutes request new access token
    refreshTokenFunction();
  }, 4 * 1000 * 60);
}

async function refreshTokenFunction() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    location.href = "./login.html";
    return;
  }
  const url = "https://nodeclass-project.onrender.com/users/token/refresh";
  const payload = {
    refreshToken,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    if(!response.ok){
        if(response.status == 401){
            location.href = "./login.html";
            return;
        }
        //something went wrong
        return;
    }
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
  } catch {
    // something went wrong
  }
}

document.addEventListener("DOMContentLoaded", refreshTokenAtIntervals);
