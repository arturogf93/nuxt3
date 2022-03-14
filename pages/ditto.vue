<script setup>
const { data } = await useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
</script>
<template>
	<div>
		<Html>
			<Head>
				<Title>{{ data.name }}</Title>
				<Meta name="description" :content="`My page's ${data.name} description`" />
				<Meta property="og:image" :content="data.sprites.other['official-artwork'].front_default" />
			</Head>
		</Html>
		pokemon:
		<code>
			<!-- {{ data }} -->
		</code>
	</div>
</template>