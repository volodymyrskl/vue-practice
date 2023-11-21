<script setup>
import { ref } from "vue";
import { useUsersStore } from "./stores/users.store"

import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Body from "./components/Body.vue";

const usersStore = useUsersStore();
usersStore.getUsers();

const users = usersStore.users;
const defaultUser = ref(usersStore.defaultUser.name);

const selectDefaultUser = (event) => {
  usersStore.selectDefaultUser(event.target.name)
}

</script>

<template>
  <div class="flex w-full h-full">
    <!-- Header -->
    <Header />

    <!-- Sidebar -->
    <Sidebar />

    <!-- Body -->
    <Body />
  </div>
</template>
