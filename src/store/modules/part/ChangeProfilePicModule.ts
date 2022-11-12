import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
    },
}

const mutations = {
    changeFoto(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async storeNewPic({ commit, state }, payload) {
        await commit('changeFoto', {
            isLoading: true,
        });
        try {
            const res = await ApiService.post('user/update_foto', payload);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeFoto', {
                    isLoading: false,
                });
                return true
            } else {
                await commit('changeFoto', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeFoto', {
                isLoading: false,
            });
            return false;
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}