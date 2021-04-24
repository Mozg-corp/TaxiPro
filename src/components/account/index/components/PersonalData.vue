<template>
  <div class="personal">
    <div class="personal__img">
      <div
        style="position: relative"
        v-if="avatar"
      >
        <img
          :src="avatar"
          id="avatar"
          alt=""
        >
        <img
          @click="deleteImg()"
          class="delete"
          src="/assets/images/step6/delete.png"
          alt="">
        <img
          @click="addImg()"
          class="addImgToBackend"
          src="/assets/images/step2/Group35.png"
          alt="">
      </div>
      <div
        v-else
        class="personal__addImg"
      >
        <input
          type="file"
          ref="avatar"
          class="personal__input"
          @change="onChangeAvatar('avatar')"
          id="avatar"
          accept="image/*"
        >
        <div
          class="personal__blockOnInput"
          @click="showAvatar"
        >
          <img
            src="/assets/images/account/Frame30.png"
            alt=""
            class="personal__imgOnInput"
          >
          <img
            src="/assets/images/account/plus.png"
            alt=""
            class="personal__imgPlus"
          >
        </div>
      </div>
    </div>
    <div class="personal__data">
      <div class="personal__fio">{{ Surname }}<br>{{ Name}}<br>{{ Patronymic }}</div>
      <div class="personal__phone">
        +{{Phone.substring(0, 1)}}
        ({{Phone.substring(1, 4)}})
        {{Phone.substring(4,7)}}-{{Phone.substring(7,9)}}-{{Phone.substring(9)}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getFromStorage } from '@/store/libs';

export default {
  data() {
    return {
      avatar: '',
      Phone: getFromStorage('phone'),
    };
  },
  name: 'PersonalData',
  computed: {
    ...mapGetters({
      Name: 'profile/getName',
      Surname: 'profile/getSurname',
      Patronymic: 'profile/getPatronymic',
    }),
  },
  methods: {
    showAvatar() {
      this.$refs.avatar.click();
    },
    onChangeAvatar(idName) {
      const input = document.getElementById(idName).files;
      if (input[0]) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.avatar = fileReader.result;
        };
        fileReader.readAsDataURL(input[0]);
      }
    },
    deleteImg() {
      this.avatar = '';
    },
    addImg() {
      // save avatar
      console.log('ok');
    },
  },
};
</script>

<style lang="scss">
.personal {
  display: flex;
  margin-bottom: 20px;
  &__header {
    margin: 20px;
    color: #48B5E2;
  }
  &__body {
    display: flex;
    justify-content: space-around;
  }
  &__img {
    padding: 20px;
  }
  &__addImg {
    cursor: pointer;
  }
  &__data {
    padding: 20px;
    width: 100%;
  }
  &__input {
    display: none;
  }
  &__blockOnInput {
    position: relative;
  }
  &__imgPlus {
    position: absolute;
    right: 2px;
    bottom: 2px;
  }
  &__fio {
    font-family: Montserrat,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  &__phone {
    margin-top: 12px;
  }
}
#avatar {
  width: 92px;
  height: 92px;
  border-radius: 50%;
}
.addImgToBackend {
  cursor: pointer;
  position: absolute;
  right: -11px;
  bottom: -8px;
}
</style>
