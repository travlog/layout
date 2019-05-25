<template>
  <div class="selector-wrapper">
    <label for="" base-input-label>{{ label }}</label>
    <select name="selector" id="selector" class="selector">
      <option :value="option" v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    options: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.selector-wrapper {
  width: 100%;
}

.selector {
  width: 100%;
  background-color: #fff;
}

.selector-wrapper .selector {
  margin-top: 1px;
  background-color: #fff;
  border-color: #c8c8c8;
  outline: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  border-style: solid;
  border-radius: 3px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
