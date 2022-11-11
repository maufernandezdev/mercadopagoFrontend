const values = window.location.search;
const urlParams = new URLSearchParams(values);
const paymentId = urlParams.get('payment_id');
console.log('payment id from params: ', paymentId);

const root = document.querySelector('#root');
root.innerHTML =
` 
    <h1>Pago realizado con éxito!</h1>
    <h2>ID del pago: ${paymentId ? paymentId: ''}</h2>
`
