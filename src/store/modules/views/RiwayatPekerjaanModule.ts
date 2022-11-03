import ApiService from "@/core/services/ApiService";
import axios from "axios";

const state = {
    data: {
        isLoading1: false,
        isLoading2: false,
        listPekerjaan1: [],
        listPekerjaan2: [],
        listMinat: [],
        idPekerjaan: 0,
        statusDewan: 0,
        paramDewan1: {
            status_dewan: 0
        },
        paramDewan2: {
            status_dewan: 1
        },
        formData1: {
            jabatan: '',
            tanggal_mulai: '',
            tanggal_akhir: '',
            tupoksi: '',
            nama_instansi: '',
            id_bidang_jabatan: '',
            achievement: '',
            status_dewan: 0,
        },
        formData2: {
            jabatan: '',
            tanggal_mulai: '',
            tanggal_akhir: '',
            tupoksi: '',
            nama_instansi: '',
            id_bidang_jabatan: '',
            achievement: '',
            status_dewan: 1,
        },
        validator1: {
            jabatan: false,
            tanggal_mulai: false,
            tupoksi: false,
            nama_instansi: false,
            id_bidang_jabatan: false,
            achievement: false,
        },
        validator2: {
            jabatan: false,
            tanggal_mulai: false,
            tupoksi: false,
            nama_instansi: false,
            id_bidang_jabatan: false,
            achievement: false,
        }
    },
}

