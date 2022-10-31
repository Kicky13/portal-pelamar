<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span>Referensi</span>

            <div class="sub-title-card">
              berasal dari pihak internal maupun eksternal perusahaan
            </div>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.nama_ref"
                        id="inputNamaRef" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.jabatan"
                        id="inputJabatan" />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Perusahaan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.perusahaan"
                        id="inputPerusahaan" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >No Handphone<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9 d-flex align-items-center">
                      <div class="flag-id">
                        <div class="flag-red"></div>
                        <div class="flag-white"></div>
                      </div>
                      <label for="" class="number-id">+62</label>
                      <input
                        type="number"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.no_hp"
                        id="inputNoHp" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!dataReferensiModule.isLoading && dataReferensiModule.idReferensi == 0" @click="submit" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Referensi
                    </button>
                    <button v-else-if="!dataReferensiModule.isLoading && dataReferensiModule.idReferensi != 0" @click="update" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update Referensi
                    </button>
                    <button v-else @click="submit" disabled class="btn btn-primary-portal">
                      <span class="indicator-label">Mohon Tunggu
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2">
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="dataReferensiModule.isLoading"
                    :data="dataReferensiModule.listReferensi"
                    :header="tableHeader">
                    <template v-slot:nama="{ row: listReferensi }">
                      {{ listReferensi.nama_ref }}
                    </template>
                    <template v-slot:jabatan="{ row: listReferensi }">
                      {{ listReferensi.jabatan }}
                    </template>
                    <template v-slot:perusahaan="{ row: listReferensi }">
                      {{ listReferensi.perusahaan }}
                    </template>
                    <template v-slot:no_hp="{ row: listReferensi }">
                      {{ listReferensi.no_hp }}
                    </template>
                    <template v-slot:action="{ row: listReferensi }">
                      <button @click="edit(listReferensi.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="delReferensi(listReferensi.id)" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </template>
                  </KTDatatable>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <router-link to="#" class="btn btn-transparent-portal-soft"
                      >Kembali</router-link
                    >

                    <router-link to="#" class="btn btn-success-portal-soft"
                      >Selanjutnya</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutProfileAside>
</template>
<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";
import KTDatatable from "@/components/kt-datatable/KTDataTable.vue";
import { Field, ErrorMessage } from "vee-validate";
import { mapState, mapActions } from "vuex";

export default {
  name: "BackOfficeReferensi",
  data() {
    return {
      title: "Data Referensi",
      tableHeader: [
        {
          columnName: "nama",
          columnLabel: "nama",
          sortEnabled: false,
        },
        {
          columnName: "jabatan",
          columnLabel: "jabatan",
          sortEnabled: false,
        },
        {
          columnName: "perusahaan",
          columnLabel: "perusahaan",
          sortEnabled: false,
        },
        {
          columnName: "No Handphone",
          columnLabel: "no_hp",
          sortEnabled: false,
        },
        {
          columnName: "Action",
          columnLabel: "action",
          sortEnabled: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      dataReferensiModule: (state) => state.dataReferensiModule.data,
    })
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getListReferensi(),
    this.cleanForm()
  },
  methods: {
    ...mapActions('dataReferensiModule', [
      'getListReferensi',
      'getReferensiById',
      'submitForm',
      'updateForm',
      'deleteReferensi',
      'cleanForm'
    ]),
    async submit() {
      const submit = await this.submitForm()
      if (submit) {
        this.getListReferensi();
        this.cleanForm();
        console.log('Submit Berhasil');
      } else {
        console.log('Submit Error');
      }
    },
    async edit(id){
      this.$store.commit('dataReferensiModule/changeDataReferensi', {
        idReferensi: id
      })
      await this.getReferensiById()
    },
    async update() {
      const update = await this.updateForm()
      if (update) {
        this.getListReferensi();
        this.cleanForm();
        console.log('Update Berhasil');
      } else {
        console.log('Update Error');
      }
    },
    async delReferensi(id) {
      this.$store.commit('dataReferensiModule/changeDataReferensi', {
        idReferensi: id
      })
      const del = await this.deleteReferensi()
      if (del) {
        this.getListReferensi();
        this.cleanForm();
        console.log('Delete Berhasil');
      } else {
        console.log('Delete Error');
      }
    }
  },

  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
