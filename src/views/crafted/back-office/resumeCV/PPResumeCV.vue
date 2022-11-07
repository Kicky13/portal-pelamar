<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile p-0">
          <div class="body-card">
            <div class="resume-cv">
              <div class="resume-cv__personal">
                <!-- Data Personal -->
                <div class="title d-flex align-items-center">
                  <label for="">Data Personal</label>
                </div>
                <div class="resume-cv__personal__body">
                  <div class="row">
                    <div class="col-sm-6">
                      <table style="width: 100%">
                        <tr>
                          <td class="title-body w-50">Nama</td>
                          <td>:</td>
                          <td class="title-sub-body">{{resumeCVModule.listPersonal.nama}}</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Gelar Akademik</td>
                          <td>:</td>
                          <td class="">{{resumeCVModule.listPersonal.gelar}}</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Jenis Kelamin</td>
                          <td>:</td>
                          <td class="">{{resumeCVModule.listPersonal.gender == 'L' ? 'Laki-laki' : 'Perempuan'}}</td>
                        </tr>
                        <!-- <tr>
                          <td class="title-body w-50">Kewarganegaraan</td>
                          <td>:</td>
                          <td class="t">WNI</td>
                        </tr> -->
                        <tr>
                          <td class="title-body w-50">NIK / Passport</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.nik}}</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Tempat Lahir</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.tempat_lahir}}</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Tanggal Lahir</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.tgl_lahir}}</td>
                        </tr>
                        <!-- <tr>
                          <td class="title-body w-50">Agama</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.agama_desc}}</td>
                        </tr> -->
                      </table>
                    </div>
                    <div class="col-sm-6">
                      <div class="resume-cv__personal__update">
                        <router-link to="/profile//detail-cv/personal" class="btn btn-primary-portal">
                          Ubah Data
                          <img
                            class="mr-2"
                            :src="
                              require('@/assets/images/icon/ic_edit_white.svg')
                            "
                            alt="" />
                        </router-link>
                      </div>
                      <table style="width: 100%">
                        <!-- <tr>
                          <td class="title-body w-50">Golongan Darah</td>
                          <td>:</td>
                          <td class="">B</td>
                        </tr> -->
                        <tr>
                          <td class="title-body w-50">Agama</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.agama_desc}}</td>
                        </tr>
                        <!-- <tr>
                          <td class="title-body w-50">Suku</td>
                          <td>:</td>
                          <td class="">JAWA</td>
                        </tr> -->
                        <tr>
                          <td class="title-body w-50">Alamat</td>
                          <td class="">:</td>
                          <td class="">
                            {{resumeCVModule.listPersonal.alamat}}
                          </td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Email</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.email}}</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">No Handphone</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.phone}}</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Status Kawin</td>
                          <td>:</td>
                          <td class="t">{{resumeCVModule.listPersonal.status_kawin}}</td>
                        </tr>
                        <!-- <tr>
                          <td class="title-body w-50">NPWP</td>
                          <td>:</td>
                          <td class="t">689876700017000</td>
                        </tr> -->
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Data Personal -->

                <hr />
                <!-- Personifikasi -->
                <div class="title d-flex align-items-center">
                  <label for="">Personifikasi</label>
                </div>
                <div class="resume-cv__personal__body">
                  <div class="content_personifikasi">
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Nilai Pribadi</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          {{resumeCVModule.listPersonifikasi.nilai_pribadi}}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Visi Pribadi</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          {{resumeCVModule.listPersonifikasi.visi_pribadi}}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Aspirasi Bidang</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          Kesehatan, Human Capital, Digitalisasi dan IT
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Akun Sosial Media</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi" v-html="resumeCVModule.sosmed != '' ? resumeCVModule.sosmed : '-'">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Personifikasi -->
                <!-- Riwayat Pekerjaan -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Riwayat Pekerjaan</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="riwayatPekerjaanModule.isLoading1"
                    :data="riwayatPekerjaanModule.listPekerjaan1"
                    :header="riwayatPekerjaanModule.tableHeader">
                    <template v-slot:jabatan="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.jabatan }}<br>
                      {{ listPekerjaan1.nama_instansi }}
                    </template>
                    <template v-slot:tanggal_mulai="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.tanggal_mulai }}
                    </template>
                    <template v-slot:tanggal_akhir="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.tanggal_akhir }}
                    </template>
                    <template v-slot:tupoksi="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.tupoksi }}
                    </template>
                    <template v-slot:achievement="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.achievement }}
                    </template>
                    <template v-slot:bidang_jabatan="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.bidang.name }}
                    </template>
                  </KTDatatable>
                </div>
                <!-- Riwayat Pekerjaan -->

                <!-- Riwayat Pekerjaan Dewan -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Penugasan yang berkaitan dengan Dewan Komisaris/Dewan Pengawas</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="riwayatPekerjaanModule.isLoading2"
                    :data="riwayatPekerjaanModule.listPekerjaan2"
                    :header="riwayatPekerjaanModule.tableHeader">
                    <template v-slot:jabatan="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.jabatan }}<br>
                      {{ listPekerjaan2.nama_instansi }}
                    </template>
                    <template v-slot:tanggal_mulai="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.tanggal_mulai }}
                    </template>
                    <template v-slot:tanggal_akhir="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.tanggal_akhir }}
                    </template>
                    <template v-slot:tupoksi="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.tupoksi }}
                    </template>
                    <template v-slot:achievement="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.achievement }}
                    </template>
                    <template v-slot:bidang_jabatan="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.bidang.name }}
                    </template>
                  </KTDatatable>
                </div>
                <!-- Riwayat Pekerjaan -->

                <!-- Keanggotan Organisasi -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Keanggotaan Organisasi</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="dataOrganisasiModule.isLoading"
                    :data="dataOrganisasiModule.listOrganisasi"
                    :header="dataOrganisasiModule.tableHeader">
                    <template v-slot:jabatan="{ row: listOrganisasi }">
                      {{ listOrganisasi.jabatan }}<br>
                      {{ listOrganisasi.nama_organisasi }}
                    </template>
                    <template v-slot:tanggal_mulai="{ row: listOrganisasi }">
                      {{ listOrganisasi.tanggal_mulai }}
                    </template>
                    <template v-slot:tanggal_akhir="{ row: listOrganisasi }">
                      {{ listOrganisasi.tanggal_akhir }}
                    </template>
                    <template v-slot:uraian_kegiatan="{ row: listOrganisasi }">
                      {{ listOrganisasi.uraian_kegiatan }}
                    </template>
                    <template v-slot:jenis_organisasi="{ row: listOrganisasi }">
                      {{ listOrganisasi.jenis_org.name }}
                    </template>
                  </KTDatatable>
                </div>
                <!-- Keanggotaan Organisasi -->

                <!-- Pendidikan & Pelatihan -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Riwayat Pendidikan Formal</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="pendidikanPelatihanModule.isLoading1"
                    :data="pendidikanPelatihanModule.listPendidikan"
                    :header="pendidikanPelatihanModule.tableHeader">
                    <template v-slot:jenjang="{ row: listPendidikan }">
                      {{ listPendidikan.jenjang.name }} - {{ listPendidikan.perguruan_tinggi.name }}
                    </template>
                    <template v-slot:tahun_lulus="{ row: listPendidikan }">
                      {{ listPendidikan.tahun_lulus }}
                    </template>
                    <template v-slot:jurusan="{ row: listPendidikan }">
                      {{ listPendidikan.jurusan }}
                    </template>
                    <template v-slot:kota="{ row: listPendidikan }">
                      {{ listPendidikan.kota.nama }}, {{ listPendidikan.negara.nama }}
                    </template>
                    <template v-slot:penghargaan="{ row: listPendidikan }">
                      {{ listPendidikan.penghargaan }}
                    </template>
                  </KTDatatable>
                </div>

                <div class="title d-flex align-items-center border-top">
                  <label for="">Riwayat Pelatihan</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="pendidikanPelatihanModule.isLoading2"
                    :data="pendidikanPelatihanModule.listPelatihan"
                    :header="pendidikanPelatihanModule.tableHeader2">
                    <template v-slot:nama="{ row: listPelatihan }">
                      {{ listPelatihan.name }}
                    </template>
                    <template v-slot:tahun="{ row: listPelatihan }">
                      {{ listPelatihan.tahun }}
                    </template>
                    <template v-slot:penyelenggara="{ row: listPelatihan }">
                      {{ listPelatihan.penyelenggara }}
                    </template>
                    <template v-slot:kota="{ row: listPelatihan }">
                      {{ listPelatihan.kota.nama }}
                    </template>
                    <template v-slot:kategori="{ row: listPelatihan }">
                      {{ listPelatihan.kategori.name }}
                    </template>
                    <template v-slot:no_sertifikat="{ row: listPelatihan }">
                      {{ listPelatihan.nomor_sertifikat }}
                    </template>
                  </KTDatatable>
                </div>
                <!-- Pendidikan & Pelatihan -->

                <!-- Publikasi -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Publikasi</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :data="publikasiModule.listPublikasi"
                    :header="publikasiModule.column">
                    <template v-slot:judul="{ row: data }">
                      {{ data.judul }}
                    </template>
                    <template v-slot:media="{ row: data }">
                      {{ data.media }}
                    </template>
                    <template v-slot:tahun="{ row: data }">
                      {{ data.tahun }}
                    </template>
                  </KTDatatable>
                </div>
                <!-- Publikasi -->

                <!-- Narasumber -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Narasumber</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="narasumberModule.isLoading"
                    :data="narasumberModule.listNarasumber"
                    :header="narasumberModule.column">
                    <template v-slot:nama_acara="{ row: listNarasumber }">
                      {{ listNarasumber.nama_acara }}
                    </template>
                    <template v-slot:tahun="{ row: listNarasumber }">
                      {{ listNarasumber.tahun }}
                    </template>
                    <template v-slot:jumlah_peserta="{ row: listNarasumber }">
                      {{ listNarasumber.jumlah_peserta }}
                    </template>
                    <template v-slot:penyelenggara="{ row: listNarasumber }">
                      {{ listNarasumber.penyelenggara }}
                    </template>
                    <template v-slot:lokasi="{ row: listNarasumber }">
                      {{ listNarasumber.lokasi }}
                    </template>
                  </KTDatatable>
                </div>
                <!-- Narasumber -->

                <!-- Referensi -->
                <div class="title d-flex align-items-center border-top">
                  <label for="">Referensi</label>
                </div>

                <div class="container">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="dataReferensiModule.isLoading"
                    :data="dataReferensiModule.listReferensi"
                    :header="dataReferensiModule.tableHeader">
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
                  </KTDatatable>
                </div>
                <!-- Referensi -->
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
import { mapState, mapActions } from "vuex";

