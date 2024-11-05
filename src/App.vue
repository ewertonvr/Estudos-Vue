<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <formTask />

      <todosTasks />
    </div>
  </div>
</template>

<script>
import formTask from "./components/formTask.vue";
import todosTasks from "./components/todosTasks.vue";

export default {
  name: "App",
  components: {
    formTask,
    todosTasks,
  },
  created() {
    console.log("teste");
    this.$store.dispatch("showTasks");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.conteiner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
