<template>
  <div class="home">
    <!-- <div class="card-panel card">
      <div class="card__head">
        <p class="card__title">FirebaseData</p>
        <p>{{ firebaseData }}</p>
        <p class="card__title">Form Data</p>
        <p>{{ formData }}</p>
      </div>
    </div> -->
    <div class="db-info">
      <p v-if="state === 'synced'" class="db-info__text db-info--success">
        Firestoreと同期しました🙆‍♂️
      </p>
      <p
        v-else-if="state === 'modified'"
        class="db-info__text db-info--loading"
      >
        編集中...✍️
      </p>
      <p v-else-if="state === 'revoked'" class="db-info__text db-info--primary">
        最初から👷‍♂️
      </p>
      <p v-else-if="state === 'error'" class="db-info__text db-info--error">
        保存を失敗しました🙅‍♀️ {{ errorMessage }}
      </p>
      <div
        v-else-if="state === 'loading'"
        class="db-info__text db-info--loading"
      >
        読み込み中...
      </div>
    </div>

    <form @submit.prevent="updateFirebase" @input="fieldUpdata">
      <div class="input-field">
        <input type="text" name="name" v-model="formData.name" />
      </div>

      <div class="input-field">
        <input type="email" name="email" v-model="formData.email" />
      </div>

      <div class="input-field">
        <input type="tel" name="phone" v-model="formData.phone" />
      </div>

      <button
        type="submit"
        class="btn btn-small indigo"
        v-if="state === 'modified'"
      >
        変更を保存
      </button>
    </form>

    <button class="btn btn-small white black-text" @click="reverToOriginal()">
      元に戻す
    </button>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min.js';
import { db } from '../firebase';
import debounce from 'debounce';

const documentPath = 'contacts/jeff';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      firebaseData: null,
      formData: {},
      state: 'loading',
      errorMessage: '',

      originalData: null
    };
  },
  firestore() {
    return {
      firebaseData: db.doc(documentPath)
    };
  },
  methods: {
    fieldUpdata() {
      this.state = 'modified';
      this.debouncedUpdate();
    },

    debouncedUpdate: debounce(function() {
      this.updateFirebase();
    }, 1500),
    async updateFirebase() {
      try {
        await db.doc(documentPath).set(this.formData);
        this.state = 'synced';
      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = 'error';
      }
    },
    reverToOriginal() {
      this.state = 'revoked';
      this.formData = { ...this.originalData };
    }
  },
  created: async function() {
    const docRef = db.doc(documentPath);

    let data = (await docRef.get()).data();

    if (!data) {
      data = { name: '', email: '', phone: '' };
      docRef.set(data);
    }

    this.formData = data;
    this.originalData = { ...data };
    this.state = 'synced';
  },

  mounted() {
    M.AutoInit();
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__title {
    font-size: 24px;
    margin: 0 0 16px;
    line-height: 1;
  }
}

.db-info {
  &__text {
    padding: 8px;
  }

  &--success {
    background-color: #ffd600;
  }

  &--loading {
    background-color: #0091ea;
  }

  &--primary {
    background-color: #fff;
  }

  &--error {
    background-color: #ff5252;
  }
}
</style>
