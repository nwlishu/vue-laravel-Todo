<template>
    <div class="flex justify-center p-16">
        <form @submit.prevent="addTodo">
            <input
                class="min-w-0 p-2 text-base text-gray-900 border rounded w-96 focus:outline-none sm:text-sm/6"
                v-model="newTask"
                placeholder="Enter a new task..."
                required
            />
            <button
                type="submit"
                class="p-2 mx-4 text-white bg-green-700 rounded"
            >
                Add
            </button>
        </form>
    </div>
    <div class="flex justify-center">
        <div class="w-full mt-4">
            <div
                v-for="(todo, index) in todos"
                :key="index"
                class="flex justify-between w-full p-2 mt-2 border rounded"
            >
                <div>
                    <p>
                        {{ todo.task }}
                    </p>
                    <p class="text-[#6C7780]">Created</p>
                </div>
                <div>
                    <div class="flex justify-between gap-8">
                        <button
                            class="text-[#16803C] flex justify-between"
                            @click="showModal = true"
                        >
                            <img
                                src="/public/lucide--edit.svg"
                                alt=""
                                width="24px"
                                height="24px"
                            />Edit
                        </button>
                        <Modal v-if="showModal" @close="showModal = false">
                            <p>Are you sure?</p>
                        </Modal>
                        <button
                            class="text-[#F60C1F] flex justify-between"
                            @click="showModal = true"
                        >
                            <img
                                src="/public/material-symbols--delete-outline.svg"
                                width="24px"
                                height="24px"
                            />Delete
                        </button>
                    </div>
                    <div class="text-[#6C7780]">
                        {{
                            new Date(todo.created_at).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )
                        }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Modal from "./ModalDelete.vue";

export default {
    components: {
        Modal,
    },
    data() {
        return {
            newTask: "",
            todos: [],
            showModal: false,
        };
    },
    mounted() {
        data = this.fetchTasks(); // Load tasks from DB when the component is mounted
        console.log(data);
    },
    methods: {
        async addTodo() {
            if (this.newTask.trim() === "") return;

            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/tasks",
                    {
                        task: this.newTask,
                    }
                );

                this.todos.push(response.data); // Add the new task to the list
                this.newTask = "";
            } catch (error) {
                console.error("Error adding task:", error);
            }
        },
        async fetchTasks() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/tasks");
                this.todos = response.data; // Load tasks from backend
                console.log(this.todos);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        },
        handleEdit() {
            console.log("Edit!!!!");
        },
        handleDelete() {
            console.log("Delete!!!!");
        },
    },
};
</script>
