<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card">
            <span>Data Personal</span>
          </div>
          <div class="body-card">
            <div class="container personal">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Lengkap<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Gelar Akademik<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="password"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Tempat Lahir<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-50"
                        placeholder="Select..."
                        as="select">
                        <option value="Dalam Negeri">Dalam Negeri</option>
                        <option value="Luar Negeri">Dalam Negeri</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="d-flex align-items-center">
                      <label
                        for="inputPassword"
                        class="col-sm-3 col-form-label personal__label"
                        >Provinsi<span class="text-danger">*</span>
                      </label>
                      <div class="col-sm-4">
                        <select
                          style="margin-left: 5px"
                          class="custom_form_select w-100"
                          placeholder="Select..."
                          as="select">
                          <option value="Dalam Negeri">Dalam Negeri</option>
                          <option value="Luar Negeri">Dalam Negeri</option>
                        </select>
                      </div>
                      <label
                        for="inputPassword"
                        style="margin-left: 10px"
                        class="col-sm-1 col-form-label personal__label"
                        >Kota<span class="text-danger">*</span>
                      </label>
                      <div class="col-sm-4">
                        <select
                          class="custom_form_select w-100"
                          placeholder="Select..."
                          as="select">
                          <option value="Dalam Negeri">Dalam Negeri</option>
                          <option value="Luar Negeri">Dalam Negeri</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Jenis Kelamin<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <div class="form-check mb-4 p-0">
                        <input
                          class="custom_form_check"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios1">
                          Laki - Laki
                        </label>
                      </div>
                      <div class="form-check p-0">
                        <input
                          class="custom_form_check"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2" />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios2">
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Status<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select">
                        <option value="Dalam Negeri">Dalam Negeri</option>
                        <option value="Luar Negeri">Dalam Negeri</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >NIK<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control personal__form"
                        id="inputPassword" />
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
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Tanggal Lahir<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="date"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Alamat Email<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Agama<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select">
                        <option value="Dalam Negeri">Dalam Negeri</option>
                        <option value="Luar Negeri">Dalam Negeri</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Alamat Lengkap<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <textarea
                        name=""
                        id=""
                        rows="10"
                        class="w-100 custom_textarea"></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Upload File KTP<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <input type="file" id="upload" hidden />
                      
                      <label for="upload" class="label-upload w-100">Pilih atau taruh file disini</label>
                    </div>
                  </div>
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
import { Field, ErrorMessage } from "vee-validate";

export default {
  name: "BackOfficeDataPersonal",
  data() {
    return {
      title: "Data Personal",
    };
  },

  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
};
</script>
