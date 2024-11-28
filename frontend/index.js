document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Dynamically load main article content
    const mainArticleContent = `
        <div class="main-article-content">
            <h2>Business growing rapidly in Milan - <span class="highlight">Happy Mayor</span></h2>
            <p>In Milan, a surge in business growth has become the hallmark of the city's economic landscape, fostering an atmosphere of prosperity and innovation. Spearheading this transformative journey is a jubilant mayor, whose visionary leadership and strategic initiatives have propelled Milan into a thriving commercial hub. With a blend of enthusiasm and pragmatism, the mayor has fostered an environment conducive to entrepreneurship, attracting both local startups and international corporations seeking to establish a foothold in the vibrant Milanese market.</p>
            <span class="read-time">12 min read</span>
        </div>
        <img src="./assets/main_img.jpg" alt="business meeting">
    `;
    document.getElementById('main-article').innerHTML = mainArticleContent;

    // Dynamically load suggested articles
    const suggestions = [
        {
            title: "Govt. is planning to make a new law for all immigrants",
            readTime: "8 min read",
            imgSrc: "./assets/img1.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illo vero corrupti, veniam officiis unde ut maiores dolorem voluptates exercitationem rerum asperiores, autem voluptas obcaecati?"
        },
        {
            title: "Sports : Man City last min drama kept them alive",
            readTime: "5 min read",
            imgSrc: "./assets/img2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illo vero corrupti, veniam officiis unde ut maiores dolorem voluptates exercitationem rerum asperiores, autem voluptas obcaecati?"
        },
        {
            title: "Scientists found a new type of virus called CORONA!",
            readTime: "7 min read",
            imgSrc: "./assets/img3.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illo vero corrupti, veniam officiis unde ut maiores dolorem voluptates exercitationem rerum asperiores, autem voluptas obcaecati?"
        }
    ];

    const suggestionsContainer = document.getElementById('suggestions');
    suggestions.forEach(article => {
        const articleHTML = `
            <article>
                <div>
                    <span class="art-head">${article.title}</span>
                    <span class="read-time mins">${article.readTime}</span>
                </div>
                <img src="${article.imgSrc}" alt="article image">
                <p>${article.description}</p>
            </article>
        `;
        suggestionsContainer.innerHTML += articleHTML;
    });
});
