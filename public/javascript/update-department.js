async function updateDepartment(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="department_name"]').value;
  const department_id = document.querySelector('input[name="department_id"]').value;
  
  const response = await fetch(`/api/department/${department_id}`, {
    method: 'PUT',
    body: JSON.stringify({
     name
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

document.querySelector('.update-department').addEventListener('click', updateDepartment);
