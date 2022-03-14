<template>
  <div class="flex align-items-center bg-white h-full">
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 w-full">
      <div class="text-center" style="background: radial-gradient(50% 109138% at 50% 50%, rgb(17 80 222 / 10%) 0%, rgba(254, 244, 247, 0) 100%);">
        <span class="bg-white text-blue-500 font-bold text-2xl inline-block px-3">404</span>
      </div>
      <!--<div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>-->
      <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Página no encontrada</div>
      <!--<p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>-->
      <p class="text-700 text-3xl mt-0 mb-6 text-center">Lo sentimos, no pudimos encontrar la página.</p>
      <div class="text-center">
        <button class="p-button p-component p-button-text mr-2" type="button" @click="$router.go(-1)">
          <!---->
          <span class="pi pi-arrow-left p-button-icon p-button-icon-left"></span>
          <!--<span class="p-button-label">Go Back</span>-->
          <span class="p-button-label">Regresar</span>
          <!---->
          <span class="p-ink"></span>
        </button>
        <router-link to="/">
          <button class="p-button p-component" type="button">
            <!---->
            <span class="pi pi-home p-button-icon p-button-icon-left"></span>
            <!--<span class="p-button-label">Go to Dashboard</span>-->
            <span class="p-button-label">Ir al inicio</span>
            <!---->
            <span class="p-ink"></span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "[...all].vue"
}
</script>

<style scoped>

</style>
