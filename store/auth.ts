export const useAuth = defineStore("auth", () => {
  const currentUser = ref();
  function logout() {
    currentUser.value = null;
    localStorage.removeItem("currentUser");
  }
  async function login(email: string, password: string) {
    await useFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // currentUser.value = { name: "John Doe" };

    // persist the user
    // localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
  }

  return { currentUser, login, logout };
});
