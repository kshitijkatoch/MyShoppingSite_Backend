# 🛒 MyShoppingSite – Backend

A RESTful backend API for an e-commerce application that handles product management, cart operations, user authentication, and order processing.
Built using Node.js, Express.js, and MongoDB, following a clean and scalable architecture.

---

## Quick Start

```
git clone https://github.com/kshitijkatoch/MyShoppingSite_Backend.git
cd MyShoppingSite_Backend
npm install
npm run dev      # or `npm start` / `yarn dev`
```

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST APIs

## Features
**Product Management**
- Fetch all products
- Fetch product by ID
- Category-based product filtering

**Cart Management**
- Add items to cart
- Update cart item quantity
- Remove items from cart

**Order Handling**
- Place orders
- Retrieve user orders

## API Reference

### **GET	/api/products**<br>	 
Fetch all products<br>	 
Sample Response:<br>
```[{ "_id": "...", "title": "Product Name", "price": 999 }]```

### **POST /api/products**<br> 	
Add new product(s)<br>	
Sample Response:<br>
```{"message":"Product added successfully","product":[{"_id":"...","title":"Product Name"}]}```

### **GET /api/products/:productId**<br>	 	
Fetch product by ID<br>		
Sample Response:<br>
```{ "_id": "...", "title": "Product Name", "price": 999 }```

### **DELETE /api/products/:id**<br>  	
Delete product by ID<br> 	 
Sample Response:<br> 
```{"message":"Product deleted successfully","deleted":{"_id":"..."}}```

---

### **GET	/api/categories**<br>	 
Fetch all categories<br>	 
Sample Response:<br>
```[{ "_id": "...", "name": "Electronics" }]```

### **POST /api/categories**<br> 	
Add new category(s)<br>	
Sample Response:<br>
```{"message":"Category added successfully","category":[{"_id":"...","name":"Electronics"}]}```

### **GET /api/categories/:categoryId**<br>	 	
Fetch category by ID<br>		
Sample Response:<br>
```{ "_id": "...", "name": "Electronics" }```

### **DELETE /api/categories/:id**<br>  	
Delete category by ID<br> 	 
Sample Response:<br> 
```{"message":"Category deleted successfully","deleted":{"_id":"..."}}```


## Contact
For bugs or feature requests, please reach out to kshitijkatoch213@gmail.com
