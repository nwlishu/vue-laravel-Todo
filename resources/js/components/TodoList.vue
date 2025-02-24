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
    <ul class="mt-4 w-96">
        <li
            v-for="(todo, index) in todos"
            :key="index"
            class="flex justify-between p-2 border-b"
        >
            {{ todo.task }}
        </li>
    </ul>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            newTask: "",
            todos: [],
        };
    },
    mounted() {
        this.fetchTasks(); // Load tasks from DB when the component is mounted
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
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        },
    },
};
</script>
