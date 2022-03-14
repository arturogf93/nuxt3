<template>
	<div class="min-h-screen h-full flex flex-column surface-ground">
    <div class="surface-overlay shadow py-3 px-6 flex align-items-center justify-content-between relative z-1" style="min-height: 80px">
      <nuxt-link to="/">
        <img src="/images/primevue-logo-blue.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
      </nuxt-link>
			<client-only>
				<a
					class="cursor-pointer block lg:hidden text-700 p-ripple"
				>
					<i class="pi pi-bars text-4xl" />
				</a>
				<div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
					<ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
						<li>
							<nuxt-link to="/ditto">
								<a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer">
									<i class="pi pi-home mr-2" />
									<span>Ditto</span>
								</a>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pokemon/1">
								<a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer">
									<i class="pi pi-calendar mr-2" />
									<span>Pokemon 1</span>
								</a>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pokemon2/5">
								<a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer">
								<i class="pi pi-chart-line mr-2" />
								<span>Pokemon 2</span>
							</a>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/test">
								<a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer">
								<i class="pi pi-chart-line mr-2" />
								<span>404</span>
							</a>
							</nuxt-link>
						</li>
					</ul>
					<ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
						<li class="flex-order-2 lg:flex-order-0">
							<div class="flex px-6 p-3 lg:px-3 lg:py-2">
								<span class="p-input-icon-left w-full">
									<i class="pi pi-search text-gray-400" />
									<InputText type="text" placeholder="Search" class="text-gray-400 w-full" />
								</span>
							</div>
						</li>
						<!-- <li v-if="$route.name !== 'login'">
							<router-link v-if="!auth" to="/login">
								<Button label="Iniciar sesión" />
							</router-link>
							<router-link v-else to="/login" @click="logout()">
								<Button v-tooltip.bottom="'Cerrar sesión'" icon="pi pi-sign-out" class="p-button-rounded p-button-secondary p-button-text" />
							</router-link>
						</li> -->
						<!--<li class="border-top-1 border-gray-800 lg:border-top-none">-->
						<!--  <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer">-->
						<!--    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px">-->
						<!--    <div class="block lg:hidden">-->
						<!--      <div class="text-white font-medium">Josephine Lillard</div>-->
						<!--      <span class="text-gray-400 font-medium text-sm">Marketing Specialist</span>-->
						<!--    </div>-->
						<!--  </a>-->
						<!--</li>-->
					</ul>
				</div>
			</client-only>
    </div>
    <!--<div class="p-5 flex flex-column flex-auto">-->
    <!--  <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">-->
    <!--    <router-view />-->
    <!--  </div>-->
    <!--</div>-->
    <div class="h-full">
      <slot />
    </div>
  </div>
</template>