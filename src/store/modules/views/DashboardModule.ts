import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading: false,
        listLamaran: [],
        listLamaranDetail: [],
    },
}

const mutations = {
    changeDataDashboard(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getListLamaran({ commit, state }) {
        await commit('changeDataDashboard', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('job/3');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataDashboard', {
                    isLoading: false,
                    listLamaran: res.data.data,
                });
            } else {
                await commit('changeDataDashboard', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataDashboard', {
                isLoading: false,
            });
        }
    },
    async getListLamaranDetail({ commit, state }) {
        await commit('changeDataDashboard', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('job/10');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataDashboard', {
                    isLoading: false,
                    listLamaranDetail: res.data.data,
                });
            } else {
                await commit('changeDataDashboard', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataDashboard', {
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