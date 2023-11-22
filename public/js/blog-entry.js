// submitting the form in the browser

async function newFormHandler(event) {
    event.preventDefault();
    const blog_entry = document.querySelector('#blog_entry').value;
    const blog_comments = document.querySelector('#comments').value;
    const guest = document.querySelector('#guest').value;
    
    const response = await fetch(`/api/entry`, {
      method: 'POST',
      body: JSON.stringify({
        blog_title,
        blog_comments,
        guest,
        date,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Blog entry was not successfully added.');
    }
  }
  
  document.querySelector('.new-blog-entry').addEventListener('submit', newFormHandler);
    