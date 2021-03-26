<template>
  <div>
    <p>
      Bar
      {{ param }}
      {{ query }}
    </p>
    <div v-if="query.type === 'JH'">JH</div>
    <div v-if="query.type === 'SY'">SY</div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  computed: {
    param(){
      return this.$route.params
    },
    query(){
     return this.$route.query
      //http://localhost:8081/bar?type=SY 조건에 맞으므로 SY 뜸
      //http://localhost:8081/bar?type=asdf 조건에 맞지 않아서 아무것도 안뜸
      //http://localhost:8081/bar/type=asdf 다른 사이트로 들어온거
    }
  }
}
</script>

<style scoped>

</style>