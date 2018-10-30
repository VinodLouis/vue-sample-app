const _PIZZA_MATERIAL_ = {
  base: {
    min:1,
    max:1,
    items:[
      {
        id: "b1",
        name: "Normal",
        price: "300",
        desc: "Normal Regular Base"
      },
      {
        id: "b2",
        name: "Thin Crust",
        price: "350",
        desc: "A cripsy Thin Crust Base"
      }
    ],
    nextIngredient:"toppings"
  },
  toppings: {
    min:1,
    max:3,
    items:[
      {
        id: "t1",
        name: "Anchovies",
        price: 50
      },
      {
        id: "t2",
        name: "Bacon",
        price: 100
      },
      {
        id: "t3",
        name: "Canadian Bacon",
        price: 150
      },
      {
        id: "t4",
        name: "Chicken",
        price: 100
      },
      {
        id: "t5",
        name: "Italian Sausage",
        price: 175
      },
      {
        id: "t6",
        name: "Sausage",
        price: 125
      },
      {
        id: "t7",
        name: "Pepperoni",
        price: 90
      },
      
    ],
    nextIngredient : "vegges"
  },
  vegges: {
    min:1,
    max:5,
    items:[
      {
        id: "t8",
        name: "Green Peppers",
        price: 50
      },
      {
        id: "t9",
        name: "Mushrooms",
        price: 25
      },
      {
        id: "t10",
        name: "Onions",
        price: 30
      },
      {
        id: "t11",
        name: "Tomatoes",
        price: 30
      },
      {
        id: "t12",
        name: "Banana Peppers",
        price: 70
      },
      {
        id: "t13",
        name: "Pineapple Tidbits",
        price: 65
      },
      {
        id: "t14",
        name: "Ripe Olives",
        price: 95
      },
      {
        id: "t15",
        name: "Green Olives",
        price: 90
      },
      {
        id: "t16",
        name: "Jalapeno Peppers",
        price: 75
      }
    ],
    nextIngredient:"cheese"
  },
  cheese: {
    min:1,
    max:1,
    items:[
      {
        id: "c1",
        name: "Parmesan/Romano",
        price: 100
      },
      {
        id: "c2",
        name: "Three Cheese Blend",
        price: 150
      }
    ],
    nextIngredient:"sauces"
  },
  sauces: {
    min:1,
    max:-1,
    items:[
      {
        id: "s1",
        name: "Chicken BBQ Pizza Sauce",
        price: 80
      },
      {
        id: "s2",
        name: "Ranch Sauce",
        price: 70
      },
      {
        id: "s3",
        name: "Spinach Alfredo Sauce",
        price: 75
      }
    ],
    nextIngredient:"desserts"
  },
  desserts: {
    min:-1,
    max:-1,
    items:[
      {
        id: "d1",
        name: "Chicken Poppers",
        price: 200
      },
      {
        id: "d2",
        name: "Chicken Wings (Roasted)",
        price: 250
      },
      {
        id: "d3",
        name: "Chocolate Chip Cookie",
        price: 150
      },
      {
        id: "d4",
        name: "Double Chocolate Chip Brownie",
        price: 200
      }
    ],
    nextIngredient:"extra"
  },
  extra: {
    min:-1,
    max:-1,
    items:[
      {
        id: "e1",
        name: "Pepperoncini",
        price: 25
      },
      {
        id: "e2",
        name: "BBQ Dipping Sauce",
        price: 25
      },
      {
        id: "e3",
        name: "Blue Cheese Dipping Sauce",
        price: 25
      },
      {
        id: "e4",
        name: "Buffalo Dipping Sauce",
        price: 25
      },
      {
        id: "e5",
        name: "Cheese Dipping Sauce",
        price: 25
      },
      {
        id: "e6",
        name: "Garlic Sauce",
        price: 25
      },
      {
        id: "e7",
        name: "Garlic Parmesan Sauce",
        price: 25
      },
      {
        id: "e8",
        name: "Honey Chipotle Sauce",
        price: 25
      }
    ],
    nextIngredient:"done"
  }
}

export default {
  getPizzaIngredient(ingredient,cb){
    setTimeout(() => cb(_PIZZA_MATERIAL_[ingredient]), 100)
  },
  getCouponCode(code,cb){
    setTimeout(()=>{
      if(code == "OFF10"){
        return cb({coupon:"OFF10",discountInPercentage:10})
      }
      cb({coupon:"",discountInPercentage:0})
    },100)
  }
}    