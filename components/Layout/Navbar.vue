<template>
  <Menubar class="rounded-none justify-between" :model="menuBarItems">
    <template #start>
      <NuxtLink to="/">
        <img alt="logo" src="~assets/images/logo.svg" width="40" class="mr-2" />
      </NuxtLink>
    </template>
    <template #end>
      <NuxtLink v-if="!auth.currentUser" to="/login">
        <Button
          label="Login"
          icon="pi pi-sign-in"
          class="p-button-rounded p-button-secondary"
        />
      </NuxtLink>
      <div v-else>
        <Avatar
          class="cursor-pointer select-none"
          @click="toggleUserMenu"
          aria-haspopup="true"
          aria-controls="overlay_user_menu"
          :label="auth.currentUser.name.substring(0, 1)"
          size="large"
          :pt="{
            label: 'text-gray-400',
          }"
        />
        <TieredMenu
          ref="userMenu"
          id="overlay_user_menu"
          :model="userMenuItems"
          popup
        />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const auth = useAuth();

// Simple SAAS menu bar
const menuBarItems = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "About",
    icon: "pi pi-fw pi-info-circle",
    items: [
      {
        label: "Privacy Policy",
        icon: "pi pi-fw pi-lock",
        to: "/about/privacy",
      },
      {
        label: "Terms and Conditions",
        icon: "pi pi-fw pi-file",
        to: "/about/terms",
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-fw pi-envelope",
    to: "/contact",
  },
];

// User menu
const userMenuItems = ref([
  {
    label: "Profile",
    icon: "pi pi-fw pi-user",
    to: "/profile",
  },
  {
    label: "Logout",
    icon: "pi pi-fw pi-sign-out",
    command: () => {
      auth.logout();
    },
  },
]);

const userMenu = ref();

// User menu toggle
const toggleUserMenu = () => {
  userMenu.value.toggle(event);
};

onMounted(() => {
  const localUser = localStorage.getItem("currentUser");
  if (localUser) {
    auth.login();
  }
});
</script>
