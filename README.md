# Rodrigo Trejo - Data Scientist Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://rodrigo-trejo-hdz.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Professional portfolio website for a Data Scientist, showcasing projects, certifications, services, and contact information.

🌐 **Live Site**: [https://rodrigo-trejo-hdz.github.io/](https://rodrigo-trejo-hdz.github.io/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Structure](#structure)
- [Pages](#pages)
- [Installation](#installation)
- [Customization](#customization)
- [SEO](#seo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

This is a static HTML portfolio website designed for Data Scientists and tech professionals. It features:

- Modern, dark-themed design with neon accents
- Fully responsive layout (mobile, tablet, desktop)
- Interactive elements with smooth animations
- Professional presentation of skills, projects, and certifications

---

## ✨ Features

- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Dark theme with cyan/purple gradient accents
- **Interactive Elements**:
  - Expandable certification accordion
  - Smooth scroll navigation
  - Hover effects on cards and buttons
  - Scroll-triggered animations
  - Mobile hamburger menu
- **SEO Optimized**: Includes sitemap.xml and meta tags
- **Fast Loading**: No external dependencies except Google Fonts
- **Vanilla JavaScript**: No frameworks required

---

## 🛠 Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox
- **Vanilla JavaScript**: ES6+ for interactivity
- **Google Fonts**: Inter typography
- **GitHub Pages**: Free hosting

---

## 📁 Structure

```
Rodrigo-Trejo-Hdz.github.io/
├── index.html              # Home page
├── proyectos.html          # Projects portfolio (01. PORTFOLIO)
├── cursos.html            # Certifications (02. EDUCATION)
├── contacto.html          # Contact info (03. CONNECT)
├── servicios.html         # Freelance services (04. FREELANCE)
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── assets/
│   ├── images/            # Images and profile photo
│   └── certificates/      # PDF certificates
│
├── sitemap.xml            # SEO sitemap
├── README.md              # This file
├── CLAUDE.md             # Project context for AI
└── ESTRUCTURA.md         # Structure guide (Spanish)
```

---

## 📄 Pages

### 1. **Home** (`index.html`)
Landing page with hero section, professional introduction, 12 technical skills, and CTA buttons.

**Skills showcased:**
- Python, SQL, Power BI, AWS
- MATLAB, C++, Excel, Simulink
- React, Wolfram, TIA Portal, Fusion 360

### 2. **Projects** (`proyectos.html`) - 01. PORTFOLIO
Portfolio of 6 featured projects with:
- Project descriptions
- Technologies used
- Code snippets
- GitHub and live demo links

### 3. **Certifications** (`cursos.html`) - 02. EDUCATION
8 professional certifications with expandable accordion:
1. Advanced Microsoft Power BI (Coursera)
2. Machine Learning in Power BI (Coursera)
3. Refresh Manager Power BI (Microsoft)
4. MATLAB AI - 6 courses (MathWorks)
5. AWS Certified AI Practitioner Prep (Udemy)
6. Amazon Bedrock Getting Started (AWS)
7. Bloomberg Finance Fundamentals (Bloomberg)
8. Storyselling Course (ITAM)

### 4. **Contact** (`contacto.html`) - 03. CONNECT
Contact information with:
- Email: idm.rodrigo.trejo@gmail.com
- LinkedIn profile
- GitHub profile
- Location: Estado de México, Northern Metro Area
- Portfolio link

### 5. **Services** (`servicios.html`) - 04. FREELANCE
6 freelance services offered:
- Data Analysis and Cleaning
- UI/UX Development
- Reporting and Automation (Power BI)
- Full Stack Web Development
- Process Automation
- Technical Consulting

---

## 🚀 Installation

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rodrigo-Trejo-Hdz/Rodrigo-Trejo-Hdz.github.io.git
   cd Rodrigo-Trejo-Hdz.github.io
   ```

2. **Open in browser:**
   ```bash
   # Option 1: Direct file opening
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux

   # Option 2: Use a local server
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

### Deployment to GitHub Pages

1. Fork or clone this repository
2. Rename to: `your-username.github.io`
3. Update personal information in all HTML files
4. Push to GitHub
5. Enable GitHub Pages in Settings → Pages
6. Visit: `https://your-username.github.io/`

---

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #00f5ff;    /* Cyan */
    --secondary-color: #9d4edd;  /* Purple */
    --accent-color: #ff006e;     /* Pink */
    --bg-dark: #0a0e27;          /* Dark background */
    --bg-card: #151b3d;          /* Card background */
}
```

### Personal Information

1. **Name and Title**: `index.html` line 36
2. **Skills**: `index.html` lines 44-56
3. **Projects**: Update `proyectos.html` with your projects
4. **Certifications**: Update `cursos.html` with your credentials
5. **Contact**: Update `contacto.html` with your info
6. **Services**: Update `servicios.html` with your offerings

### Profile Photo

Replace the emoji in `index.html` line 71:

```html
<!-- Replace this -->
💻
<!-- With this -->
<img src="assets/images/profile.png" alt="Rodrigo Trejo">
```

---

## 🔍 SEO

### Sitemap

The `sitemap.xml` file is already configured. Submit it to:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Meta Tags

Each page includes:
- Descriptive `<title>` tags
- Meta descriptions
- Viewport settings for mobile

### Future Improvements

Consider adding:
- Open Graph tags for social media
- JSON-LD structured data
- Google Analytics
- robots.txt file

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this template for your own portfolio, but please:
- Remove/replace personal information
- Update projects and certifications
- Customize the design to make it your own

---

## 📧 Contact

**Rodrigo Trejo**
Data Scientist

- **Email**: idm.rodrigo.trejo@gmail.com
- **LinkedIn**: [Rodrigo Iván Trejo Hernández](https://www.linkedin.com/in/rodrigo-iv%C3%A1n-trejo-hern%C3%A1ndez-300bba249/)
- **GitHub**: [@Rodrigo-Trejo-Hdz](https://github.com/Rodrigo-Trejo-Hdz)
- **Portfolio**: [rodrigo-trejo-hdz.github.io](https://rodrigo-trejo-hdz.github.io/)

---

## 🙏 Acknowledgments

- **Google Fonts** for the Inter typeface
- **GitHub Pages** for free hosting
- **IntersectionObserver API** for scroll animations

---

<div align="center">

**⭐ If you found this useful, consider starring the repo!**

Made with 💻 by Rodrigo Trejo

</div>
