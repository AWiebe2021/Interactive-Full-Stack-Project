async function newCustomer(event) {
  event.preventDefault();

  const customer_name = document.querySelector('input[name="customer_name"]').value;
  const customer_address = document.querySelector('input[name="customer_address"]').value;
  const customer_city = document.querySelector('input[name="customer_city"]').value;
  const customer_state = document.querySelector('input[name="customer_state"]').value;
  const customer_zip = document.querySelector('input[name="customer_zip"]').value;
  
  const response = await fetch(`/api/customer`, {
    method: 'POST',
    body: JSON.stringify({
     customer_name,
     customer_address,
     customer_city,
     customer_state,
     customer_zip
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-customer').addEventListener('click', newCustomer);
