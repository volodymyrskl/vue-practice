<script setup>
import { ref, onMounted } from "vue";
import { useUsersStore } from "../stores/users.store"

const usersStore = useUsersStore();
const users = ref([]);

onMounted(() => {
  usersStore.getUsers().then(() => {
    users.value = usersStore.users;
  });
});

</script>

<template>
    <div class="w-full mt-10 p-10 overflow-y-auto">

        <!-- Users -->
        <div class="w-96 mb-4 border-2 border-slate-800">
            <div class="p-4 border-b-2 border-slate-800">Default User</div>
            <div class="flex items-center p-4">
                <p class="mr-2">Default user: </p>
                <select
                    class="border-2 p-2 border-slate-800 rounded-md"
                >
                    
                    <option
                        v-for="user in users"
                        :key="user.id"
                        :value="user.name"
                    >
                        {{user.name}}
                    </option>
                </select>
            </div>
            <div class="flex justify-end p-4">
                <button class="mr-2 p-2 bg-gray-400 text-white rounded-md">Revert</button>
                <button class="p-2 bg-blue-500 text-white rounded-md">Accept</button>
            </div>
        </div>

        <!-- Settings -->
        <!-- <div class="border-2 w-96 border-slate-800">
            <div class="p-4 border-b-2 border-slate-800">Default User settings</div>
            <div>
                <p>Default user: </p>
                <select>
                    <option
                        v-for="user in users"
                        :selected="user.isDefault"
                    >
                        {{user.name}}
                    </option>
                </select>
            </div>
            <div>
                <button>Revert</button>
                <button>Accept</button>
            </div> 
        </div> -->
    </div>
</template>
