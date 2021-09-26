async function deleteProcess(event) {
  event.preventDefault();

  const process_id = document.querySelector('input[name="process_id"]').value;
  
  const response = await fetch(`/api/process/${process_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-process').addEventListener('click', deleteProcess);
