<template>
	<Html>
		<Head>
			<Title>{{ dynamic }} title</Title>
			<Meta name="description" :content="`My page's ${dynamic} description`" />
			<Link rel="preload" href="/test.txt" as="script" />
			<Style type="text/css" :children="styleString" />
		</Head>
	</Html>
	<div></div>
</template>
<script>
export default {
  data: () => ({ dynamic: 49, styleString: 'body { background-color: green; }' })
}
</script>