import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading: false,
        listOrganisasi: [],
        listJenisOrg: [],
        idOrganisasi: 0,
        formData: {
            uraian_kegiatan: '',
            jabatan: '',
            nama_organisasi: '',
            id_jenis_organisasi: '',
            tanggal_mulai: '',
            tanggal_akhir: ''
        },
        validator: {
            uraian_kegiatan: false,
            jabatan: false,
            nama_organisasi: false,
            id_jenis_organisasi: false,
            tanggal_mulai: false,
        }
    },
}

const mutations = {
    changeDataOrganisasi(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getListJenisOrg({ commit, state }) {
        await commit('changeDataOrganisasi', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('master/jenis_organisasi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                    listJenisOrg: res.data.data,
                });
            } else {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataOrganisasi', {
                isLoading: false,
            });
        }
    },
    async getListOrganisasi({ commit, state }) {
        await commit('changeDataOrganisasi', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('cv/keanggotaan_organisasi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                    listOrganisasi: res.data.data,
                });
            } else {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataOrganisasi', {
                isLoading: false,
            });
        }
    },
    async getOrganisasiById({ commit, state }) {
        await commit('changeDataOrganisasi', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('cv/keanggotaan_organisasi/'+data.idOrganisasi);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                const temp = {
                    uraian_kegiatan: res.data.data.uraian_kegiatan,
                    jabatan: res.data.data.jabatan,
                    nama_organisasi: res.data.data.nama_organisasi,
                    id_jenis_organisasi: res.data.data.id_jenis_organisasi,
                    tanggal_mulai: res.data.data.tanggal_mulai,
                    tanggal_akhir: res.data.data.tanggal_akhir,
                }
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                    formData: temp,
                });
            } else {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataOrganisasi', {
                isLoading: false,
            });
        }
    },
    cleanForm({ commit, state }) {
        commit('changeDataOrganisasi', {
            formData: {
                uraian_kegiatan: '',
                jabatan: '',
                nama_organisasi: '',
                id_jenis_organisasi: '',
                tanggal_mulai: '',
                tanggal_akhir: ''
            },
            idOrganisasi: 0
        })
    },
    async submitForm({ commit, state }) {
        await commit('changeDataOrganisasi', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.post('cv/keanggotaan_organisasi', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeDataOrganisasi', {
                isLoading: false,
            });
            return false
        }
    },
    async updateForm({ commit, state }) {
        await commit('changeDataOrganisasi', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.put('cv/keanggotaan_organisasi/'+data.idOrganisasi, data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeDataOrganisasi', {
                isLoading: false,
            });
            return false
        }
    },
    async deleteOrganisasi({ commit, state }) {
        await commit('changeDataOrganisasi', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.delete('cv/keanggotaan_organisasi/'+data.idOrganisasi);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataOrganisasi', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeDataOrganisasi', {
                isLoading: false,
            });
            return false
        }
    },
    async validateForm({commit, state}) {
        const { data } = state
        let validator = {
            uraian_kegiatan: data.formData.uraian_kegiatan == '' || data.formData.uraian_kegiatan == null ? true : false,
            jabatan: data.formData.jabatan == '' || data.formData.jabatan == null ? true : false,
            nama_organisasi: data.formData.nama_organisasi == '' || data.formData.nama_organisasi == null ? true : false,
            id_jenis_organisasi: data.formData.id_jenis_organisasi == '' || data.formData.id_jenis_organisasi == null ? true : false,
            tanggal_mulai: data.formData.tanggal_mulai == '' || data.formData.tanggal_mulai == null ? true : false,
            // tanggal_akhir: data.formData.tanggal_akhir == '' || data.formData.tanggal_akhir == null ? true : false,
        }
        console.log(validator)
        commit('changeDataOrganisasi', {
            validator: validator
        })

        if (validator.uraian_kegiatan || validator.jabatan || validator.nama_organisasi || validator.id_jenis_organisasi || validator.tanggal_mulai) {
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