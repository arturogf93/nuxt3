<script setup>
import { useRoute, useRouter } from 'vue-router'
import NotFound from '../components/NotFound.vue'
const route = useRoute()
const router = useRouter()
const { data, error } = await useFetch(`https://api.multycultybeauty.com/open/product/${route.params.uuid}`)	
const product = data.value.data
// if (error.value) {
// 	if (error.value.response.status === 404) {
// 		router.push('/not-found')
// 	}
// }
</script>
<template>
	<div>
		<div v-if="product">
			<Html>
				<Head>
					<Title>{{ product.name }}</Title>
					<Meta name="description" :content="`My page's ${product.name} description`" />
					<Meta property="og:image" :content="product.image" />
				</Head>
			</Html>
			<div class="container text-center">
				<img :src="product.image" width="300" :alt="product.name">
				<div>{{ product.name }}</div>
				<!-- <div>{{ error }}</div> -->
			</div>
		</div>
		
		<!--404-->
		<NotFound v-else />
	</div>
</template>