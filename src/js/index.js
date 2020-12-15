import "../scss/main.scss";

fetch("https://api.github.com/users/marcin-lyszczarz/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    const container = document.querySelector(".projects-grid--js");

    for (let repo of resp) {
      const { description, html_url, homepage, name } = repo;

      const template = `<article class="project">
      <div class="project__window">
       <span class="project__circle"></span>
       <span class="project__circle"></span>
       <span class="project__circle"></span>
      </div>
      <div class="project__content">
        <img src="img/github_icon.svg" alt="">
        <h3 class="project__title project__grid">
          <span class="project__label">project:</span><span>${name}</span>
        </h3>
        <p class="project__grid">
          <span class="project__label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project__grid">
           <span class="project__label">demo:</span>
           <span>&lt;<a
           rel="noopener noreferrer"
           target="_blank" 
           class="project__link" 
           href="${homepage}" 
           title="${name}">
           see_here</a>&gt;</span>
        </p>
        <p class="project__grid">
        <span class="project__label">github:</span>
        <span>&lt;<a
            rel="noopener noreferrer"
            target="_blank" 
            class="project__link" 
            href="${html_url}" 
             title="${name}">
            source_code</a>&gt;</span>
        </p>
      </div>
      </article>`;

      if(description){
        container.innerHTML += template;
      }
      
    }
    
  })
  .catch((e) => console.log(e));
