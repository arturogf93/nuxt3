<template>
  <div>
    <div class="grid grid-nogutter surface-section text-800">
      <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
        <section>
          <span class="block text-6xl font-bold mb-1">Lorem ipsum dolor</span>
          <div class="text-6xl text-primary font-bold mb-3">sit amet consectetur</div>
          <p
            class="mt-0 mb-4 text-700 line-height-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
          <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden">
        <img
          src="/images/hero-3.jpg"
          alt="Image"
          class="md:ml-auto block md:h-full"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
        />
      </div>
    </div>

    <div class="container">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        class="custom-carousel"
        :circular="true"
        :autoplayInterval="30000"
      >
        <!-- <template #header>
          <h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>
        </template> -->
        <template #item="slotProps">
					<div class="product-card-container mx-3 mt-5">
						<nuxt-link :to="`/producto/${slotProps.data.uuid}`">
							<Card>
								<template #content>
									<div class="product-item text-center">
										<div class="product-item-content">
											<div class="">
												<img
													:src="slotProps.data.image"
													:alt="slotProps.data.name"
													width="200"
													height="150"
													class="product-image"
													style="object-fit: contain"
												/>
											</div>
											<div>
												<p class="mt-2 mb-1">{{ slotProps.data.name }}</p>
												<h6 class="my-0 text-lg">${{ slotProps.data.price }}</h6>
												<!-- <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">
													{{ slotProps.data.inventoryStatus }}
												</span> -->
												<div class="mt-3">
													<Button label="Agregar"></Button>
												</div>
											</div>
										</div>
									</div>
								</template>
							</Card>
						</nuxt-link>
					</div>
        </template>
      </Carousel>
    </div>

    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="flex flex-wrap align-items-center">
        <div class="w-full lg:w-6 lg:pr-6">
          <div class="text-900 font-bold text-2xl mb-3">
            Get our weekly updates and
            <span class="text-blue-500">free stuff!</span>
          </div>
          <div
            class="text-600 text-xl line-height-3 lg:mb-0 mb-4"
            style="max-width: 450px"
          >Join our community to get weekly updates and unique gifts every friday.</div>
        </div>

        <div class="w-full lg:w-6">
          <div
            class="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end"
          >
            <InputText placeholder="Enter your email" class="p-3 mr-3 border-400 mb-3 md:mb-0" />
            <div>
              <Button label="Subscribe" class="py-3 font-bold"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
	const { data } = await useFetch(`https://store-api.regiosoft.mx/open/products?limit=8&offset=0`)
	const products = data.value.data.items
  const products2 = [
		{ "id": "1000", "code": "f230fh0g3", "name": "Bambu Watch", "description": "Product Description", "image": "bamboo-watch.jpg", "price": 65, "category": "Accessories", "quantity": 24, "inventoryStatus": "INSTOCK", "rating": 5 },
		{ "id": "1001", "code": "nvklal433", "name": "Black Watch", "description": "Product Description", "image": "black-watch.jpg", "price": 72, "category": "Accessories", "quantity": 61, "inventoryStatus": "INSTOCK", "rating": 4 },
		{ "id": "1002", "code": "zz21cz3c1", "name": "Blue Band", "description": "Product Description", "image": "blue-band.jpg", "price": 79, "category": "Fitness", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 3 },
		{ "id": "1003", "code": "244wgerg2", "name": "Blue T-Shirt", "description": "Product Description", "image": "blue-t-shirt.jpg", "price": 29, "category": "Clothing", "quantity": 25, "inventoryStatus": "INSTOCK", "rating": 5 },
		{ "id": "1004", "code": "h456wer53", "name": "Bracelet", "description": "Product Description", "image": "bracelet.jpg", "price": 15, "category": "Accessories", "quantity": 73, "inventoryStatus": "INSTOCK", "rating": 4 },
		{ "id": "1005", "code": "av2231fwg", "name": "Brown Purse", "description": "Product Description", "image": "brown-purse.jpg", "price": 120, "category": "Accessories", "quantity": 0, "inventoryStatus": "OUTOFSTOCK", "rating": 4 },
		{ "id": "1006", "code": "bib36pfvm", "name": "Chakra Bracelet", "description": "Product Description", "image": "chakra-bracelet.jpg", "price": 32, "category": "Accessories", "quantity": 5, "inventoryStatus": "LOWSTOCK", "rating": 3 },
		{ "id": "1007", "code": "mbvjkgip5", "name": "Galaxy Earrings", "description": "Product Description", "image": "galaxy-earrings.jpg", "price": 34, "category": "Accessories", "quantity": 23, "inventoryStatus": "INSTOCK", "rating": 5 },
		{ "id": "1008", "code": "vbb124btr", "name": "Game Controller", "description": "Product Description", "image": "game-controller.jpg", "price": 99, "category": "Electronics", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 4 },
		{ "id": "1009", "code": "cm230f032", "name": "Gaming Set", "description": "Product Description", "image": "gaming-set.jpg", "price": 299, "category": "Electronics", "quantity": 63, "inventoryStatus": "INSTOCK", "rating": 3 }
  ]
  const responsiveOptions = [
		{
      breakpoint: '1280px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '900px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ]
</script>

<style scoped>
</style>
