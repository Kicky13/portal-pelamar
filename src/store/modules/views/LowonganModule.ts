import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        listLowongan: [],
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
    async getLowongan({ commit, state }) {
        await commit('changeLowongan', {
            isLoading: true,
        });
        const { data } = state
        const tesStr = 'Kikikagfsh'
        console.log(tesStr.replace('ag', '').replace('s', ''))
        try {
            const res = await ApiService.get('job');

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