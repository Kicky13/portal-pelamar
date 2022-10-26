import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        listKotaLahir: [],
        listProvinsi: [],
        selectedProvinsi: null,
        listKotaByProvinsi: [],
        listStatus: [],
        listAgama: [],
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
            console.log(res.headers)
            console.log(res.data)
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
        try {
            const res = await ApiService.get('master/kota?is_luar_negeri=0');
            console.log(res.headers)
            console.log(res.data)
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
            const res = await ApiService.get('master/provinsi?is_luar_negeri=0');
            console.log(res.headers)
            console.log(res.data)
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
        let link = 'master/kota?is_luar_negeri=0'
        if (data.selectedProvinsi != null && data.selectedProvinsi != '' && data.selectedProvinsi != 0) {
            link = 'master/kota?is_luar_negeri=0&kode_provinsi=' + data.selectedProvinsi
        }
        try {
            const res = await ApiService.get('master/kota?is_luar_negeri=0&kode_provinsi=' + data.selectedProvinsi);
            console.log(res.headers)
            console.log(res.data)
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
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}