export default {
  name: "BackOfficeResumeCV",
  data() {
    return {
      title: "Resume CV",
      tableHeader: [
        {
          columnName: "Order id",
          columnLabel: "order",
          sortEnabled: false,
        },
        {
          columnName: "Amount",
          columnLabel: "amount",
          sortEnabled: false,
        },
        {
          columnName: "Status",
          columnLabel: "status",
          sortingField: "status.label",
          sortEnabled: false,
        },
        {
          columnName: "Date",
          columnLabel: "date",
          sortEnabled: false,
        },
        {
          columnName: "Invoice",
          columnLabel: "invoice",
          sortEnabled: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      resumeCVModule: (state) => state.resumeCVModule.data,
      riwayatPekerjaanModule: (state) => state.riwayatPekerjaanModule.data,
      dataOrganisasiModule: (state) => state.dataOrganisasiModule.data,
      pendidikanPelatihanModule: (state) => state.pendidikanPelatihanModule.data,
      publikasiModule: (state) => state.publikasiModule.data,
      narasumberModule: (state) => state.narasumberModule.data,
      dataReferensiModule: (state) => state.dataReferensiModule.data,
    })
  },
  mounted() {
    this.getDataPersonal(),
    this.getPersonifikasi(),
    this.getListPekerjaan1(),
    this.getListPekerjaan2(),
    this.getListOrganisasi(),
    this.getListPendidikan(),
    this.getListPelatihan(),
    this.getPublikasi(),
    this.getNarasumber(),
    this.getListReferensi()
  },
  methods: {
    ...mapActions('resumeCVModule', [
      'getDataPersonal',
      'getPersonifikasi'
    ]),
    ...mapActions('riwayatPekerjaanModule', [
      'getListPekerjaan1',
      'getListPekerjaan2',
    ]),
    ...mapActions('dataOrganisasiModule', [
      'getListOrganisasi'
    ]),
    ...mapActions('pendidikanPelatihanModule', [
      'getListPendidikan',
      'getListPelatihan'
    ]),
    ...mapActions('publikasiModule', [
      'getPublikasi'
    ]),
    ...mapActions('narasumberModule', [
      'getNarasumber'
    ]),
    ...mapActions('dataReferensiModule', [
      'getListReferensi'
    ]),
  },
  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
