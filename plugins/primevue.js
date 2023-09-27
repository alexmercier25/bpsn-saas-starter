import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";
import { usePassThrough } from "primevue/passthrough";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";

const MyDesignSystem = usePassThrough(
  Tailwind,
  {
    menubar: {
      class: "rounded-none",
    },
    inputtext: {
      root: {
        class: "w-full",
      },
    },
  },
  {
    mergeSections: true,
    mergeProps: true,
  }
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
    ripple: true,
    pt: MyDesignSystem,
  });
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("TieredMenu", TieredMenu);
});
