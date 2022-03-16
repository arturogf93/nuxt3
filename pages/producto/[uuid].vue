<script setup>
import { useRoute } from 'vue-router'
import NotFound from '../components/NotFound.vue'
const route = useRoute()
const { data, error } = await useFetch(`https://store-api.regiosoft.mx/open/product/${route.params.uuid}`)
const product = data.value.data
// if (error.value) {
// 	if (error.value.response.status === 404) {
// 		router.push('/not-found')
// 	}
// }
async function getItem() {
  const response = await $fetch(`https://store-api.regiosoft.mx/open/product/${route.params.uuid}`)
  console.log(response)
}
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
      <div class="text-center my-5">
        <Button label="GET" @click="getItem()"></Button>
      </div>
		</div>

		<!--404-->
		<NotFound v-else />
	</div>
</template>
