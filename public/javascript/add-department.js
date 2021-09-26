async function newDepartment(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="department_name"]').value;
 
  const response = await fetch(`/api/department`, {
    method: 'POST',
    body: JSON.stringify({
      name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log('=====================');
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-department').addEventListener('click', newDepartment);
