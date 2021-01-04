# fashion-ecommerce

Example online clothing store built in Vue.js.
Project uses quite extensively vue-router, e.g. for conditional displaying products based on the data in the url or metadata tags in $route property.
Vuex is used to keep the data which needs to be available in the whole application, for example basic user info or full list of available products.
Application is connected to mock API (www.mockapi.io), which provides the list of products kept in the store once the app is initialized.


### Homepage
![](https://github.com/cichoszewicz/fashion-ecommerce/blob/main/screenshots/Vuetiful1.gif)

### Browsing products
![](https://github.com/cichoszewicz/fashion-ecommerce/blob/main/screenshots/Vuetiful2.gif)

### Particular product preview
![](https://github.com/cichoszewicz/fashion-ecommerce/blob/main/screenshots/Vuetiful3.gif)

### Logging in
![](https://github.com/cichoszewicz/fashion-ecommerce/blob/main/screenshots/Vuetiful4.gif)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
