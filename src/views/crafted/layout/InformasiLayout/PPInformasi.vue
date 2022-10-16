<template>
  <div class="header-profile">
    <div class="row">
      <div class="col-sm-6">
        <label for="" class="title"> {{ titlePage }} </label>
        <div class="breadcrumb">
          <div>
            <router-link to="#">Home</router-link>
            <span class="icon">></span>
            <span class="active">{{ titlePage }}</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="icon-gelombang float-right">
          <img
            :src="require('@/assets/images/icon/ic_gelombang.png')"
            class="img-fluid"
            alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titlePage: {
      type: String,
      default: null,
    },
  },
};
</script>
