async function advProjectClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(process_id);
  const response = await fetch('/api/project/advance', {
    method: 'PUT',
    body: JSON.stringify({
      process_id: process_id + 1
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

document.querySelector('.advProject-btn').addEventListener('click', advProjectClickHandler);
