import axios from 'axios'

export default {
  fetchProducts() {
    let products;
    axios
      .get(this.state.api.products)
      .then(response => {
        products = response.data;
        products.forEach(product => {
          product.group = 1 + Math.floor(Math.random() * 3);
          product.category = 1 + Math.floor(Math.random() * 3);
          product.subcategory = 1 + Math.floor(Math.random() * 3);
        });
        this.commit('saveProducts', products)
      })
      .catch(error => console.error(error));
  }
}