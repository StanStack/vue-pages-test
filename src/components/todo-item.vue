<template>
      <li>
        {{ title }}
        <button v-on:click="$emit('remove')">Remove</button>
      </li>
</template>

<script>
export default {
  name:'todo-item',
  props: ['title']
}
</script>

<style>
  li{
    list-style: none;
  }
</style>
