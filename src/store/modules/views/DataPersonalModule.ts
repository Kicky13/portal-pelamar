import ApiService from "@/core/services/ApiService";
import axiosService from '@/core/services/AxiosService';
import { da } from "element-plus/es/locale";

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
            id_kota_lahir: '',
            provinsi: '',
            kota: '',
            gender: 'L',
            marital_status: '',
            nik: '',
            phone: '',
            tgl_lahir: '',
            agama: '',
            email: '',
            ktp: null,
            alamat: '',
        },
        validation: {
            nama: false,
            gelar: false,
            id_kota_lahir: false,
            provinsi: false,
            kota: false,
            gender: false,
            marital_status: false,
            alamat: false,
            nik: false,
            phone: false,
            tgl_lahir: false,
            email: false,
            agama: false,
            ktp: false,
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
                id_kota_lahir: '',
                provinsi: '',
                kota: '',
                gender: 'L',
                marital_status: '',
                nik: '',
                phone: '',
                tgl_lahir: '',
                agama: '',
                email: '',
                ktp: null,
                alamat: '',
            }
        })
    },
    async submitForm({ commit, state }) {
        await commit('changeDataPersonal', {
            isLoading: true,
        })
        const { data } = state
        const formData = new FormData();
        formData.append('nama', data.formData.nama)
        formData.append('gelar', data.formData.gelar)
        formData.append('id_kota_lahir', data.formData.id_kota_lahir)
        formData.append('provinsi', data.formData.provinsi)
        formData.append('kota', data.formData.kota)
        formData.append('gender', data.formData.gender)
        formData.append('marital_status', data.formData.marital_status)
        formData.append('nik', data.formData.nik)
        formData.append('phone', data.formData.phone)
        formData.append('tgl_lahir', data.formData.tgl_lahir)
        formData.append('agama', data.formData.agama)
        formData.append('email', data.formData.email)
        formData.append('ktp', data.formData.ktp)
        formData.append('alamat', data.formData.alamat)

        try {
            const res = await axiosService.post('cv/personal', formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeDataPersonal', {
                    isLoading: false,
                });
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
    async validateForm({ commit, state }) {
        const { data } = state
        let special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let numbers = /\d+/;
        let email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validator = {
            nama: data.formData.nama.length < 4 || special.test(data.formData.nama) || numbers.test(data.formData.nama) ? true : false,
            gelar: data.formData.gelar.length < 4 || numbers.test(data.formData.gelar) ? true : false,
            id_kota_lahir: data.formData.id_kota_lahir == '' || data.formData.id_kota_lahir == null ? true : false,
            provinsi: data.formData.provinsi == '' || data.formData.provinsi == null ? true : false,
            kota: data.formData.kota == '' || data.formData.kota == null ? true : false,
            gender: false,
            marital_status: data.formData.marital_status == '' || data.formData.marital_status == null ? true : false,
            alamat: data.formData.alamat.length < 4 ? true : false,
            nik: data.formData.nik.length < 5 || special.test(data.formData.nik) ? true : false,
            phone: data.formData.phone.length < 8 || special.test(data.formData.phone),
            tgl_lahir: data.formData.tgl_lahir == '' || data.formData.tgl_lahir == null ? true : false,
            email: data.formData.email.length < 4 || !email.test(data.formData.email) ? true : false,
            agama: data.formData.agama == '' || data.formData.agama == null ? true : false,
            ktp: false,
        }
        console.log(validator)
        commit('changeDataPersonal', {
            validation: validator
        })

        if (validator.nama || validator.agama || validator.email || validator.alamat || validator.gelar || validator.gender || validator.kota || validator.nik || validator.provinsi || validator.marital_status || validator.tgl_lahir || validator.id_kota_lahir) {
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