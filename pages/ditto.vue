<script setup>
const { data } = await useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
</script>
<template>
	<Html>
		<Head>
			<Title>{{ data.name }}</Title>
			<Meta name="description" :content="`My page's ${data.name} description`" />
			<Link rel="preload" href="/test.txt" as="script" />
			<Style type="text/css" :children="styleString" />
		</Head>
	</Html>
	<div>
		pokemon:
		<code>
			{{ data }}
		</code>
	</div>
</template>