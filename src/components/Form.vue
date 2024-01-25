<template>
  <div>
    <form
        id="formy"
        @submit.prevent="checkForm"
        action="https:vuejs.org"
        method="POST"
    >

      <p class="text-red" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label class="form-label" for="first-name">Name</label>
        <input
            id="first-name"
            name="name"
            class="form-control"
            type="text"
            v-model="firstName"
            placeholder="Your name"
        >
      </p>

      <p>
        <label class="form-label" for="last-name">Last name</label>
        <input
            id="last-name"
            name="last-name"
            class="form-control"
            type="text"
            v-model="last_name"
            placeholder="Your last name"
        >
      </p>


      <p>
        <label for="second-last-name">Second last name (optional)</label>
        <input
            id="second-last-name"
            name="second-last-name"
            class="form-control"
            type="text"
            v-model="second_last_name"
            placeholder="Your second last name"
        >
      </p>

      <p>
        <label class="form-label" for="address">Address (Zip code, street, number, city)</label>
        <input
            id="address"
            name="address"
            class="form-control"
            type="text"
            v-model="address"
            placeholder="Your address"
        >
      </p>

      <p>
        <label class="form-label" for="birthdate">Birth date (18+)</label>
        <b-form-datepicker
            id="birthdate"
            name="birthdate"
            v-model="birthdate"
            :max="maximumDate"
            :min="minimumDate"
            :show-decade-nav="true"
            placeholder="Your birth date"
        >
        </b-form-datepicker>
      </p>

      <p>
        <label class="form-label" for="email">E-mail</label>
        <input
            id="email"
            name="email"
            class="form-control"
            type="email"
            v-model="email"
            placeholder="Your e-mail"
        >
      </p>

      <p>
        <label class="form-label" for="phone-number">Phone Number (10 digits)</label>
        <input
            id="phone-number"
            name="phone-number"
            class="form-control"
            type="number"
            v-model="phoneNumber"
            placeholder="Your phone number"
        >
      </p>

      <p>
        <label class="form-label" for="photo">Profile photo (PNG)</label>
        <b-form-file
            id="photo"
            name="photo"
            v-model="photo"
            accept="image/png"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            :state="Boolean(photo)"
            plain
        >
        </b-form-file>
      </p>
      <p>
        <input
            type="submit"
            value="Submit"
            class="btn btn-primary"
        >
      </p>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      errors: [],
      firstName: null,
      last_name: null,
      second_last_name: null,
      address: null,
      birthdate: null,
      email: null,
      phoneNumber: null,
      photo: null,

      minimumDate: this.calculateDateForForm(120),
      maximumDate: this.calculateDateForForm(18)

    }
  },

  methods: {

    calculateDateForForm(yearsBack) {
      const today = new Date();
      return new Date(today.setFullYear(today.getFullYear() - yearsBack)).toISOString().split('T')[0];
    },

    checkForm() {
      this.errors = [];

      if (!this.firstName) {
        this.errors.push('First name required.');
      }

      if (!this.last_name) {
        this.errors.push('Last name required.');
      }

      if (!this.address) {
        this.errors.push('Address required.');
      }

      if (this.address && !this.validateRegex(/^[a-zA-Z0-9\s\-\.#]+$/, this.address)) {
        this.errors.push('Address does not allow special characters.');
      }

      if (!this.birthdate) {
        this.errors.push('Birth date required.');
      }

      if (this.birthdate >= new Date()) {
        this.errors.push('Birth date must be in the past.');
      }

      if (this.birthdate >= new Date().getFullYear() - 18) {
        this.errors.push('You must be 18+ to use this form.');
      }

      if (!this.email) {
        this.errors.push('Email required.');
      }

      if (this.email && !this.validateRegex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, this.email)) {
        this.errors.push('Invalid email.');
      }

      if (!this.phoneNumber) {
        this.errors.push('Phone number required.');
      }

      if (this.phoneNumber && !this.validateRegex(/^[0-9]{10}$/, this.phoneNumber)) {
        this.errors.push('Phone number must be 10 digits.');
      }

      if (!this.photo) {
        this.errors.push('Photo required.');
      }

      if (this.photo && this.photo.size > 3000000) {
        this.errors.push('File must be maximum 3mb.');
      }

      if (this.photo && !this.validateRegex(/(.*?)\.(png)$/, this.photo.name)) {
        this.errors.push('File must be PNG.');
      }

      if (!this.errors.length) {
        alert('Form submitted!');
        return true;
      }
    },

    validateRegex(regex, value) {
      return regex.test(value);
    }
  }
}
</script>

<style>
.text-red {
  color: red;
}

.form-control-file {
  width: 100%;

}
</style>