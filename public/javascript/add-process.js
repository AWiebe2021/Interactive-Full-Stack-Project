async function newProcess(event) {
  event.preventDefault();

  const processName = document.querySelector('input[name="processName"]').value;
  const step = document.querySelector('input[name="step"]').value;
  const dept_id = document.querySelector('input[name="dept_id"]').value;
 
  const response = await fetch(`/api/process`, {
    method: 'POST',
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
    console.log("HERE");
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-process').addEventListener('click', newProcess);
