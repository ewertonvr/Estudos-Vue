<template>
  <todoTask
    v-for="taskData in $store.state.tasks"
    :key="taskData.id"
    :task="taskData"
  >
  </todoTask>
</template>

<script>
import todoTask from "./todoTask.vue";

export default {
  name: "todosTasks",
  components: { todoTask },
};
</script>

<style>
</style>