const mutations = {
    changeDataPekerjaan(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getBidangKeminatan({ commit, state }) {
        await commit('changeDataPekerjaan', {
            isLoading1: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('master/bidang_jabatan');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                console.log(res.data.data)
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                    listMinat: res.data.data,
                })
            } else {
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPekerjaan', {
                isLoading1: false,
            });
        }
    },
    async getListPekerjaan1({ commit, state }) {
        await commit('changeDataPekerjaan', {
            isLoading1: true,
        });
        const param = state.data.paramDewan1;
        try {
            const res = await ApiService.post('cv/riwayat_jabatan/show', param);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                    listPekerjaan1: res.data.data,
                });
            } else {
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                });
            }
        } catch {
            await commit('changeDataPekerjaan', {
                isLoading1: false,
            });
        }
    },
    async getListPekerjaan2({ commit, state }) {
        await commit('changeDataPekerjaan', {
            isLoading2: true,
        });
        const param = state.data.paramDewan2;
        try {
            const res = await ApiService.post('cv/riwayat_jabatan/show', param);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPekerjaan', {
                    isLoading2: false,
                    listPekerjaan2: res.data.data,
                });
            } else {
                await commit('changeDataPekerjaan', {
                    isLoading2: false,
                });
            }
        } catch {
            await commit('changeDataPekerjaan', {
                isLoading2: false,
            });
        }
    },
    async getPekerjaanById({ commit, state }) {
        const { data } = state
        if(data.statusDewan == 0){
            await commit('changeDataPekerjaan', {
                isLoading1: true,
            })
        }else{
            await commit('changeDataPekerjaan', {
                isLoading2: true,
            })
        }
        try {
            const res = await ApiService.get('cv/riwayat_jabatan/'+data.idPekerjaan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                const temp = {
                    jabatan: res.data.data.jabatan,
                    tanggal_mulai: res.data.data.tanggal_mulai,
                    tanggal_akhir: res.data.data.tanggal_akhir,
                    tupoksi: res.data.data.tupoksi,
                    nama_instansi: res.data.data.nama_instansi,
                    id_bidang_jabatan: res.data.data.id_bidang_jabatan,
                    achievement: res.data.data.achievement,
                    status_dewan: res.data.data.status_dewan,
                }
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                        formData1: temp,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                        formData2: temp,
                    })
                }
            } else {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
            }
        } catch {
            if(data.statusDewan == 0){
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                })
            }else{
                await commit('changeDataPekerjaan', {
                    isLoading2: false,
                })
            }
        }
    },
    cleanForm1({ commit, state }) {
        commit('changeDataPekerjaan', {
            formData1: {
                jabatan: '',
                tanggal_mulai: '',
                tanggal_akhir: '',
                tupoksi: '',
                nama_instansi: '',
                id_bidang_jabatan: '',
                achievement: '',
                status_dewan: 0,
            },
            idPekerjaan: 0
        })
    },
    cleanForm2({ commit, state }) {
        commit('changeDataPekerjaan', {
            formData2: {
                jabatan: '',
                tanggal_mulai: '',
                tanggal_akhir: '',
                tupoksi: '',
                nama_instansi: '',
                id_bidang_jabatan: '',
                achievement: '',
                status_dewan: 1,
            },
            idPekerjaan: 0
        })
    },
    async submitForm({ commit, state }) {
        const { data } = state
        if(data.statusDewan == 0){
            await commit('changeDataPekerjaan', {
                isLoading1: true,
            })
        }else{
            await commit('changeDataPekerjaan', {
                isLoading2: true,
            })
        }
        try {
            let res;
            if(data.statusDewan == 0){
                res = await ApiService.post('cv/riwayat_jabatan', data.formData1);
            }else{
                res = await ApiService.post('cv/riwayat_jabatan', data.formData2);
            }
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
                console.log(res.data)
                return true
            } else {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
                return false
            }
        } catch {
            if(data.statusDewan == 0){
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                })
            }else{
                await commit('changeDataPekerjaan', {
                    isLoading2: false,
                })
            }
            return false
        }
    },
    async updateForm({ commit, state }) {
        const { data } = state
        if(data.statusDewan == 0){
            await commit('changeDataPekerjaan', {
                isLoading1: true,
            })
        }else{
            await commit('changeDataPekerjaan', {
                isLoading2: true,
            })
        }
        try {
            let res;
            if(data.statusDewan == 0){
                res = await ApiService.put('cv/riwayat_jabatan/'+data.idPekerjaan, data.formData1);
            }else{
                res = await ApiService.put('cv/riwayat_jabatan/'+data.idPekerjaan, data.formData2);
            }
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
                console.log(res.data)
                return true
            } else {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
                return false
            }
        } catch {
            if(data.statusDewan == 0){
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                })
            }else{
                await commit('changeDataPekerjaan', {
                    isLoading2: false,
                })
            }
            return false
        }
    },
    async deletePekerjaan({ commit, state }) {
        const { data } = state
        if(data.statusDewan == 0){
            await commit('changeDataPekerjaan', {
                isLoading1: true,
            })
        }else{
            await commit('changeDataPekerjaan', {
                isLoading2: true,
            })
        }
        try {
            const res = await ApiService.delete('cv/riwayat_jabatan/'+data.idPekerjaan);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
                console.log(res.data)
                return true
            } else {
                if(data.statusDewan == 0){
                    await commit('changeDataPekerjaan', {
                        isLoading1: false,
                    })
                }else{
                    await commit('changeDataPekerjaan', {
                        isLoading2: false,
                    })
                }
                return false
            }
        } catch {
            if(data.statusDewan == 0){
                await commit('changeDataPekerjaan', {
                    isLoading1: false,
                })
            }else{
                await commit('changeDataPekerjaan', {
                    isLoading2: false,
                })
            }
            return false
        }
    },
    async validateForm({commit, state}) {
        const { data } = state
        let validator = {};
        let temp = {};
        if(data.statusDewan == 0){
            temp = data.formData1;
        }else{
            temp = data.formData2;
        }
        Object.entries(temp).forEach(([key, value], index) => {
            if(key != 'status_dewan' && key != 'tanggal_akhir'){
                validator[key] = value == '' || value == null ? true : false;
            }
        });
        console.log(validator)
        if(data.statusDewan == 0){
            commit('changeDataPekerjaan', {
                validator1: validator
            })
        }else{
            commit('changeDataPekerjaan', {
                validator2: validator
            })
        }

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