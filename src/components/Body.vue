<script setup>
import { useUsersStore } from "../stores/users.store"

const usersStore = useUsersStore();
</script>

<template>
    <div class="w-full mt-10 p-10 overflow-y-auto">

        <!-- Users -->
        <div class="w-96 mb-4 border-2 border-slate-800">
            <div class="p-4 border-b-2 border-slate-800">Default User settings</div>
            <div class="p-4">
                <p>Default user: </p>
                <select
                    v-model="defaultUser"
                    @change="selectDefaultUser"
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
            <div>
                <button>Revert</button>
                <button>Accept</button>
            </div>
        </div>

        <!-- Settings -->
        <div class="border-2 w-96 border-slate-800">
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
        </div>
    </div>
</template>
