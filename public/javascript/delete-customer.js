async function deleteCustomer(event) {
  event.preventDefault();

  const customer_id = document.querySelector('input[name="customer_id"]').value;
  
  const response = await fetch(`/api/customer/${customer_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-customer').addEventListener('click', deleteCustomer);
