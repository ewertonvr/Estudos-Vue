import axios from "axios";
import { createStore } from "vuex";
axios;
export default createStore({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      console.log(state.tasks);
    },
    attTask(state, { title, id }) {
      const taskFound = state.tasks.find((task) => task.id === id);
      taskFound.title = title;
      console.log(state.tasks);
    },
    deleteTask(state, { id }) {
      const index = state.tasks.find((task) => task.id === id);
      state.tasks.splice(index, 1);
      console.log(state.tasks);
    },
    storeTasks(state, payload) {
      state.tasks = payload.data;
    },
  },

  actions: {
    createTask({ commit }, task) {
      axios
        .post("http://localhost:3000/tasks", task)
        .then(() => {
          commit("addTask", task);
        })
        .catch(console.log("deu certooo"));
    },
    attTask(commit, task) {
      axios
        .put(`http://localhost:3000/tasks/${task.id}`, task)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => console.log(e));
    },
    deleteTask({ commit }, task) {
      axios.delete(`http://localhost:3000/tasks/${task.id}`).then(() => {
        commit("deleteTask", task);
      });
    },
    showTasks({ commit }) {
      axios.get("http://localhost:3000/tasks").then((response) => {
        commit("storeTasks", response);
      });
    },
  },
  modules: {},
});
