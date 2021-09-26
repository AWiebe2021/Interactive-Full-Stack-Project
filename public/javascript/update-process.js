async function updateProcess(event) {
  event.preventDefault();

  const processName = document.querySelector('input[name="processName"]').value;
  const step = document.querySelector('input[name="step"]').value;
  const dept_id = document.querySelector('input[name="dept_id"]').value;
  const process_id = document.querySelector('input[name="process_id"]').value;
  
  const response = await fetch(`/api/process/${process_id}`, {
    method: 'PUT',
    body: JSON.stringify({
     processName,
     step,
     dept_id
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

document.querySelector('.update-process').addEventListener('click', updateProcess);
