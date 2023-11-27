import { Toaster, toast } from "vue-sonner";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Toaster");

  return {
    provide: {
      toast,
    },
  };
});
