<template>
  <div class="base-input-wrapper">
    <label for="" base-input-label>{{ label }}</label>
    <input
      class="base-input"
      v-model="value"
      :type="type"
      :autofocus="autofocus"
      autocomplete="off"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    defaultValue: {
      type: [String, Date],
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    autofocus: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      value: ''
    }
  },
  created () {
    this.value = this.defaultValue
  }
}
</script>

<style lang="scss">
.base-input-wrapper {
  width: 100%;;
}

.base-input-label {
  font-size: 1rem;
}

.base-input {
  margin-top: 1px;
  background-color: #fff;
  border-color: #c8c8c8;
  outline: none;
  padding-top: .5rem;
  padding-bottom: .5rem;
  font-size: 1.2rem;
  border-style: solid;
  border-radius: 3px;
  padding-left: .5rem;
  padding-right: .5rem;
}

.base-input:focus {
  border-color: #ff96a0;
}
</style>
