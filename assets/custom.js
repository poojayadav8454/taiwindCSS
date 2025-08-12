// Custom add to cart button code
 if( window.location.pathname.includes("/products/")){
   
document.querySelector('.custom-buy-now-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const productId = document.querySelector('#variant-id').value;

    // Step 1: Clear the cart
    fetch('/cart/clear.js', {
      method: 'POST',
    })
    .then(() => {
      // Step 2: Add the product to the cart
      return fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: productId, quantity: 1 }),
      });
    })
    .then(() => {
      // Step 3: Redirect to checkout
      window.location.href = '/checkout';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
 }