<template>
	<Html>
		<Head>
			<Title>{{ pokemon.name }}</Title>
			<Meta name="description" :content="`My page's ${dynamic} description`" />
			<Link rel="preload" href="/test.txt" as="script" />
			<Style type="text/css" :children="styleString" />
		</Head>
	</Html>
	<div>
		<code>
			{{ pokemon }}
		</code>
		<div>
			{{ errorMessage }}
		</div>
	</div>
</template>
<script>
export default {
  data: () => ({
		dynamic: 49,
		styleString: 'body { background-color: green; }',
		pokemon: {},
		errorMessage: ''
	}),
	created() {
		// GET request using fetch with error handling
		fetch("https://pokeapi.co/api/v2/pokemon/ditto")
			.then(async response => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error = (data && data.message) || response.statusText;
					return Promise.reject(error);
				}

				this.pokemon = data;
			})
			.catch(error => {
				this.errorMessage = error;
				console.error("There was an error!", error);
			});
	},
	methods: {}
}
</script>