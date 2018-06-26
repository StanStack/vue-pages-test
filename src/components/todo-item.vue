<template>
      <li>
        {{ title }}
        <button v-on:click="$emit('remove')">Remove</button>
      </li>
</template>

<script>
export default {
  data:function(){
    return{

    }
  },
  props: ['title']
}
</script>

<style>

</style>
