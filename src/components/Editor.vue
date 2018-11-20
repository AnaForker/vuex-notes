<template>
        <div class="ui form">
            <div class="field">
                <textarea
                    cols="30"
                    rows="5"
                    placeholder="写点啥..."
                    v-model="entity.body"
                    @input="update(entity)"
                ></textarea>
            </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'update'
    ])
  },
  props: [
    'entity'
  ]
}
</script>

<style scoped>
</style>
