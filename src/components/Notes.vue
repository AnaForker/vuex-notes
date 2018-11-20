<template>
        <div class="ui container notes">
            <h4 class="ui horizontal divider header">
                <i class="bookmark outline icon"></i>
                Notes App with Vue.js
            </h4>
            <message
                message-text = "点击 <strong>添加笔记</strong> 按钮可新增笔记，点击 <strong>笔记标题</strong> 可显示笔记详情及编辑笔记，点击 <strong><i class='trash alternate outline icon'></i></strong> 可删除笔记，笔记可自动保存且存储在您的电脑上。"
            ></message>
            <a class="ui right floated basic violet button" @click="create">添加笔记</a>
            <div class="ui divided items">
                <note
                  v-for="entity in entities"
                  :entity="entity"
                  :key="entity.$loki"
                ></note>
                <span class="ui small disabled header"
                  v-if="!entities.length"
                >
                还没有笔记，请点击 ‘添加笔记’ 按钮，新增笔记 📒 。
                </span>
            </div>
        </div>
</template>

<script>
import Note from './Note'
import Message from './Message'
import { mapGetters, mapActions } from 'vuex'
export default {
  created () {
    this.initial()
  },
  methods: {
    ...mapActions([
      'initial',
      'create'
    ])
  },
  computed: {
    ...mapGetters([
      'entities'
    ])
  },
  components: {
    Note,
    Message
  }
}
</script>

<style scoped>
</style>
