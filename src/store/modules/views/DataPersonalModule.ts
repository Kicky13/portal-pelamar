import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading: false,
        listKotaLahir: [],
        listProvinsi: [],
        selectedProvinsi: null,
        listKotaByProvinsi: [],
        listStatus: [],
        listAgama: [],
        reqParamsKota: {
            is_luar_negeri: 0,
            kode_provinsi: null,
        },
        reqParams: {
            is_luar_negeri: 0,
        },
    },
}

const mutations = {
    changeDataPersonal(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getListAgama({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('master/agama');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listAgama: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListKotaLahir({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.post('master/kota', data.reqParams);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listKotaLahir: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListProvinsi({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        try {
            const res = await ApiService.post('master/provinsi', state.data.reqParams);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listProvinsi: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListKota({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.post('master/kota', state.data.reqParamsKota);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listKotaByProvinsi: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListStatus({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('master/status_kawin');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listStatus: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}