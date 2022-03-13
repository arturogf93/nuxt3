<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>
<template>
	<Html>
		<Head>
			<Title>{{ data.name }}</Title>
			<Meta name="description" :content="`My page's ${data.name} description`" />
			<Meta property="og:image" :content="data.sprites.other['official-artwork'].front_default" />
		</Head>
	</Html>
	<div>
		pokemon:
		<code>
			{{ data }}
		</code>
	</div>
</template>