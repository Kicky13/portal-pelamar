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
import PendidikanPelatihan from "@/store/modules/views/PendidikanPelatihanModule";
import RiwayatPekerjaan from "@/store/modules/views/RiwayatPekerjaanModule";
import DataReferensi from "@/store/modules/views/DataReferensiModule";
import Narasumber from "@/store/modules/views/NarasumberModule";
import Publikasi from "@/store/modules/views/PublikasiModule";
import Personifikasi from "@/store/modules/views/PersonifikasiModule";

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
    pendidikanPelatihanModule: PendidikanPelatihan,
    riwayatPekerjaanModule: RiwayatPekerjaan,
    dataReferensiModule: DataReferensi,
    narasumberModule: Narasumber,
    publikasiModule: Publikasi,
    personifikasiModule: Personifikasi,
  },
});

export default store;
