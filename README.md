# backend code for stripe payment

- go to stripe website and create an account
- collect public and private api keys
- setup backend with node js
- install stripe package

- write code in stripe.js route

- for necessary information go to stripe website -
<a href="https://stripe.com/docs/checkout/quickstart">documentation</a>

- line items basic structure

```js
line_items: [
  {
    price_data: {
      currency: "usd",
      product_data: {
        name: "T-shirt",
      },
      unit_amount: 2000,
    },
    quantity: 1,
  },
];
```

- send cart item from the frontend to the backend and map through the cart items and create a new array of line items

- optional code but add for more information

```js
 shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
```

- from backend send this session url so that from client side we can redirect to stripe checkout page

```js
res.send({ url: session.url });
```

> now from client side

- create react app
- go to the cart page
- select cart and through the chekout button pass this cart item to the backend through the bakcend route

```
http://localhost:5000/api/stripe/create-checkout-session
```

- create two page for success redirect and cancel redirect
- in this case whend user cancelled i have redirect them to the cart page so did not create a cancel page
- add this page url to the backend redirect part

  ```js
  success_url: "http://localhost:3000/success",
  cancel_url: "http://localhost:3000/cart",
  ```

- now from the cart page when user click on the checkout button it will redirect to the stripe checkout page
- after payment it will redirect to the success page
- from the success page i have redirected the user to the cart page again after 3sec of interval
