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
        },
        validator: {
            nama_ref: false,
            jabatan: false,
            perusahaan: false,
            no_hp: false,
        },
        tableHeader: [
            {
              columnName: "nama",
              columnLabel: "nama",
              sortEnabled: false,
            },
            {
              columnName: "jabatan",
              columnLabel: "jabatan",
              sortEnabled: false,
            },
            {
              columnName: "perusahaan",
              columnLabel: "perusahaan",
              sortEnabled: false,
            },
            {
              columnName: "No Handphone",
              columnLabel: "no_hp",
              sortEnabled: false,
            },
            {
              columnName: "Action",
              columnLabel: "action",
              sortEnabled: false,
            },
        ],
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
    async validateForm({commit, state}) {
        const { data } = state
        let validator = {};
        Object.entries(data.formData).forEach(([key, value], index) => {
            validator[key] = value == '' || value == null ? true : false;
        });
        console.log(validator)
        commit('changeDataReferensi', {
            validator: validator
        })

        if (Object.values(validator).some(val => val === true)) {
            return false
        } else {    
            return true
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}