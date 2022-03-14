<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data, error } = useAsyncData('todos', async () =>  {
      const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
      return response
})
</script>
<template>
	<div v-if="data">
		<Html>
			<Head>
				<Title>{{ data.name }}</Title>
				<Meta name="description" :content="`My page's ${data.name} description`" />
				<Meta property="og:image" :content="data.sprites.other['official-artwork'].front_default" />
			</Head>
		</Html>
		<div class="container text-center">
			<img :src="data.sprites.other['official-artwork'].front_default" alt="">
			<div>{{ data.name }}</div>
			<!-- <div>{{ error }}</div> -->
		</div>
	</div>
</template>