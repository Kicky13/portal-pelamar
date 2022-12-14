import ApiService from "@/core/services/ApiService";
import { id } from "element-plus/es/locale";

const state = {
  data: {
    isLoading: false,
    listLowongan: [],
    listPerusahaan: [],
    listKategori: [],
    listJabatan: [],
    dataJabatan: [],
    dataPerusahaan: [],
    listRecommended: [],
    selectedLowongan: {},
    filter: {
      search: "",
      id_perusahaan: "",
      id_bidang_jabatan: "",
      id_jabatan: "",
    },
    itemPerPage: 10,
    totalItems: 100,
    totalPage: 1,
    pagination: [],
    startIndex: 0,
    endIndex: 10,
    activePageIndex: 1,
  },
};

const mutations = {
  changeLowongan(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  },
};

const actions = {
  changeSelectedLowongan({ commit, state }, payload) {
    commit("changeLowongan", {
      selectedLowongan: payload,
    });
  },
  changeRecommended({ commit, state }, payload) {
    commit("changeLowongan", {
      listRecommended: payload,
    });
  },
  async lamarLowongan({ commit, state }, payload) {
    await commit("changeLowongan", {
      isLoading: true,
    });
    try {
      const res = await ApiService.post("job", payload);
      if (res.data.status_code == `201` || res.data.status_code == 201) {
        await commit("changeLowongan", {
          isLoading: false,
        });
      } else {
        await commit("changeLowongan", {
          isLoading: false,
        });
      }
    } catch {
      await commit("changeLowongan", {
        isLoading: false,
      });
    }
  },
  async getPerusahaan({ commit, state }) {
    await commit("changeLowongan", {
      isLoading: true,
    });
    const { data } = state;
    try {
      const res = await ApiService.get("master/perusahaan");
      if (res.data.status_code == `201` || res.data.status_code == 201) {
        data.dataPerusahaan = [];
        res.data.data.forEach((element) => {
          data.dataPerusahaan.push({
            id: element.id,
            name: element.nama_perusahaan,
          });
        });
        await commit("changeLowongan", {
          isLoading: false,
          listPerusahaan: data.dataPerusahaan,
        });
      } else {
        await commit("changeLowongan", {
          isLoading: false,
        });
      }
    } catch {
      await commit("changeLowongan", {
        isLoading: false,
      });
    }
  },
  async getKategori({ commit, state }) {
    await commit("changeLowongan", {
      isLoading: true,
    });
    try {
      const res = await ApiService.get("master/bidang_jabatan");
      if (res.data.status_code == `201` || res.data.status_code == 201) {
        await commit("changeLowongan", {
          isLoading: false,
          listKategori: res.data.data,
        });
      } else {
        await commit("changeLowongan", {
          isLoading: false,
        });
      }
    } catch {
      await commit("changeLowongan", {
        isLoading: false,
      });
    }
  },
  async getJabatan({ commit, state }) {
    await commit("changeLowongan", {
      isLoading: true,
    });

    const { data } = state;
    try {
      const res = await ApiService.get("master/jabatan");
      if (res.data.status_code == `201` || res.data.status_code == 201) {
        data.dataJabatan = [];
        res.data.data.forEach((element) => {
          data.dataJabatan.push({
            id: element.id,
            name: element.nama_jabatan,
          });
        });

        await commit("changeLowongan", {
          isLoading: false,
          listJabatan: data.dataJabatan,
        });
      } else {
        await commit("changeLowongan", {
          isLoading: false,
        });
      }
    } catch {
      await commit("changeLowongan", {
        isLoading: false,
      });
    }
  },
  async getLowongan({ commit, state }) {
    await commit("changeLowongan", {
      isLoading: true,
    });
    const { data } = state;
    try {
      const res = await ApiService.post("job/list", data.filter);

      if (res.data.status_code == `201` || res.data.status_code == 201) {
        commit("changeLowongan", {
          isLoading: false,
          listLowongan: res.data.data,
        });
      } else {
        await commit("changeLowongan", {
          isLoading: false,
        });
      }
    } catch {
      await commit("changeLowongan", {
        isLoading: false,
      });
    }
  },
  resetFilter({ commit, state }) {
    commit("changeLowongan", {
      filter: {
        search: "",
        id_perusahaan: "",
        id_bidang_jabatan: "",
        id_jabatan: "",
      },
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
