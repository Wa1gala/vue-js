import http from "@/assets/netClient/config.js";

export async function doRegister(login, password, email) {
  try {
    const response = await http.post("/auth/registration", {
      login,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function doLogin(login, password) {
  try {
    const response = await http.post("/auth/login", {
      login,
      password,
    });
    const { Token } = response.data;
    localStorage.Token = Token;
    return Token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
