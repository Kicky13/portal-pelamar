<template>
  <LayoutProfileAside :titlePage="title">

    dasdasdad
  </LayoutProfileAside>
</template>

<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";

export default {
  name: "BackOfficeDashboard",
  data() {
    return {
      title:'Dashboard'
    }
  },
  components:{
    LayoutProfileAside,
  }
};
</script>
