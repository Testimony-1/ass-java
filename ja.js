// Create website content
document.getElementById("app").innerHTML = `

<header>
    <nav>
        <h2>VISTA.</h2>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
        </ul>
    </nav>
</header>

<main>

    <!-- Hero Section -->
    <section class="hero" id="home">

        <div class="hero-content">
            <h1>Creative Ideas.<br>Beautiful Experiences.</h1>

            <p>
                We turn simple ideas into meaningful digital experiences.
                Discover creativity with Vista.
            </p>

            <a href="#about" class="btn">Explore More</a>
        </div>

        <div class="hero-image">
            <img id="hero-img" alt="Creative workspace">
        </div>

    </section>


    <!-- About Section -->
    <section class="about" id="about">

        <h2>About Us</h2>

        <p>
            Vista Creative is a modern digital brand focused on
            creativity, innovation and technology. We believe that
            great ideas deserve beautiful execution.
        </p>

    </section>


    <!-- Services Section -->
    <section class="services" id="services">

        <h2>What We Do</h2>

        <div class="service-container">

            <article>
                <h3>Web Design</h3>
                <p>Creating beautiful and responsive websites.</p>
            </article>

            <article>
                <h3>Brand Identity</h3>
                <p>Building unique and memorable brand experiences.</p>
            </article>

            <article>
                <h3>Digital Solutions</h3>
                <p>Using technology to solve everyday problems.</p>
            </article>

        </div>

    </section>

</main>

<footer>
    <p>&copy; 2026 Vista Creative. All Rights Reserved.</p>
</footer>

`;


// Add hero image using JavaScript
document.getElementById("hero-img").src =
"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200";


// Add website styling using JavaScript
const style = document.createElement("style");

style.textContent = `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
}

body {
    background: #f8f8f8;
    color: #222;
}

header {
    padding: 25px 8%;
    background: white;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h2 {
    font-size: 28px;
    color: #2563eb;
}

nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
}

nav a {
    text-decoration: none;
    color: #333;
}

.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 80px 8%;
}

.hero-content {
    flex: 1;
}

.hero-content h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-content p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    background: #2563eb;
    color: white;
    padding: 14px 25px;
    text-decoration: none;
    border-radius: 5px;
}

.hero-image {
    flex: 1;
}

.hero-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 12px;
}

.about {
    text-align: center;
    padding: 80px 15%;
    background: white;
}

.about h2,
.services h2 {
    font-size: 32px;
    margin-bottom: 20px;
}

.about p {
    color: #666;
    line-height: 1.8;
}

.services {
    padding: 80px 8%;
    text-align: center;
}

.service-container {
    display: flex;
    gap: 25px;
    margin-top: 40px;
}

.service-container article {
    flex: 1;
    padding: 35px 20px;
    background: white;
    border-radius: 10px;
}

.service-container h3 {
    margin-bottom: 15px;
}

.service-container p {
    color: #666;
    line-height: 1.6;
}

footer {
    text-align: center;
    padding: 25px;
    background: #222;
    color: white;
}

@media (max-width: 768px) {

    .hero {
        flex-direction: column;
    }

    .hero-content h1 {
        font-size: 35px;
    }

    .service-container {
        flex-direction: column;
    }

    nav ul {
        gap: 12px;
    }

}

`;

document.head.appendChild(style);