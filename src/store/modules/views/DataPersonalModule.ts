import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        isSubmitLoading: false,
        listKotaLahir: [],
        listProvinsi: [],
        selectedProvinsi: null,
        listKotaByProvinsi: [],
        listStatus: [],
        listAgama: [],
        reqParamsKota: {
            is_luar_negeri: 0,
            kode_provinsi: null,
        },
        reqParams: {
            is_luar_negeri: 0,
        },
        formData: {
            nama: '',
            gelar: '',
            tempatLahir: '',
            provinsi: '',
            kota: '',
            jenisKelamin: 'L',
            statusKawin: '',
            nik: '',
            nohp: '',
            tglLahir: '',
            agama: '',
            email: '',
            ktp: null,
            fullAddress: '',
        },
    },
}

const mutations = {
    changeDataPersonal(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getListAgama({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        try {
            const res = await ApiService.get('master/agama');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listAgama: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListKotaLahir({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.post('master/kota', data.reqParams);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listKotaLahir: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListProvinsi({ commit, state }) {
        await commit('changeDataPersonal', {
            isSubmitLoading: true,
        });
        try {
            const res = await ApiService.post('master/provinsi', state.data.reqParams);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isSubmitLoading: false,
                    listProvinsi: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isSubmitLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isSubmitLoading: false,
            });
        }
    },
    async getListKota({ commit, state }) {
        const { data } = state
        await commit('changeDataPersonal', {
            isLoading: true,
            reqParamsKota: {
                is_luar_negeri: 0,
                kode_provinsi: data.formData.provinsi,
            }
        });
        try {
            const res = await ApiService.post('master/kota', state.data.reqParamsKota);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listKotaByProvinsi: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getListStatus({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('master/status_kawin');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                    listStatus: res.data.data,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    async getDataPersonal({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.get('cv/personal');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeDataPersonal', {
                isLoading: false,
            });
        }
    },
    cleanForm({ commit, state }) {
        commit('changeDataPersonal', {
            formData: {
                nama: '',
                gelar: '',
                tempatLahir: '',
                provinsi: '',
                kota: '',
                jenisKelamin: 'L',
                statusKawin: '',
                nik: '',
                nohp: '',
                tglLahir: '',
                agama: '',
                email: '',
                fullAddress: '',
            }
        })
    },
    async submitForm({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.post('cv/personal', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPersonal', {
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