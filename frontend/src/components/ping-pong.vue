<template>
  <b-row>
    <b-col>
      <b-button variant="primary" @click="handlePing">
        Ping
      </b-button>
      <p  v-if="serverResponse" class="mt-2" :class="{ 'text-danger': this.serverResponse === 'error', 'text-success': !!serverResponse }">
        {{ serverResponse }}
      </p>
    </b-col>
  </b-row>
</template>

<script>
import { getMainApi } from "../fetch";

export default {
  name: 'PingPong',

  data() {
    return {
      serverResponse: ""
    }
  },

  methods: {
    async handlePing() {
      try {
        this.serverResponse = "loading...";
        const { message } =  await getMainApi("/ping");
        this.serverResponse = `Response from the server: ${message}`
      } catch (e) {
        this.serverResponse = "error";
        console.error(e);
      }
    }
  }
}
</script>

<style scoped>
</style>
