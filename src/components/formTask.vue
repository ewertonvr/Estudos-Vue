<template>
  <form
    @submit.prevent="createTask"
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
  >
    >
    <input
      v-model="title"
      placeholder="Digite sua tarefa"
      type="text"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />

    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  name: "formTask",
  props: {},
  data() {
    return {
      title: "",
    };
  },
  methods: {
    createTask: function () {
      let id = !this.$store.state.tasks.length
        ? "1"
        : (this.$store.state.tasks.length + 1).toString();
      if (this.title) {
        let task = {
          id: id,
          completed: false,
          title: this.title,
        };
        this.$store.dispatch("createTask", task);
        this.title = "";
      }
    },
  },
};
</script>

<style>
</style>