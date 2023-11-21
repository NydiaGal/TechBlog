// submitting the form in the browser

async function newFormHandler(event) {
    event.preventDefault();
    const blog_entry = document.querySelector('#blog_entry').value;
    const blog_comments = document.querySelector('#comments').value;
    const guest = document.querySelector('#guest').value;
    
    const response = await fetch(`/api/entry`, {
      method: 'POST',
      body: JSON.stringify({
        blog_entry,
        blog_comments,
        guest,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add blog entry');
    }
  }
  
  document.querySelector('.new-blog-entry').addEventListener('submit', newFormHandler);
    