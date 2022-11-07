import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        formData: {
            name: '',
            nik: '',
            email: '',
            password: '',
            confirm_password: '',
            nama_role: 'test',
        },
        validator: {
            name: false,
            nik: false,
            email: false,
            password: false,
            confirm_password: false,
            nama_role: false,
        },
    },
}

const mutations = {
    changeRegisterState(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async validateForm({commit, state}) {
        const { data } = state
        const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validating = {
            name: (data.formData.name == '' || data.formData.name == null) ? true : false,
            nik: (data.formData.nik == '' || data.formData.nik == null) ? true : false,
            email: (data.formData.email == '' || data.formData.email == null || !email.test(data.formData.email)) ? true : false,
            password: (data.formData.password == '' || data.formData.password == null) ? true : false,
            confirm_password: (data.formData.confirm_password == '' || data.formData.confirm_password == null) ? true : false,
            nama_role: false,
        };
        commit('changeRegisterState', {
            validator: validating,
        })

        if (validating.name || validating.nik || validating.email || validating.password || validating.confirm_password) {
            return false;
        } else {
            return true;
        }
    },

    async storeRegister({commit, state}) {
        await commit('changeRegisterState', {
            isLoading: true,
        })
        const { data } = state
        try {
            const res = await ApiService.post('register', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changeRegisterState', {
                    isLoading: false,
                });
                return {
                    data: res.data,
                    status: true,
                }
            } else {
                await commit('changeRegisterState', {
                    isLoading: false,
                });
                return {
                    data: res.data,
                    status: false,
                }
            }
        } catch {
            await commit('changeRegisterState', {
                isLoading: false,
            });
            return {
                data: null,
                status: false,
            }
        }
    },

    clearForm({commit, state}) {
        commit('changeRegisterState', {
            formData: {
                name: '',
                nik: '',
                email: '',
                password: '',
                confirm_password: '',
                nama_role: 'test',
            },
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}