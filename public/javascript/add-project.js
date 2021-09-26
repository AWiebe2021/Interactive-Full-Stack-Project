async function newProject(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const shipping_address = document.querySelector('input[name="shipping_address"]').value;
  const shipping_city = document.querySelector('input[name="shipping_city"]').value;
  const shipping_state = document.querySelector('input[name="shipping_state"]').value;
  const shipping_zip = document.querySelector('input[name="shipping_zip"]').value;
  const customer_id = document.querySelector('input[name="customer_id"]').value;
  const process_id = document.querySelector('input[name="process_id"]').value;
 

  const response = await fetch(`/api/project`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      shipping_address,
      shipping_city,
      shipping_state,
      shipping_zip,
      customer_id,
      process_id
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

document.querySelector('.create-project').addEventListener('click', newProject);
