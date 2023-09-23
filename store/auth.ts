export const useAuth = defineStore("auth", () => {
  const currentUser = ref();
  function logout() {
    currentUser.value = null;
    localStorage.removeItem("currentUser");
  }
  function login() {
    console.log("login");
    currentUser.value = { name: "John Doe" };

    // persist the user
    localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
  }

  return { currentUser, login, logout };
});
