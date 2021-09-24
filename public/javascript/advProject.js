async function advProjectClickHandler(event) {
  event.preventDefault();
  const pro_id = document.getElementById('pro_id').innerHTML;
  const proj_id = document.getElementById('project_id').innerHTML;

  const response = await fetch(`/api/project/advance/${proj_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      process_id: (parseInt(pro_id) + 1)
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

document.getElementById('advProject-btn').addEventListener('click', advProjectClickHandler);

