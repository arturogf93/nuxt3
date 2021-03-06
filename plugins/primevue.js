import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Carousel from "primevue/carousel";
import Card from "primevue/card";

import StyleClass from 'primevue/styleclass';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Button', Button);
		nuxtApp.vueApp.component('InputText', InputText);
		nuxtApp.vueApp.component('Menu', Menu);
		nuxtApp.vueApp.component('Menubar', Menubar);
		nuxtApp.vueApp.component('Carousel', Carousel);
		nuxtApp.vueApp.component('Card', Card);
		
		nuxtApp.vueApp.directive('StyleClass', StyleClass);
    //other components that you need
});