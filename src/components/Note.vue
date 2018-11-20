<template>
          <div class="item">
            <div class="meta">{{ updated(entity) }}</div>
            <div class="content">
                <div class="header"
                  @click="open = !open"
                >
                  {{ header(entity) || '新建笔记' }}
                </div>
                <div class="extra">
                    <editor :entity="entity" v-if="open"></editor>
                    {{ words(entity) }} 字
                    <i class = "right floated trash alternate outline icon"
                      @click="destroy(entity)"
                      v-if="open"
                    ></i>
                </div>
            </div>
        </div>
</template>

<script>
import Editor from './Editor'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapGetters([
      'updated',
      'words',
      'header'
    ])
  },
  methods: {
    ...mapActions([
      'destroy'
    ])
  },
  props: [
    'entity'
  ],
  components: {
    Editor
  }
}
</script>

<style scoped>
</style>
