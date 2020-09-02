<template>
  <router-link to="/home">
    <img src="../assets/vue-icon.png" alt="Vue Icon" /><span>Shopping</span>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 4rem;
  color: #FFF;
  margin: 3rem 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

img {
  max-width: 68px;
  margin-right: 0.7rem;
}

@media only screen and (max-width: 768px) {
  a {
    font-size: 2rem;
    margin: 2rem 8px;
  }
}
</style>
