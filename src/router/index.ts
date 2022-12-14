import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
  // Homepage
  {
    path: "/",
    name: "Home",
    redirect: "/",
    component: () => import("@/views/crafted/layout/Layout.vue"),
    children: [
      {
        path: "/",
        name: "landing",
        component: () => import("@/views/crafted/pages/home/PPHome.vue"),
      },
      {
        path: "/pencarian-lowongan",
        name: "pencarian-lowongan",
        component: () => import("@/views/crafted/pages/pencarian/index.vue"),
      },
      {
        path: "/pencarian-lowongan/:uuid/detail",
        name: "pencarian-lowongan-detail",
        component: () =>
          import(
            "@/views/crafted/pages/pencarian/detail/PPDetailPencarian.vue"
          ),
      },
      {
        path: "/faq",
        name: "faq",
        component: () => import("@/views/crafted/pages/faq/PPFaq.vue"),
      },
    ],
  },

  {
    path: "/profile/user",
    name: "ProfileUser",
    component: () => import("@/views/crafted/back-office/PPBackOffice.vue"),
  },

  {
    path: "/profile/pengaturan",
    name: "ProfilePengaturan",
    component: () => import("@/views/crafted/back-office/pengaturan/PPPengaturan.vue"),
  },
  {
    path: "/profile/resume-cv",
    name: "ProfileResumeCV",
    component: () => import("@/views/crafted/back-office/resumeCV/PPResumeCV.vue"),
  },
  {
    path: "/profile/detail-cv/personal",
    name: "ProfilePersonal",
    component: () => import("@/views/crafted/back-office/detailCV/dataPersonal/PPDataPersonal.vue"),
  },
  {
    path: "/profile/detail-cv/personafikasi",
    name: "ProfilePersonafikasi",
    component: () => import("@/views/crafted/back-office/detailCV/personafikasi/PPPersonafikasi.vue"),
  },
  {
    path: "/profile/detail-cv/riwayat-pekerjaan",
    name: "ProfileRiwayatPekerjaan",
    component: () => import("@/views/crafted/back-office/detailCV/riwayatPekerjaan/PPRiwayat.vue"),
  },
  {
    path: "/profile/detail-cv/keanggotaan-organisasi",
    name: "ProfileKeanggotaanOrganisasi",
    component: () => import("@/views/crafted/back-office/detailCV/organisasi/PPOrganisasi.vue"),
  },
  {
    path: "/profile/detail-cv/pendidikan-pelatihan",
    name: "ProfilePendidikanPelatihan",
    component: () => import("@/views/crafted/back-office/detailCV/pendidikan/PPPendidikan.vue"),
  },
  {
    path: "/profile/detail-cv/referensi",
    name: "ProfileReferensi",
    component: () => import("@/views/crafted/back-office/detailCV/referensi/PPReferensi.vue"),
  },
  {
    path: "/profile/detail-cv/narasumber",
    name: "ProfileNarasumber",
    component: () => import("@/views/crafted/back-office/detailCV/narasumber/PPNarasumber.vue"),
  },
  {
    path: "/profile/detail-cv/publikasi",
    name: "ProfilePublikasi",
    component: () => import("@/views/crafted/back-office/detailCV/publikasi/PPPublikasi.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/components/page-layouts/Auth.vue"),
  },
  {
    path: "/registrasi",
    name: "registrasi",
    component: () => import("@/views/crafted/pages/registrasi/index.vue"),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/views/crafted/pages/reset-password/index.vue"),
  },

  {
    path: "/dashboard",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      //     {
      //       path: "/builder",
      //       name: "builder",
      //       component: () => import("@/views/Builder.vue"),
      //     },
      //     {
      //       path: "/crafted/pages/profile",
      //       name: "profile",
      //       component: () => import("@/components/page-layouts/Profile.vue"),
      //       children: [
      //         {
      //           path: "overview",
      //           name: "profile-overview",
      //           component: () =>
      //             import("@/views/crafted/pages/profile/Overview.vue"),
      //         },
      //         {
      //           path: "projects",
      //           name: "profile-projects",
      //           component: () =>
      //             import("@/views/crafted/pages/profile/Projects.vue"),
      //         },
      //         {
      //           path: "campaigns",
      //           name: "profile-campaigns",
      //           component: () =>
      //             import("@/views/crafted/pages/profile/Campaigns.vue"),
      //         },
      //         {
      //           path: "documents",
      //           name: "profile-documents",
      //           component: () =>
      //             import("@/views/crafted/pages/profile/Documents.vue"),
      //         },
      //         {
      //           path: "connections",
      //           name: "profile-connections",
      //           component: () =>
      //             import("@/views/crafted/pages/profile/Connections.vue"),
      //         },
      //         {
      //           path: "activity",
      //           name: "profile-activity",
      //           component: () =>
      //             import("@/views/crafted/pages/profile/Activity.vue"),
      //         },
      //       ],
      //     },
      //     {
      //       path: "/crafted/pages/wizards/horizontal",
      //       name: "horizontal-wizard",
      //       component: () => import("@/views/crafted/pages/wizards/Horizontal.vue"),
      //     },
      //     {
      //       path: "/crafted/pages/wizards/vertical",
      //       name: "vertical-wizard",
      //       component: () => import("@/views/crafted/pages/wizards/Vertical.vue"),
      //     },
      //     {
      //       path: "/crafted/account",
      //       name: "account",
      //       component: () => import("@/views/crafted/account/Account.vue"),
      //       children: [
      //         {
      //           path: "overview",
      //           name: "account-overview",
      //           component: () => import("@/views/crafted/account/Overview.vue"),
      //         },
      //         {
      //           path: "settings",
      //           name: "account-settings",
      //           component: () => import("@/views/crafted/account/Settings.vue"),
      //         },
      //       ],
      //     },
      //     {
      //       path: "/apps/customers/getting-started",
      //       name: "apps-customers-getting-started",
      //       component: () => import("@/views/apps/customers/GettingStarted.vue"),
      //     },
      //     {
      //       path: "/apps/customers/customers-listing",
      //       name: "apps-customers-listing",
      //       component: () => import("@/views/apps/customers/CustomersListing.vue"),
      //     },
      //     {
      //       path: "/apps/customers/customer-details",
      //       name: "apps-customers-details",
      //       component: () => import("@/views/apps/customers/CustomerDetails.vue"),
      //     },
      //     {
      //       path: "/apps/subscriptions/getting-started",
      //       name: "apps-subscriptions-getting-started",
      //       component: () =>
      //         import("@/views/apps/subscriptions/GettingStarted.vue"),
      //     },
      //     {
      //       path: "/apps/subscriptions/subscription-list",
      //       name: "apps-subscriptions-subscription-list",
      //       component: () =>
      //         import("@/views/apps/subscriptions/SubscriptionList.vue"),
      //     },
      //     {
      //       path: "/apps/subscriptions/add-subscription",
      //       name: "apps-subscriptions-add-subscription",
      //       component: () =>
      //         import("@/views/apps/subscriptions/AddSubscription.vue"),
      //     },
      //     {
      //       path: "/apps/subscriptions/view-subscription",
      //       name: "apps-subscriptions-view-subscription",
      //       component: () =>
      //         import("@/views/apps/subscriptions/ViewSubscription.vue"),
      //     },
      //     {
      //       path: "/apps/calendar",
      //       name: "apps-calendar",
      //       component: () => import("@/views/apps/Calendar.vue"),
      //     },
      //     {
      //       path: "/apps/chat/private-chat",
      //       name: "apps-private-chat",
      //       component: () => import("@/views/apps/chat/Chat.vue"),
      //     },
      //     {
      //       path: "/apps/chat/group-chat",
      //       name: "apps-group-chat",
      //       component: () => import("@/views/apps/chat/Chat.vue"),
      //     },
      //     {
      //       path: "/apps/chat/drawer-chat",
      //       name: "apps-drawer-chat",
      //       component: () => import("@/views/apps/chat/DrawerChat.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/general/invite-friends",
      //       name: "modals-general-invite-friends",
      //       component: () =>
      //         import("@/views/crafted/modals/general/InviteFriends.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/general/view-user",
      //       name: "modals-general-view-user",
      //       component: () => import("@/views/crafted/modals/general/ViewUsers.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/general/upgrade-plan",
      //       name: "modals-general-upgrade-plan",
      //       component: () =>
      //         import("@/views/crafted/modals/general/UpgradePlan.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/general/share-and-earn",
      //       name: "modals-general-share-and-earn",
      //       component: () =>
      //         import("@/views/crafted/modals/general/ShareAndEarn.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/forms/new-target",
      //       name: "modals-forms-new-target",
      //       component: () => import("@/views/crafted/modals/forms/NewTarget.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/forms/new-card",
      //       name: "modals-forms-new-card",
      //       component: () => import("@/views/crafted/modals/forms/NewCard.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/forms/new-address",
      //       name: "modals-forms-new-address",
      //       component: () => import("@/views/crafted/modals/forms/NewAddress.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/forms/create-api-key",
      //       name: "modals-forms-create-api-key",
      //       component: () =>
      //         import("@/views/crafted/modals/forms/CreateApiKey.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/wizards/two-factor-auth",
      //       name: "modals-wizards-two-factor-auth",
      //       component: () =>
      //         import("@/views/crafted/modals/wizards/TwoFactorAuth.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/wizards/create-app",
      //       name: "modals-wizards-create-app",
      //       component: () => import("@/views/crafted/modals/wizards/CreateApp.vue"),
      //     },
      //     {
      //       path: "/crafted/modals/wizards/create-account",
      //       name: "modals-wizards-create-account",
      //       component: () =>
      //         import("@/views/crafted/modals/wizards/CreateAccount.vue"),
      //     },
      //     {
      //       path: "/crafted/widgets/lists",
      //       name: "widgets-list",
      //       component: () => import("@/views/crafted/widgets/Lists.vue"),
      //     },
      //     {
      //       path: "/crafted/widgets/statistics",
      //       name: "widgets-statistics",
      //       component: () => import("@/views/crafted/widgets/Statistics.vue"),
      //     },
      //     {
      //       path: "/crafted/widgets/charts",
      //       name: "widgets-charts",
      //       component: () => import("@/views/crafted/widgets/Charts.vue"),
      //     },
      //     {
      //       path: "/crafted/widgets/mixed",
      //       name: "widgets-mixed",
      //       component: () => import("@/views/crafted/widgets/Mixed.vue"),
      //     },
      //     {
      //       path: "/crafted/widgets/tables",
      //       name: "widgets-tables",
      //       component: () => import("@/views/crafted/widgets/Tables.vue"),
      //     },
      //     {
      //       path: "/crafted/widgets/feeds",
      //       name: "widgets-feeds",
      //       component: () => import("@/views/crafted/widgets/Feeds.vue"),
      //     },
    ],
  },
  // {
  //   path: "/",
  //   component: () => import("@/components/page-layouts/Auth.vue"),
  //   children: [
  //     {
  //       path: "/sign-in",
  //       name: "sign-in",
  //       component: () =>
  //         import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
  //     },
  //     {
  //       path: "/sign-up",
  //       name: "sign-up",
  //       component: () =>
  //         import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
  //     },
  //     {
  //       path: "/password-reset",
  //       name: "password-reset",
  //       component: () =>
  //         import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/multi-step-sign-up",
  //   name: "multi-step-sign-up",
  //   component: () =>
  //     import("@/views/crafted/authentication/MultiStepSignUp.vue"),
  // },
  // {
  //   // the 404 route, when none of the above matches
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/crafted/authentication/Error404.vue"),
  // },
  // {
  //   path: "/500",
  //   name: "500",
  //   component: () => import("@/views/crafted/authentication/Error500.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/404",
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
