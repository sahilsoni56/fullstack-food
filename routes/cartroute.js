// cart route

const express = require("express");
const router = express.Router()
const Cartmodel = require("../models/cart")

router.post("/cart", async (req, res) => {
    const cartItems = req.body; // Assuming req.body is an array of cart items
    // console.log("1w")
    try {
        const createdItems =  cartItems.map( async (cartItem) => {
                const { price, name, quantity, size } = cartItem;
                const item = await Cartmodel.create({
                    itemname: name,
                    price: price,
                    size: size,
                    quantity: quantity
                });
                return item;
            })

        res.status(201).json({ message: "Items added to the cart successfully", items: createdItems });
    } catch (error) {
        console.error("Error adding items to cart:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
