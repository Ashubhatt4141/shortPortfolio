const otherProjectContentContainer = document.getElementById('other-projects-content-container')

const otherProjectData = [
    {
        title: 'Customer Churn Prediction',
        github: 'https://www.github.com',
        website: 'https://www.codepen.com',
        description: 'Customer Retention Analysis.',
        tools: ['EDA, MACHINE LEARNING, POWER-BI'],
    },
    {
        title: 'MY-11',
        github: '',
        website: 'https://www.picsello.com',
        description: 'Select Your Favourite 11.',
        tools: ['POWER-BI,DATA ANALYSIS, DASHBOARD'],
    },
    {
        title: 'Comment Toxicity',
        github: '',
        website: 'https://www.codeacademy',
        description: 'Check Comment Toxicity',
        tools: ['NLP, MACHINE LEARNING,DATA ANALYSIS'],
    },
]

const otherProjectsList = otherProjectData.map((data) => {
    const toolsList = data.tools.map((tool) => {
        return `<li> ${tool} <li/>`
    })

    return `<div class="other-project scale-in">
                        <a href="${data.website}" target="_blank">
                            <div class="other-project-icons">
                                <i class="ri-folders-fill"></i>
                                <div>
                                    <a href="${data.github ? data.github : ''}" target="_blank"> <i class="${data.github ? 'ri-github-line' : ""}"></i> </a>
                                    <a href="${data.website}" target="_blank"> <i class="ri-global-line"></i> </a>
                                </div>
                            </div>
                            <h4> ${data.title}</h4>
                            <p> ${data.description} </p>
                            <ul class="other-tools">
                               ${toolsList.join().replaceAll(",", " ")}
                            </ul>
                        </a>
                    </div>`
})




otherProjectContentContainer.insertAdjacentHTML("afterbegin", otherProjectsList.join(' '))

const viewMoreBtn = document.querySelector('.view-more-btn')
const otherProjects = document.querySelectorAll('.other-project')
const viewBtnText = document.getElementById('viewBtn')
const projectsToShow = 2
const projectsList = [...otherProjects]
const otherTotalProjects = projectsList.length
const viewMoreText = 'View More'
const viewLessText = 'View Less'

if(otherTotalProjects < projectsToShow) {
    viewMoreBtn.classList.add('display-none')
}
projectsList.slice(projectsToShow).forEach((item) => {
    item.classList.add('hide-project')
})
viewMoreBtn.addEventListener('click', () => {
    projectsList.slice(projectsToShow).forEach((item) => {
        item.classList.toggle('hide-project')
        if(item.classList.contains('hide-project')){
            viewBtnText.textContent = viewMoreText
        } else viewBtnText.textContent = viewLessText
    })
})