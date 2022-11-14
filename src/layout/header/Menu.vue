<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-stretch"
    id="kt_header_menu"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
    <!--begin::Menu-->
    <div
      class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-semobold my-5 my-lg-0 align-items-stretch"
      id="#kt_header_menu"
      data-kt-menu="true">
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.heading">
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <div v-if="menuItem.heading" class="menu-item me-lg-1">
              <router-link
                class="menu-link"
                :to="menuItem.route"
                active-class="active">
                <span class="menu-title">{{
                  translate(menuItem.heading)
                }}</span>
              </router-link>
            </div>
          </template>
        </template>
      </template>
      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1">
        <router-link
          v-if="isUserAuthenticated && isLanding()"
          :to="`/profile/user`"
          class="menu-link py-3 px-5 explore-btn-primary">
          <span class="">Dashboard</span>
          <span class="menu-arrow d-lg-none"></span>
        </router-link>
        <a
          @click="logout"
          v-else-if="isUserAuthenticated && !isLanding()"
          class="menu-link py-3 px-5 explore-btn-primary">
          <span class="">Logout</span>
          <span class="menu-arrow d-lg-none"></span>
        </a>
        <router-link
          v-else
          :to="`/sign-in`"
          class="py-3 px-5 menu-login explore-btn-primary">
          <span class="">Login</span>
          <span class="menu-arrow d-lg-none"></span>
        </router-link>
      </div>
      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import { headerMenuIcons } from "@/core/helpers/config";
import { version } from "@/core/helpers/documentation";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const { t, te } = useI18n();
    const route = useRoute();
    const isUserAuthenticated = store.getters.isUserAuthenticated;

    console.log(route.name);

    const isLanding = () => {
      if (
        route.name == "landing" ||
        route.name == "pencarian-lowongan" ||
        route.name == "pencarian-lowongan-detail" ||
        route.name == "faq"
      ) {
        return true;
      } else {
        return false;
      }
    };

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const logout = () => {
      store
        .dispatch(Actions.LOGOUT)
        .then(() => router.push({ name: "sign-in" }));
    };

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    return {
      hasActiveChildren,
      headerMenuIcons,
      MainMenuConfig,
      translate,
      version,
      isUserAuthenticated,
      logout,
      isLanding,
    };
  },
});
</script>
