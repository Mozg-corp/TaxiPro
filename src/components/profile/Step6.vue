<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>6</strong>/6
    </div>
  </div>
  <div class="addImg">
    <h1 class="addImg__header">Добавьте фотографии</h1>
    <div class="addImg__passport">
      <div class="downloadPassport">
        <h2 class="downloadPassport__header">Паспорт</h2>
        <div class="downloadPassport__body">
          <div
            style="position: relative"
            v-if="passport_1"
          >
            <img
              :src="passport_1"
              id="imgForPassport1"
              alt=""
            >
            <img
              @click="deleteImg(0)"
              class="delete"
              src="/assets/images/step6/delete.png"
              alt="">
          </div>
          <div
            v-else
            class="downloadPassport__img"
          >
            <input
              type="file"
              ref="passport_1"
              class="downloadPassport__input"
              @change="onChangePassport('passport_1', 0)"
              id="passport_1"
              accept="image/*"
            >
            <div
              class="downloadPassport__blockOnInput downloadPassport_passport_1"
              @click="showFileForPassport1"
            >
              <img
                src="/assets/images/step6/Vector.png"
                alt=""
                class="downloadPassport__imgOnInput"
              >
            </div>
          </div>
          <div
            style="position: relative"
            v-if="passport_2"
          >
          <img
            :src="passport_2"
            id="imgForPassport2"
            alt=""
          >
            <img
              @click="deleteImg(1)"
              class="delete"
              src="/assets/images/step6/delete.png"
              alt="">
          </div>
          <div
            v-else
            class="downloadPassport__img"
          >
            <input
              type="file"
              ref="passport_2"
              class="downloadPassport__input"
              @change="onChangePassport('passport_2', 1)"
              id="passport_2"
              accept="image/*"
            >
            <div
              class="downloadPassport__blockOnInput downloadPassport_passport_2"
              @click="showFileForPassport2"
            >
              <img
                src="/assets/images/step6/Vector.png"
                alt=""
                class="downloadPassport__imgOnInput">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="addImg__driverLesson">
      <div class="downloadDriverLesson">
        <h2 class="downloadDriverLesson__header">
          Водительское удостоверение
        </h2>
        <div class="downloadDriverLesson__body">
          <div
            style="position: relative"
            v-if="driver_1"
          >
            <img
              :src="driver_1"
              id="imgForDriver1"
              alt=""
            >
            <img
              @click="deleteImg(2)"
              class="delete"
              src="/assets/images/step6/delete.png"
              alt="">
          </div>
          <div
            v-else
            class="downloadDriverLesson__img"
          >
            <input
              type="file"
              class="downloadDriverLesson__input"
              ref="driver_1"
              @change="onChangePassport('driver_1', 2)"
              id="driver_1"
              accept="image/*"
            >
            <div
              class="downloadDriverLesson__blockOnInput downloadDriverLesson_driver_1"
              @click="showFileForDriver1"
            >
              <img
                src="/assets/images/step6/Vector.png"
                alt=""
                class="downloadDriverLesson__imgOnInput"
              >
            </div>
          </div>
          <div
            style="position: relative"
            v-if="driver_2"
          >
            <img
              :src="driver_2"
              id="imgForDriver2"
              alt=""
            >
            <img
              @click="deleteImg(3)"
              class="delete"
              src="/assets/images/step6/delete.png"
              alt="">
          </div>
          <div
            v-else
            class="downloadDriverLesson__img"
          >
            <input
              type="file"
              class="downloadDriverLesson__input"
              ref="driver_2"
              @change="onChangePassport('driver_2', 3)"
              id="driver_2"
              accept="image/*"
            >
            <div
              class="downloadDriverLesson__blockOnInput downloadDriverLesson_driver_2"
              @click="showFileForDriver2"
            >
              <img
                src="/assets/images/step6/Vector.png"
                alt=""
                class="downloadDriverLesson__imgOnInput"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="addImg__footer">
      Убедитесь, что нет бликов, <br>
      и все данные хорошо видны
    </div>
  </div>
  <router-link
    :to="'Step6'"
    class="button routerLink"
  >
    <button
      :disabled="!isAllInputsCorrect"
      class="button routerLink"
    >
      Отправить фотографии
    </button>
  </router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      passport_1: '',
      passport_2: '',
      driver_1: '',
      driver_2: '',
    };
  },
  methods: {
    showFileForPassport1() {
      this.$refs.passport_1.click();
    },
    showFileForPassport2() {
      this.$refs.passport_2.click();
    },
    showFileForDriver1() {
      this.$refs.driver_1.click();
    },
    showFileForDriver2() {
      this.$refs.driver_2.click();
    },
    onChangePassport(idName, id) {
      const inputPassport1 = document.getElementById(idName).files;
      if (inputPassport1[0]) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (id === 0) {
            this.passport_1 = fileReader.result;
          } else if (id === 1) {
            this.passport_2 = fileReader.result;
          } else if (id === 2) {
            this.driver_1 = fileReader.result;
          } else if (id === 3) {
            this.driver_2 = fileReader.result;
          }
        };
        fileReader.readAsDataURL(inputPassport1[0]);
      }
    },
    deleteImg(id) {
      if (id === 0) {
        this.passport_1 = '';
      } else if (id === 1) {
        this.passport_2 = '';
      } else if (id === 2) {
        this.driver_1 = '';
      } else if (id === 3) {
        this.driver_2 = '';
      }
    },
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.passport_1
        && this.passport_2
        && this.driver_1
        && this.driver_2);
    },
  },
  name: 'Step6',
};
</script>

<style lang="scss">

.addImg {
  &__header {
    margin: 20px;
  }
  &__passport{}
  &__driverLesson {}
  &__footer {
    text-align: center;
    color: #48B5E2;
    margin-top: 50px;
    margin-bottom: 20px;
  }
}
.downloadPassport,
.downloadDriverLesson {
  margin-bottom: 20px;
  &__header {
    margin: 20px;
    color: #48B5E2;
  }
  &__body {
    display: flex;
    justify-content: space-around;
  }
  &__img {}
  &__input {
    display: none;
  }
  &__blockOnInput {
    width: 122px;
    border-radius: 7px;
    display: inline-block;
    height: 74px;
    border: 1px solid #48B5E2;
    text-align: center;
    line-height: 103px;
  }
  &_passport_1{
    background: url(/assets/images/step6/Frame26.png) center center no-repeat;
  }
  &_passport_2 {
    background: url(/assets/images/step6/153637941.png) center center no-repeat;
  }
  &_driver_1 {
    background: url(/assets/images/step6/Frame28.png) center center no-repeat;
  }
  &_driver_2 {
    background: url(/assets/images/step6/unnamed1.png) center center no-repeat;
  }
}

#imgForPassport1,
#imgForPassport2,
#imgForDriver1,
#imgForDriver2 {
  width: 124px;
  height: 76px;
  border-radius: 7px;
}
.delete {
  position: absolute;
  top: -8px;
  right: -8px;
  cursor: pointer;
}

</style>
