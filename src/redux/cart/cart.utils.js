export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const clearItemFromCart = (cartItems, cartItemToClear) => (
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
)

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (cartItem.quantity === 1) {
        // clear out
        return clearItemFromCart(cartItems, cartItemToRemove)
    } else {
        // NOTE: We can't just decrease the quantity from the item, we need to create a new array so that they update!
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
        )
    }
}
