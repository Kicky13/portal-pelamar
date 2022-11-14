import ApiService from "@/core/services/ApiService";

const state = {
    data: {
        isLoading: false,
        formData: {
            password: '',
            new_password: '',
            re_password: '',
        },
        validator: {
            password: false,
            new_password: false,
            re_password: false,
        },
    },
}

const mutations = {
    changePassword(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async storeNewPassword({ commit, state }) {
        const { data } = state
        await commit('changePassword', {
            isLoading: true,
        });
        try {
            const res = await ApiService.post('user/update_password', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changePassword', {
                    isLoading: false,
                });
                return true
            } else {
                await commit('changePassword', {
                    isLoading: false,
                });
                return false
            }
        } catch {
            await commit('changePassword', {
                isLoading: false,
            });
            return false;
        }
    },
    cleanForm({ commit, state }) {
        commit('changePassword', {
            formData: {
                password: '',
                new_password: '',
                re_password: '',
            },
        })
    },
    async validateForm({commit, state}) {
        const { data } = state
        let validator = {
            password: data.formData.password == '' || data.formData.password == null ? true : false,
            new_password: data.formData.new_password == '' || data.formData.new_password == null ? true : false,
            re_password: data.formData.re_password != data.formData.new_password ? true : false,
        }
        commit('changePassword', {
            validator: validator
        })
        if (validator.password || validator.new_password || validator.re_password) {
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