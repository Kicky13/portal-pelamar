import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading1: false,
        isLoading2: false,
        listPendidikan: [],
        listPelatihan: [],
        listJenjang: [],
        listNegara: [],
        paramNegara: {
            is_luar_negeri: 1,
        },
        listKota: [],
        paramKota: {
            kode_provinsi: 0
        },
        listKampus: [],
        listKotaPelatihan: [],
        listKategoriPelatihan: [],
        idPendidikan: 0,
        idPelatihan: 0,
        formDataPendidikan: {
            id_jenjang: '',
            id_negara: '',
            id_kota: '',
            penghargaan: '',
            jurusan: '',
            id_perguruan_tinggi: '',
            tahun_lulus: ''
        },
        formDataPelatihan: {
            name: '',
            penyelenggara: '',
            id_kota: '',
            tahun: '',
            id_kategori_pelatihan: '',
            nomor_sertifikat: ''
        }
    },
}

const mutations = {
    changeDataPendidikan(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getListJenjang({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        });
        try {
            const res = await ApiService.get('master/tingkat_pendidikan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                    listJenjang: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
        }
    },
    async getListNegara({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        });
        try {
            const res = await ApiService.post('master/provinsi', state.data.paramNegara);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                    listNegara: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
        }
    },
    async getListKota({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        });
        try {
            const res = await ApiService.post('master/kota', state.data.paramKota);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                    listKota: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
        }
    },
    async getListKotaPelatihan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        });
        try {
            const res = await ApiService.post('master/kota', {});
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                    listKotaPelatihan: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
            });
        }
    },
    async getListKategoriPelatihan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        });
        try {
            const res = await ApiService.get('master/kategori_pelatihan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                    listKategoriPelatihan: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
            });
        }
    },
    async getListKampus({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        });
        try {
            const res = await ApiService.get('master/perguruan_tinggi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                    listKampus: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
        }
    },
    async getListPendidikan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        });
        try {
            const res = await ApiService.get('cv/riwayat_pendidikan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                    listPendidikan: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
        }
    },
    async getListPelatihan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        });
        try {
            const res = await ApiService.get('cv/riwayat_pelatihan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                    listPelatihan: res.data.data,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
            });
        }
    },
    async getPendidikanById({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('cv/riwayat_pendidikan/'+data.idPendidikan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                const temp = {
                    id_jenjang: res.data.data.id_jenjang,
                    id_negara: res.data.data.id_negara,
                    id_kota: res.data.data.id_kota,
                    penghargaan: res.data.data.penghargaan,
                    jurusan: res.data.data.jurusan,
                    id_perguruan_tinggi: res.data.data.id_perguruan_tinggi,
                    tahun_lulus: res.data.data.tahun_lulus
                }
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                    formDataPendidikan: temp,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
        }
    },
    async getPelatihanById({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('cv/riwayat_pelatihan/'+data.idPelatihan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                const temp = {
                    name: res.data.data.name,
                    penyelenggara: res.data.data.penyelenggara,
                    id_kota: res.data.data.id_kota,
                    tahun: res.data.data.tahun,
                    id_kategori_pelatihan: res.data.data.id_kategori_pelatihan,
                    nomor_sertifikat: res.data.data.nomor_sertifikat
                }
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                    formDataPelatihan: temp,
                });
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
            });
        }
    },
    cleanFormPendidikan({ commit, state }) {
        commit('changeDataPendidikan', {
            formDataPendidikan: {
                id_jenjang: '',
                id_negara: '',
                id_kota: '',
                penghargaan: '',
                jurusan: '',
                id_perguruan_tinggi: '',
                tahun_lulus: ''
            },
            idPendidikan: 0
        })
    },
    cleanFormPelatihan({ commit, state }) {
        commit('changeDataPendidikan', {
            formDataPelatihan: {
                name: '',
                penyelenggara: '',
                id_kota: '',
                tahun: '',
                id_kategori_pelatihan: '',
                nomor_sertifikat: ''
            },
            idPelatihan: 0
        })
    },
    async submitFormPendidikan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        })
        const { data } = state
        try {
            const res = await ApiService.post('cv/riwayat_pendidikan', data.formDataPendidikan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
            return false
        }
    },
    async submitFormPelatihan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        })
        const { data } = state
        try {
            const res = await ApiService.post('cv/riwayat_pelatihan', data.formDataPelatihan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
            });
            return false
        }
    },
    async updateFormPendidikan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        })
        const { data } = state
        try {
            const res = await ApiService.put('cv/riwayat_pendidikan/'+data.idPendidikan, data.formDataPendidikan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
            return false
        }
    },
    async updateFormPelatihan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        })
        const { data } = state
        try {
            const res = await ApiService.put('cv/riwayat_pelatihan/'+data.idPelatihan, data.formDataPelatihan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
            });
            return false
        }
    },
    async deletePendidikan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading1: true,
        })
        const { data } = state
        try {
            const res = await ApiService.delete('cv/riwayat_pendidikan/'+data.idPendidikan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPendidikan', {
                    isLoading1: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading1: false,
            });
            return false
        }
    },
    async deletePelatihan({ commit, state }) {
        await commit('changeDataPendidikan', {
            isLoading2: true,
        })
        const { data } = state
        try {
            const res = await ApiService.delete('cv/riwayat_pelatihan/'+data.idPelatihan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
                console.log(res.data)
                return true
            } else {
                await commit('changeDataPendidikan', {
                    isLoading2: false,
                });
                return false
            }
        } catch {
            await commit('changeDataPendidikan', {
                isLoading2: false,
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