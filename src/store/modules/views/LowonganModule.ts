import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        listLowongan: [],
        listPerusahaan: [],
        listKategori: [],
        listJabatan: [],
        filter: {
            search: '',
            id_perusahaan: '',
            id_bidang_jabatan: '',
            id_jabatan: '',
        },
        itemPerPage: 10,
        totalItems: 100,
        totalPage: 1,
        pagination: [],
        startIndex: 0,
        endIndex: 10,
        activePageIndex: 1,
    },
}

const mutations = {
    changeLowongan(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getPerusahaan({ commit, state }) {
        await commit('changeLowongan', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('master/perusahaan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeLowongan', {
                    isLoading: false,
                    listPerusahaan: res.data.data,
                });
            } else {
                await commit('changeLowongan', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeLowongan', {
                isLoading: false,
            });
        }
    },
    async getKategori({ commit, state }) {
        await commit('changeLowongan', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('master/bidang_jabatan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeLowongan', {
                    isLoading: false,
                    listKategori: res.data.data,
                });
            } else {
                await commit('changeLowongan', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeLowongan', {
                isLoading: false,
            });
        }
    },
    async getJabatan({ commit, state }) {
        await commit('changeLowongan', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('master/jabatan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeLowongan', {
                    isLoading: false,
                    listJabatan: res.data.data,
                });
            } else {
                await commit('changeLowongan', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeLowongan', {
                isLoading: false,
            });
        }
    },
    async getLowongan({ commit, state }) {
        await commit('changeLowongan', {
            isLoading: true,
        });
        const { data } = state
        const tesStr = 'Kikikagfsh'
        console.log(tesStr.replace('ag', '').replace('s', ''))
        try {
            const res = await ApiService.post('job/list', data.filter);

            if (res.data.status_code == `201` || res.data.status_code == 201) {
                commit('changeLowongan', {
                    isLoading: false,
                    listLowongan: res.data.data,
                });
            } else {
                await commit('changeLowongan', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeLowongan', {
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