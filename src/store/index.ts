import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import ThemeModeModule from "@/store/modules/ThemeModeModule";
import StateManagement from "@/store/modules/StateManagement";
// Views
import DataPersonal from "@/store/modules/views/DataPersonalModule";
import DataOrganisasi from "@/store/modules/views/DataOrganisasiModule";
import DataReferensi from "@/store/modules/views/DataReferensiModule";

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    ThemeModeModule,
    StateManagement,
    // Views
    dataPersonalModule: DataPersonal,
    dataOrganisasiModule: DataOrganisasi,
    dataReferensiModule: DataReferensi,
  },
});

export default store;
