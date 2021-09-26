async function updateProject(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const shipping_address = document.querySelector('input[name="project_address"]').value;
  const shipping_city = document.querySelector('input[name="project_city"]').value;
  const shipping_state = document.querySelector('input[name="project_state"]').value;
  const shipping_zip = document.querySelector('input[name="project_zip"]').value;
  const project_id = document.querySelector('input[name="project_id"]').value;
  const customer_id = document.querySelector('input[name="customer_id"]').value;
  const process_id = document.querySelector('input[name="process_id"]').value;
  console.log({project_id})
  const response = await fetch(`/api/project/${project_id}`, {
    method: 'PUT',
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

document.querySelector('.update-project').addEventListener('click', updateProject);
