import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading: false,
        listReferensi: [],
        idReferensi: 0,
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
                    listReferensi: res.data.data,
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
    async getReferensiById({ commit, state }) {
        await commit('changeDataReferensi', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('cv/referensi/'+data.idReferensi);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                const temp = {
                    nama_ref: res.data.data.nama_ref,
                    jabatan: res.data.data.jabatan,
                    perusahaan: res.data.data.perusahaan,
                    no_hp: res.data.data.no_hp,
                }
                await commit('changeDataReferensi', {
                    isLoading: false,
                    formData: temp,
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
            },
            idReferensi: 0
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
    async updateForm({ commit, state }) {
        await commit('changeDataReferensi', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.put('cv/referensi/'+data.idReferensi, data.formData);
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
    async deleteReferensi({ commit, state }) {
        await commit('changeDataReferensi', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.delete('cv/referensi/'+data.idReferensi);
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