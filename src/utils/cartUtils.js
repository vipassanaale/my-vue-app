
export function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(item) {
    const cart = getCart();
    cart.push(item); //
    saveCart(cart); //
}

export function clearCart() {
    localStorage.removeItem('cart');
}
