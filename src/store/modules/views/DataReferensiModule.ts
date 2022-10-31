import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading: false,
        formData: {
            nama_ref: '',
            jabatan: '',
            perusahaan: '',
            no_hp: '',
        }
    },
}

const mutations = {
    changeDataReferensi(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getListReferensi({ commit, state }) {
        await commit('changeDataReferensi', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('cv/referensi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataReferensi', {
                    isLoading: false,
                    listAgama: res.data.data,
                });
            } else {
                await commit('changeDataReferensi', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataReferensi', {
                isLoading: false,
            });
        }
    },
    cleanForm({ commit, state }) {
        commit('changeDataReferensi', {
            formData: {
                nama_ref: '',
                jabatan: '',
                perusahaan: '',
                no_hp: '',
            }
        })
    },
    async submitForm({ commit, state }) {
        await commit('changeDataReferensi', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.post('cv/referensi', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataReferensi', {
                    isLoading: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataReferensi', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeDataReferensi', {
                isLoading: false,
            });
            return false
        }
    }, 
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}