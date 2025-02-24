import "./bootstrap";
import Todo from "./components/TodoList.vue";
import { createApp } from "vue";

const app = createApp();

app.component("todo", Todo);
app.mount("#app");
