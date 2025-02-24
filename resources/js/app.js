import "./bootstrap";
import Todo from "./components/TodoList.vue";
import { createApp } from "vue";
import moment from "moment";

const app = createApp();

app.component("todo", Todo);
app.mount("#app");
Vue.filter("formatDate", function (value) {
    if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
    }
});
