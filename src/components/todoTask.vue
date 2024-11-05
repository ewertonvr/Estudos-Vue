<template>
  <div class="space-y-2">
    <div class="bg-gray-300 rounded-sm">
      <div
        class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0"
      >
        <div class="flex items-center justify-center mr-2"></div>
        <button :class="taskCompleted" @click="checkCompleted">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
        <div class="w-full">
          <input
            type="text"
            v-model="title"
            class="rounded-sm placeholder-gray-500 bg-gray-300 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3 '"
            @keyup.enter="attTodo"
          />
        </div>
        <div class="ml-auto flex items-center justify-center">
          <button class="focus:outline-none" @click="deleteTask">
            <svg
              class="ml-3 h-4 w-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7L18.1327 19.1425C18.0579 
20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
3 9 3.44772 9 4V7M4 7H20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoTask",
  props: {
    task: Object,
  },
  data() {
    return {
      localTask: this.task,
      title: this.task.title,
    };
  },
  computed: {
    taskCompleted() {
      return {
        "bg-green-500": this.localTask.completed,
        "bg-gray-500": !this.localTask.completed,
      };
    },
  },
  methods: {
    attTodo() {
      if (!this.title) return;
      this.localTask.title = this.title;
      this.$store.dispatch("attTask", this.localTask);
    },

    deleteTask() {
      this.$store.dispatch("deleteTask", this.localTask);
    },
    checkCompleted() {
      this.localTask.completed = !this.localTask.completed;
      this.attTodo();
    },
  },
};
</script>

<style>
</style>