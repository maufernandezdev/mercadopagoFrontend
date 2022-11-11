const HOST = 'https://mercadopago-backend.vercel.app';
const checkout = async (e) =>
{   
    e.preventDefault();
    const method = 'POST'
    const path = '/api/checkout'
    const headers = { 'Content-type': 'application/json' }

    const body = JSON.stringify(data);
    try
    {
        const response = await fetch(HOST + path , {method, headers, body});
        const data = await response.json();
        window.location.href = data.init_point;
    }
    catch(error)
    {
        console.log(error);
    }
}

const App = () => 
{
    const application = document.querySelector('#app');
    const form = document.createElement("form"); // form creation
    let contentHTML = '';
    data.forEach(element =>{
        
        contentHTML += `
        <div class="group">
            <input name="title" readonly value="${element.title}">
            <input name="unit_price" readonly value="$${element.unit_price}">
        </div>
        `
    });
    const total = data.reduce((acc, item) => acc + item.unit_price , 0);
    contentHTML += `
    <div class="group">
        <input name="title" readonly value="Total $${total}" id="total">
    </div>
    <div class="group">
        <input type="submit" value="Pagar" id="pay">
    </div>`;
    form.innerHTML = contentHTML;
    application.appendChild(form);
    const btnPayment = document.querySelector('form');
    btnPayment.addEventListener('submit', checkout);
}

export default App;