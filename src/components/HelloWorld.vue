<template>
  <div class="hello">
  </div>
</template>

<script>
import { initApi } from '../connect';

export default {
  name: 'HelloWorld',
  async mounted() {
    const api = await initApi();

    await api.rpc.chain.subscribeNewHeads((lastHeader) => {
      console.log(lastHeader.hash);
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
