fetch('https://pak-iju2.pages.dev/posts/data.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('konten');
    posts.forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `<h2>${post.judul}</h2><p>${post.isi}</p><hr/>`;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Gagal mengambil konten:", err);
  });
