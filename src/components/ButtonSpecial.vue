<template>
  <button>
    <span id="icon">
      <slot name="icon"></slot>
    </span>
    <slot>I am Button</slot>
  </button>
</template>

<style scoped>
  button {
    margin-left: 5rem;
    /* display: flex;
    position: relative; */
  }
</style>
