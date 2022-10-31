import ApiService from "@/core/services/ApiService";
import { ref } from "vue";

const state = {
    data: {
        isLoading: false,
        isSubmitLoading: false,
        listPublikasi: ref([]),
        column: [
            {
                columnName: "judul_publikasi",
                columnLabel: "Judul Publikasi",
            },
            {
                columnName: "media_publikasi",
                columnLabel: "Media Publikasi",
            },
            {
                columnName: "tahun",
                columnLabel: "Tahun",
            },
            {
                columnName: "action",
                columnLabel: "Action",
            },
        ],
        formData: {
            judul_publikasi: '',
            media_publikasi: '',
            tahun: '',
        },
        validator: {
            judul_publikasi: false,
            media_publikasi: false,
            tahun: false,
        },
    },
}

const mutations = {
    changePublikasi(state, payload) {
        state.data = Object.assign({}, state.data, payload)
    },
}

const actions = {
    async getPublikasi({ commit, state }) {
        await commit('changePublikasi', {
            isLoading: true,
        });
        const { data } = state
        try {
            const res = await ApiService.get('cv/publikasi');
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changePublikasi', {
                    isLoading: false,
                    listPublikasi: ref(res.data.data),
                })
            } else {
                await commit('changePublikasi', {
                    isLoading: false,
                });
            }
        } catch {
            await commit('changePublikasi', {
                isLoading: false,
            });
        }
    },
    async storePublikasi({commit, state}) {
        const { data } = state

        await commit('changePublikasi', {
            isSubmitLoading: false,
        });

        try {
            const res = await ApiService.post('cv/publikasi', data.formData);
            if (res.data.status_code == `201` || res.data.status_code == 201) {
                await commit('changePublikasi', {
                    isSubmitLoading: false,
                });
                return true
            } else {
                await commit('changePublikasi', {
                    isSubmitLoading: false,
                });
                return false
            }
        } catch {
            await commit('changePublikasi', {
                isSubmitLoading: false,
            });
            return false
        }
    },

    async validateForm({commit, state}) {
        const { data } = state
        let validator = {
            judul_publikasi: data.formData.judul_publikasi.length < 1 || data.formData.judul_publikasi == null ? true : false,
            media_publikasi: data.formData.media_publikasi.length == '' || data.formData.media_publikasi == null ? true : false,
            tahun: data.formData.tahun.length == '' || data.formData.tahun == null ? true : false,
        }
        console.log(validator)
        commit('changePublikasi', {
            validator: validator
        })

        if (validator.judul_publikasi || validator.tahun || validator.media_publikasi) {
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