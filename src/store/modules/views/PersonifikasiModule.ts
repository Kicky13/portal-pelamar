import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        isSubmitLoading: false,
        listMinat: [],
        formData: {
            nilai_pribadi: '',
            visi_pribadi: '',
            sosmed_instagram: '',
            sosmed_facebook: '',
            sosmed_linkedin: '',
            sosmed_twitter: '',
            bidang_keminatan: [],
        },
        validator: {
            nilai_pribadi: false,
            visi_pribadi: false,
            bidang_keminatan: false,
            sosmed_instagram: false,
            sosmed_facebook: false,
            sosmed_linkedin: false,
            sosmed_twitter: false,
        },
    },
}

const mutations = {
    changePersonifikasi(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getBidangKeminatan({ commit, state }) {
        await commit('changePersonifikasi', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('master/bidang_jabatan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                console.log(res.data.data)
                await commit('changePersonifikasi', {
                    isLoading: false,
                    listMinat: res.data.data,
                })
            } else {
                await commit('changePersonifikasi', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changePersonifikasi', {
                isLoading: false,
            });
        }
    },
    clearForm({commit, state}) {
        commit('changePersonifikasi', {
            formData: {
                nama_acara: '',
                tahun: '',
                jumlah_peserta: '',
                penyelenggara: '',
                lokasi: '',
            },
            selectedRecordID: null,
        })
    },
    async storePersonifikasi({commit, state}) {
        const { data } = state

        await commit('changePersonifikasi', {
            isSubmitLoading: false,
        });

        try {
            const res = await ApiService.post('cv/narasumber', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changePersonifikasi', {
                    isSubmitLoading: false,
                });
                return true
            } else {
                await commit('changePersonifikasi', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changePersonifikasi', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async getPersonifikasi({commit, state}) {
        const { data } = state

        await commit('changePersonifikasi', {
            isSubmitLoading: false,
        });

        try {
            const res = await ApiService.get('cv/personifikasi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                let responseData = res.data.data;
                await commit('changePersonifikasi', {
                    isSubmitLoading: false,
                    formData: {
                        nilai_pribadi: responseData.nilai_pribadi,
                        visi_pribadi: responseData.visi_pribadi,
                        sosmed_instagram: responseData.sosmed_instagram,
                        sosmed_facebook: responseData.sosmed_facebook,
                        sosmed_linkedin: responseData.sosmed_linkedin,
                        sosmed_twitter: responseData.sosmed_twitter,
                        bidang_keminatan: [],
                    },
                });
                return true
            } else {
                await commit('changePersonifikasi', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changePersonifikasi', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async validateForm({commit, state}) {
        const { data } = state
        let validator = {
            nilai_pribadi: data.formData.nilai_pribadi == '' || data.formData.nilai_pribadi == null ? true : false,
            visi_pribadi: data.formData.visi_pribadi == '' || data.formData.visi_pribadi == null ? true : false,
            bidang_keminatan: data.formData.bidang_keminatan.length == 0 || data.formData.bidang_keminatan == null ? true : false,
            sosmed_instagram: data.formData.sosmed_instagram == '' || data.formData.sosmed_instagram == null ? true : false,
            sosmed_facebook: data.formData.sosmed_facebook == '' || data.formData.sosmed_facebook == null ? true : false,
            sosmed_linkedin: data.formData.sosmed_linkedin == '' || data.formData.sosmed_linkedin == null ? true : false,
            sosmed_twitter: data.formData.sosmed_twitter == '' || data.formData.sosmed_twitter == null ? true : false,
        }
        console.log(validator)
        commit('changePersonifikasi', {
            validator: validator
        })

        if (validator.nilai_pribadi || validator.visi_pribadi || validator.bidang_keminatan || validator.sosmed_facebook || validator.sosmed_instagram || validator.sosmed_linkedin || validator.sosmed_twitter) {
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