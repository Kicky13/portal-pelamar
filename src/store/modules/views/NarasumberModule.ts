import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        isSubmitLoading: false,
        listNarasumber: [],
        selectedRecordID: null,
        column: [
            {
                columnName: "Nama Acara",
                columnLabel: "nama_acara",
                sortEnabled: false,
            },
            {
                columnName: "Tahun",
                columnLabel: "tahun",
                sortEnabled: false,
            },
            {
                columnName: "Jumlah Peserta",
                columnLabel: "jumlah_peserta",
                sortEnabled: false,
            },
            {
                columnName: "Penyelenggara",
                columnLabel: "penyelenggara",
                sortEnabled: false,
            },
            {
                columnName: "Lokasi",
                columnLabel: "lokasi",
                sortEnabled: false,
            },
            {
                columnName: "Action",
                columnLabel: "action",
                sortEnabled: false,
            },
        ],
        formData: {
            nama_acara: '',
            tahun: '',
            jumlah_peserta: '',
            penyelenggara: '',
            lokasi: '',
        },
        validator: {
            nama_acara: false,
            tahun: false,
            jumlah_peserta: false,
            penyelenggara: false,
            lokasi: false,
        },
    },
}

const mutations = {
    changeNarasumber(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getNarasumber({ commit, state }) {
        await commit('changeNarasumber', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('cv/narasumber');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeNarasumber', {
                    isLoading: false,
                    listNarasumber: res.data.data,
                })
            } else {
                await commit('changeNarasumber', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changeNarasumber', {
                isLoading: false,
            });
        }
    },
    clearForm({commit, state}) {
        commit('changeNarasumber', {
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
    async storeNarasumber({commit, state}) {
        const { data } = state

        await commit('changeNarasumber', {
            isSubmitLoading: false,
        });

        try {
            const res = await ApiService.post('cv/narasumber', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return true
            } else {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeNarasumber', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async getDetailNarasumber({commit, state}, payload) {
        const { data } = state

        await commit('changeNarasumber', {
            isSubmitLoading: false,
            selectedRecordID: payload,
        });

        try {
            const res = await ApiService.get('cv/narasumber/' + payload);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                console.log(res.data);
                let responseData = res.data.data;
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                    formData: {
                        nama_acara: responseData.nama_acara,
                        tahun: responseData.tahun,
                        jumlah_peserta: responseData.jumlah_peserta,
                        penyelenggara: responseData.penyelenggara,
                        lokasi: responseData.lokasi,
                    },
                });
                return true
            } else {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeNarasumber', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async updateNarasumber({commit, state}) {
        const { data } = state

        await commit('changeNarasumber', {
            isSubmitLoading: false,
        });

        try {
            const res = await ApiService.put('cv/narasumber/' + data.selectedRecordID, data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return true
            } else {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeNarasumber', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async deleteNarasumber({commit, state}, payload) {
        const { data } = state

        await commit('changeNarasumber', {
            isSubmitLoading: false,
        });

        try {
            const res = await ApiService.delete('cv/narasumber/' + payload);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return true
            } else {
                await commit('changeNarasumber', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changeNarasumber', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async validateForm({commit, state}) {
        const { data } = state
        let special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let validator = {
            nama_acara: data.formData.nama_acara.length < 1 || data.formData.nama_acara == null ? true : false,
            tahun: data.formData.tahun.length == '' || data.formData.tahun == null ? true : false,
            jumlah_peserta: data.formData.jumlah_peserta < 1 || data.formData.jumlah_peserta == null || data.formData.jumlah_peserta == '' || special.test(data.formData.jumlah_peserta) ? true : false,
            penyelenggara: data.formData.penyelenggara.length == null || data.formData.penyelenggara == '' ? true : false,
            lokasi: data.formData.nama_acara.length == '' || data.formData.nama_acara == null ? true : false,
        }
        console.log(validator)
        commit('changeNarasumber', {
            validator: validator
        })

        if (validator.nama_acara || validator.tahun || validator.jumlah_peserta || validator.penyelenggara || validator.lokasi) {
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