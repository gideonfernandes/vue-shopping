<template>
  <section class="purchase-content">
    <h1>Compra realizada com sucesso!</h1>
    <h2>Detalhes do pedido abaixo:</h2>
    <h3>Cliente: <strong>Gideon Fernandes</strong></h3>
    <h4>Produtos:</h4>
    <ul>
      <li>
        <p>
          <strong>Item:</strong>
          Lancôme La Vie est Belle, Quantidade: 5
        </p>
        <p><strong>Subtotal:</strong>R$ 467,00</p>
        <hr />
      </li>
      <li>
        <p>
          <strong>Item:</strong>
          Lancôme La Vie est Belle, Quantidade: 5
        </p>
        <p><strong>Subtotal:</strong>R$ 467,00</p>
        <hr />
      </li>
      <li>
        <p>
          <strong>Item:</strong>
          Lancôme La Vie est Belle, Quantidade: 5
        </p>
        <p><strong>Subtotal:</strong>R$ 467,00</p>
        <hr />
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Purchase'
  }
</script>

<style scoped>
section.purchase-content h1 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.4rem;
}

section.purchase-content h2 {
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 1rem;
}

section.purchase-content h3 {
  font-size: 1.1rem;
  color: #111;
  margin-bottom: 0.8rem;
  font-weight: normal;
}

section.purchase-content h3 strong {
  display: inline;
  color: #2c3e50;
}

section.purchase-content h4 {
  font-size: 1.1rem;
  color: #111;
  font-weight: normal;
  margin-bottom: -1.2rem;
}

section.purchase-content > strong {
  font-size: 1.4rem;
  color: #222;
  margin-top: 1rem;
}

section.purchase-content ul {
  list-style: none;
}

section.purchase-content ul li {
  margin: 1.6rem 1.2rem;
}

section.purchase-content ul li strong {
  display: inline;
  margin-right: 0.25rem;
}

section.purchase-content ul li hr {
  margin-top: 0.4rem;
  color: #ccc;
}

section.purchase-content ul li > p {
  font-size: 0.9rem;
}  
</style>