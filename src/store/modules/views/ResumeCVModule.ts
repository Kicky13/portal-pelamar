import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoadingPersonal: false,
        isLoadingPersonifikasi: false,
        listPersonal: [],
        listPersonifikasi: [],
        sosmed: ''
    },
}

const mutations = {
    changeDataResume(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getDataPersonal({ commit, state }) {
        await commit('changeDataResume', {
            isLoadingPersonal: true,
        })
        const { data } = state
        try {
            const res = await ApiService.get('cv/personal');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataResume', {
                    isLoadingPersonal: false,
                    listPersonal: res.data.data
                });
            } else {
                await commit('changeDataResume', {
                    isLoadingPersonal: false,
                });
            }
        } catch {
            await commit('changeDataResume', {
                isLoadingPersonal: false,
            });
        }
    },
    async getPersonifikasi({commit, state}) {
        const { data } = state
        await commit('changeDataResume', {
            isLoadingPersonifikasi: false,
        });

        try {
            const res = await ApiService.get('cv/personifikasi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                let responseData = res.data.data;
                let temp : string[] = [];
                if(responseData.sosmed_facebook != ''){
                    temp.push(responseData.sosmed_facebook+' (<strong>Facebook</strong>)');
                }
                if(responseData.sosmed_instagram != ''){
                    temp.push(responseData.sosmed_instagram+' (<strong>Instagram</strong>)');
                }
                if(responseData.sosmed_twitter != ''){
                    temp.push(responseData.sosmed_twitter+' (<strong>Twitter</strong>)');
                }
                if(responseData.sosmed_linkedin != ''){
                    temp.push(responseData.sosmed_linkedin+' (<strong>Linkedin</strong>)');
                }
                await commit('changeDataResume', {
                    isLoadingPersonifikasi: false,
                    listPersonifikasi: responseData,
                    sosmed: temp.join(' - ')
                });
                return true
            } else {
                await commit('changeDataResume', {
                    isLoadingPersonifikasi: false,
                });
                return false
            }
        } catch {
            await commit('changeDataResume', {
                isLoadingPersonifikasi: false,
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