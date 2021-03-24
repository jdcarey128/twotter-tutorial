<template>
  <form class="new-twoot-form__create-twoot" @submit.prevent="createNewTwoot">
    <label for="newTwoot"><strong>New Twoot</strong></label>
    <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>
    
    <div class="user-profile__create-twoot-type">
      <label for="newTwootType"><strong>Type: </strong></label>
      <select id="newTwootType" v-model="selectedTwootType">
        <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
          {{ option.name }}
        </option>
      </select>
    </div>

    <button>
      Twoot!
    </button>
  </form>
</template>

<script>
export default {
  name: "NewTwootForm",
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
          { value: 'draft', name: 'Draft'},
          { value: 'instant', name: 'Instant Twoot'},
      ],
    }
  },
  methods: {
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        console.log('newTwootContent', this.newTwootContent)
        console.log('newTwootType', this.selectedTwootType)
        this.$emit('createNewTwoot', this.newTwootContent)
      }
      this.newTwootContent = ''
    }
  },
}
</script>

<style>
.new-twoot-form__create-twoot {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

#newTwootType {
  margin: 10px 0px;
}
</style>
