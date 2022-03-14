<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const { data, error } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)	
onMounted(() => {
  if (error.value) {
		if (error.value.response.status === 404) {
			router.push('/not-found')
		}
	}
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