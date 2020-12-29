import axios from 'axios'

export default {
  fetchProducts() {
    let products;
    axios
      .get(this.state.api.products)
      .then(response => {
        products = response.data;
        products.forEach(product => {
          product.group = Math.floor(Math.random() * 3) + 1;
          product.category = Math.floor(Math.random() * 3) + 1;
          product.subcategory = Math.floor(Math.random() * 3) + 1;
        });
        this.commit('saveProducts', products)
      })
      .catch(error => console.error(error));
  }
}