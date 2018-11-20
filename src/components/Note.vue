<template>
          <div class="item">
            <div class="meta"></div>
            <div class="content">
                <div class="header">
                  {{ entity.body || '新建笔记' }}
                </div>
                <div class="extra">
                    <editor :entity="entity"></editor>
                     字
                    <i class = "right floated trash alternate outline icon"></i>
                </div>
            </div>
        </div>
</template>

<script>
import Editor from "./Editor";
export default {
  props: [
    'entity'
  ],
  components: {
    Editor
  }
};
</script>

<style scoped>
</style>
