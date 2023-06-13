const container = document.querySelector('.container');

function getApiGitHub() {
    fetch('https://api.github.com/users/GuilhermeEduardo23/repos')
    
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        
        data.map(item => {
            let project = document.createElement('div');

            project.innerHTML = `
                <div class="projects">
                    <div>
                        <h4 class="title">${item.name}</h4>
                        <span class="date-create">${Intl.DateTimeFormat('pt-br').format(new Date(item.created_at))}</span>
                    </div>
                    
                    <div>
                        <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        <span class="language"><span class="circle"></span>${item.language}</span>
                    </div>
                </div>
            `;

            container.appendChild(project);
        })
    })
}

getApiGitHub();