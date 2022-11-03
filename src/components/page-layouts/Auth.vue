<template>
  <div>
    <div class="row auth-login">
      <div
        class="col-sm-6 bg-login d-flex justify-content-center align-items-center"
        :style="
          'background-image: url(' +
          require('@/assets/images/background/bg_login_portal.png') +
          '); background-size: cover'
        ">
        <div class="img-logo">
          <img :src="require('@/assets/images/logo/logo_login.png')" alt="" />
        </div>
      </div>
      <div
        class="col-sm-6 bg-bumn"
        :style="
          'background-image: url(' +
          require('@/assets/images/background/bg_bumn.png') +
          ')'
        ">
        <Form
          class="form-data"
          id="kt_login_signin_form"
          @submit="submitLogin"
          :validation-schema="login">
          <label for="my-input" class="label-data">Login</label>

          <div class="form-group">
            <Field
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="email"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              name="password"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div class="w-100 d-flex flex-row-reverse">
              <router-link to="/reset-password" class="ml-auto lupa-password"
                >Lupa Password</router-link
              >
            </div>
          </div>
          <div class="form-group">
            <vue-recaptcha ref="recaptcha" sitekey="Your key here" />
          </div>
          <div class="form-group">
            <button ref="submitButton" id="kt_sign_in_submit" class="btn btn-success w-100">
              Masuk
            </button>
            <!-- <button class="btn btn-success w-100">Masuk</button> -->
          </div>
          <div class="w-100 d-flex daftar-akun">
            <span
              >Belum punya akun ? Daftar
              <router-link :to="`/registrasi`">Disini</router-link></span
            >
          </div>
          <ButtonBack linkPage="/"></ButtonBack>
        </Form>
        <!-- <footer class="form-data pt-0">
          <ButtonBack linkPage="/"></ButtonBack>
        </footer> -->
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted, watch, nextTick } from 'vue'
import { ErrorMessage, Field, Form } from "vee-validate";
import { VueRecaptcha } from "vue-recaptcha";
import ButtonBack from "@/components/button-back/Back.vue";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import { removeModalBackdrop } from "@/core/helpers/dom";
import * as Yup from "yup";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const submitButton = ref<HTMLButtonElement | null>(null);
    const submitLogin = async (values) => {
      console.log(values)

      await store.dispatch(Actions.LOGIN, values);
      const [errorName] = Object.keys(store.getters.getErrors);
      const error = store.getters.getErrors[errorName];
      console.log(error)

      if (!error) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(function () {
          // Go to page after successfully login
          router.push({ name: "ProfileUser" });
        });
      } else {
        Swal.fire({
          text: error[0],
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }
    };

    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    onMounted(() => {
      //check if current user is authenticated
      if (store.getters.isUserAuthenticated) {
        router.push({ name: "ProfileUser" });
      }

      nextTick(() => {
        reinitializeComponents();
      });
      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        // check if current user is authenticated
        if (store.getters.isUserAuthenticated) {
          router.push({ name: "ProfileUser" });
        }

        removeModalBackdrop();
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );

    return {
      login,
      submitButton,
      submitLogin,
    }
  },
  data() {
    return {
      siteKey: "",
    };
  },
  components: {
    ErrorMessage,
    Field,
    Form,
    VueRecaptcha,
    ButtonBack,
  },
  methods: {
    login() {
      console.log(this.formData);
    },
  },
};
</script>
