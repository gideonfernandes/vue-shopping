<template>
  <div>
    <Header />
    <div class="container">
      <table class="product-table">
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://evening-sierra-83309.herokuapp.com/files/product1.jpg"
                alt="Lancôme La Vie est Belle"
              />
            </td>
            <td>
              <strong>Lancôme La Vie est Belle</strong>
              <span>R$ 233,50</span>
            </td>
            <td>
              <div>
                <button
                  type="button"
                >
                  <MinusIcon fillColor="#2c3e50" :size="20" />
                </button>
                <input type="number" readOnly value="5" />
                <button
                  type="button"
                >
                  <PlusIcon fillColor="#2c3e50" :size="20" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 771,47</strong>
            </td>
            <td>
              <button
                type="button"
              >
                <DeleteIcon fillColor="#2c3e50" :size="20" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://evening-sierra-83309.herokuapp.com/files/product1.jpg"
                alt="Lancôme La Vie est Belle"
              />
            </td>
            <td>
              <strong>Lancôme La Vie est Belle</strong>
              <span>R$ 233,50</span>
            </td>
            <td>
              <div>
                <button
                  type="button"
                >
                  <MinusIcon fillColor="#2c3e50" :size="20" />
                </button>
                <input type="number" readOnly value="5" />
                <button
                  type="button"
                >
                  <PlusIcon fillColor="#2c3e50" :size="20" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 771,47</strong>
            </td>
            <td>
              <button
                type="button"
              >
                <DeleteIcon fillColor="#2c3e50" :size="20" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://evening-sierra-83309.herokuapp.com/files/product1.jpg"
                alt="Lancôme La Vie est Belle"
              />
            </td>
            <td>
              <strong>Lancôme La Vie est Belle</strong>
              <span>R$ 233,50</span>
            </td>
            <td>
              <div>
                <button
                  type="button"
                >
                  <MinusIcon fillColor="#2c3e50" :size="20" />
                </button>
                <input type="number" readOnly value="5" />
                <button
                  type="button"
                >
                  <PlusIcon fillColor="#2c3e50" :size="20" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 771,47</strong>
            </td>
            <td>
              <button
                type="button"
              >
                <DeleteIcon fillColor="#2c3e50" :size="20" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Purchase />
      <footer>
        <button
          type="button"
        >
          Finalizar pedido
        </button>
        <div class="total">
          <span>TOTAL</span>
          <strong>R$ 1.771,47</strong>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Purchase from '../components/Purchase.vue'

import MinusIcon from 'vue-material-design-icons/MinusCircleOutline.vue';
import PlusIcon from 'vue-material-design-icons/PlusCircleOutline.vue';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';

export default {
  name: 'Cart',
  components: {
    Header,
    Purchase,
    MinusIcon,
    PlusIcon,
    DeleteIcon
  } 
}
</script>

<style scoped>
div.load-container {
  width: 960px;
  height: 300px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.container {
  padding: 30px;
  margin: -2rem calc((100% - 960px) / 2) 4rem calc((100% - 960px) / 2);
  background: #FFF;
  border-radius: 4px;
}

@media only screen and (max-width: 970px) {
  div.container {
    width: 100%;
    overflow-x: auto;
    margin: -2rem auto 0 auto;
    text-align: center;
    padding: 20px;
  }
}

div.container footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.container footer button {
  background: #2c3e50;
  color: #FFF;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  text-transform: uppercase;
  font-weight: bold;
  transition: opacity 0.2s ease-in;
  font-family: Arial !important;
}

div.container footer button:hover {
  opacity: 0.7;
}

table.product-table {
  width: 100%;
}

table.product-table thead th {
  color: #777;
  text-align: left;
  padding: 12px;
}

table.product-table tbody td {
  padding: 12px;
  border-bottom: 2px solid #eee;
}

table.product-table img {
  height: 100px;
}

table.product-table strong {
  color: #333;
  display: block;
}

table.product-table span {
  display: block;
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
}

table.product-table div {
  display: flex;
  align-items: center;
}
    
table.product-table div input {
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 50px;
}

table.product-table button {
  background: none;
  border: 0;
  padding: 6px;
}

div.total {
  display: flex;
  align-items: baseline;
}

div.total span {
  color: #777;
  font-weight: bold;
}

div.total strong {
  font-size: 28px;
  margin-left: 7px;
  color: #222;
}
</style>