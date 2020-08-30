<template>
  <footer>
    <p>Lice Fragrances 2020, Todos os direitos reservados. &copy;</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 2rem calc((100% - 960px) / 2);
  background: #151515;
  margin-top: 3rem;
}
  
footer p {
  color: white;
  font-size: 1.1rem;
  font-style: italic;
}

@media only screen and (max-width: 560px) {
  footer p {
    font-size: 0.75rem;
  }
}
</style>
