import { createStore } from 'vuex'

export default createStore({
    state: {
        products: null,
        product: null,
        user: null,
    },
    getters: {

    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },
        setProducts: (state, products) => {
            state.products = products;
        },
        setProduct: (state, product) => {
            state.product = product;
        },
        addProduct(context) {
            fetch("http://localhost:3000/products", {
                method: "POST",
                body: JSON.stringify({
                    title: document.getElementById('add-Name').value,
                    img: document.getElementById('add-Img').value,
                    desc: document.getElementById('add-Desc').value,
                    category: document.getElementById('add-Category').value,
                    price: document.getElementById('add-Price').value,
                    power: document.getElementById('add-Power').value,
                    used_by: document.getElementById('add-Usedby').value,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
              .then((response) => response.json())
              .then((data) => (context.state.products = data))
              .then(window.location.reload())
    },
    deleteProduct(context, id) {
        fetch(`http://localhost:3000/products/` + id, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => context.state.products = data)
          .then(window.location.reload())
      },
    },
    actions: {
        getProducts: async(context) => {
            fetch(`http://localhost:3000/products`)
                .then((res) => res.json())
                .then((products) => context.commit("setProducts", products))
        },
        getProduct: async(context, id) => {
            fetch(`http://localhost:3000/products/${id}`)
                .then((res) => res.json())
                .then((product) => context.commit("setProduct", product))
        },
        getUser: async(context, id) => {
            fetch(`http://localhost:3000/users/${id}`)
                .then((res) => res.json())
                .then((user) => context.commit("setUser", user))
        },
        createProduct: async(context, id) => {
          fetch(`http://localhost:3000/products/`, {
            method: 'POST',
            body: JSON.stringify({
              id: id,
              title: this.title,
              img: this.img,
              desc: this.desc,
              category: this.category,
              price: this.price,
              power: this.power,
              usedby: this.usedby,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
              .then((res) => res.json())
              .then((product) => context.commit("setProduct", product))
      },
      deleteProduct: async(context, id) => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((res) => res.json())
            .then((product) => context.commit("setProduct", product))
    },

    },
    modules: {}
})