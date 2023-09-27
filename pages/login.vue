<template>
  <div class="container mx-auto px-4 pt-8">
    <h1 class="text-center w-full">Login</h1>
    <FormWrapper
      class="flex flex-col items-center mt-4"
      @submit="onSubmit"
      :button="{ label: 'Login' }"
      :loading="loading"
    >
      <FormInputWrapper for="email" label="Email">
        <InputText type="email" id="email" v-model="email" />
      </FormInputWrapper>
      <FormInputWrapper class="mt-2" for="password" label="Password">
        <InputText type="password" id="password" v-model="password" />
      </FormInputWrapper>
    </FormWrapper>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();

const email = ref("");
const password = ref("");
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;

  auth.login(email.value, password.value);

  loading.value = false;
};
</script>
