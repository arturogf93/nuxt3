import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";
import StyleClass from "primevue/styleclass";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue);
    nuxtApp.vueApp.component('Button', Button);
		nuxtApp.vueApp.component('InputText', InputText);
		nuxtApp.vueApp.component('Menubar', Menubar);
		nuxtApp.vueApp.directive('StyleClass', StyleClass);
    //other components that you need
});