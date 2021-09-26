async function deleteDepartment(event) {
  event.preventDefault();

  const department_id = document.querySelector('input[name="department_id"]').value;
  
  const response = await fetch(`/api/department/${department_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-department').addEventListener('click', deleteDepartment);
