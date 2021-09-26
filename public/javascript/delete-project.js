async function deleteProject(event) {
  event.preventDefault();

  const project_id = document.querySelector('input[name="project_id"]').value;
  
  const response = await fetch(`/api/project/${project_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-project').addEventListener('click', deleteProject);
