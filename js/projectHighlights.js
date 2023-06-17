const projectsContainer = document.getElementById('project-highlights-container')

const projectsData = [
  {
    projectName: "A+Movies",
    image: "img/Projects/Movie/Screen1.png",
    details:
      "'A+Movies' is a cutting-edge Android app developed in Java, leveraging the power of the TMDB API (The Movie Database API), that revolutionizes the way users book movie tickets. With a sleek and intuitive user interface, movie enthusiasts can effortlessly browse through a vast library of films, accessing detailed information such as plot summaries, cast members, and ratings. The app dynamically fetches real-time data, ensuring accurate showtimes and availability. Users can select their desired movie, choose preferred seats, and securely book tickets on the spot. This seamless and convenient experience makes 'A+Movies' the go-to app for movie lovers, enhancing their cinema experience and saving them time and effort.",

    tools: ["REACT", "VITE", "NODEJS", "TMDB-API"],
    github: "https://github.com",
    website: "https://dribbble.com/shots/20756338-Healthcare-but-SaaS",
  },
  {
    projectName: "Medical Condition Predictor and Drug Recommender",
    image: "img/Projects/DrugPred/Screen2.png",
    details:
      "The Medical Condition Predictor and Drug Recommender is a flask-based application that utilizes Natural Language Processing (NLP) techniques. This application aims to predict medical conditions based on user input and recommend suitable drugs for those conditions",

    tools: ["NLP", "FLASK", "DATA ANALYSIS", "MACHINE LEARNING"],
    github: "https://github.com/",
    website:
      "https://dribbble.com/shots/20755769-Logo-Branding-Identity-design-modern-minimalist",
  },
  {
    projectName: "Cricket Winning Prediction",
    image: "img/Projects/WinPred/Screen1.png",
    details:
      "The Cricket Analysis application is a streamlet-based application designed for analyzing cricket matches in real time. Using advanced algorithms and statistical models, this application predicts the winning probability of a team for each ball in the match. It takes into account various factors such as the current score, number of wickets, players' performance, pitch conditions, and historical data to calculate the likelihood of a team winning at any given moment. This real-time analysis allows cricket enthusiasts, coaches, and analysts to make informed decisions and strategize accordingly during the match. The application provides valuable insights into the dynamics of the game, enhancing the overall understanding and enjoyment of cricket.",

    tools: ["EDA", "PYTHON", "POWER-BI", "NLP"],
    github: "https://github.com/",
    website: "https://dribbble.com/shots/20756745-EwPay-Dashboard",
  },
];

const projectHighlights = projectsData.map((data) => {
    const toolsList = data.tools.map((tools) => {
        return `<li>${tools} </li>`
    })
    return `<div class="projects-container nth-PG">
                    <div class="project-highlight-content scroll-in">
                        <a href="${data.website}" target="_blank">
                            <div class="project-title">
                                <h5> Project Highlight </h5>
                                <h3 class="project-name">${data.projectName}</h3>
                            </div>
                        </a>
                        <div class="project-details">
                            <p>
                            ${data.details}
                            </p>
                        </div>
                        <div class="project-tools nth-PG">
                            <ul>
                                ${toolsList.join().replaceAll(",", " ")}
                            </ul>
                        </div>
                        <div class="project-links nth-PG">
                            <a href="${data.github}" target="_blank"> <i class="ri-github-fill"></i></a>
                            <a href="${data.website}" target="_blank"> <i
                                    class="ri-global-line"></i></a>
                        </div>
                    </div>
                    <div class="project-image-content scale-in">
                        <a href="${data.website}" target="_blank">
                            <img class="project-image" src="${data.image}" alt="project image" loading="lazy">
                        </a>
                    </div>
                </div>`
})

projectsContainer.insertAdjacentHTML("afterbegin", projectHighlights.join(' '))