# fashion-ecommerce

Simple online clothing store built in Vue.js.
Project uses qutie extensively vue-router, e.g. for conditional displaying some categories of products based on the data in the url or metadata tag in $route property.
Vuex is used to keep the data which needs to be available in the whole application, for example basic user info or full list of available products.
Application is connected to mock API (www.mockapi.io), which provides the list of products kept in the store once the app is initialized.

Screenshots provided in the 'screenshots' directory in the root of the project.



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
