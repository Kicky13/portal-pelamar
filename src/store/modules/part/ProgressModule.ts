import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        persentase: 0,
        jobApplied: 0,
    },
}

const mutations = {
    changeProgress(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getProgressCV({ commit, state }) {
        const { data } = state
        await commit('changeProgress', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('user/get_progress');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeProgress', {
                    isLoading: false,
                    persentase: res.data.data.percentage_cv,
                    jobApplied: res.data.data.jml_dilamar,
                });
                return true
            } else {
                await commit('changeProgress', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeProgress', {
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