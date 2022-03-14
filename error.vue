<template>
  <button @click="handleError">Clear errors</button>
	<div>{{ error }}</div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>