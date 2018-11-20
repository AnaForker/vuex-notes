<template>
        <div class="ui small icon message">
            <i class="bullhorn icon"></i>
            <div class="content">
                <p v-html="messageText"></p>
            </div>
        </div>
</template>

<script>
export default {
  props: [
    'messageText'
  ]
}
</script>

<style scoped>
</style>
