# Santhoshri S - Professional Portfolio Website

A modern, professional portfolio website built with React.js, Bootstrap, and custom CSS. Showcasing skills, projects, experience, and achievements with a passionate, elegant design.

## 🚀 Features

- 🎨 **Professional Design** - Modern, clean, and passionate UI/UX
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✨ **Smooth Animations** - Engaging transitions and effects
- 🎯 **Typewriter Effect** - Dynamic hero section
- 📧 **Contact Form** - EmailJS integration with fallback
- 🔗 **Social Integration** - Links to GitHub, LinkedIn, HackerRank, LeetCode
- 📄 **Resume Download** - Easy access to resume
- 🏆 **Certifications Showcase** - Organized certificate gallery
- 💼 **Project Portfolio** - Detailed project descriptions
- 🎓 **Achievements & Interests** - Personal accomplishments

## 🛠️ Tech Stack

- **Frontend Framework**: React.js (Vite)
- **Styling**: Bootstrap 5 + Custom CSS
- **Libraries**:
  - react-bootstrap
  - AOS (Animate On Scroll)
  - react-icons
  - react-typed
  - react-scroll
  - @emailjs/browser

## 📦 Installation

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure EmailJS (Optional)**:
   - Copy `.env.example` to `.env`
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Add your credentials to `.env`

4. **Start development server**:
```bash
npm run dev
```

5. **Build for production**:
```bash
npm run build
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Option 2: Netlify

1. **Install Netlify CLI**:
```bash
npm i -g netlify-cli
```

2. **Build and deploy**:
```bash
npm run build
netlify deploy --prod
```

Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

### Option 3: GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
"homepage": "https://yourusername.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Option 4: Custom Server

1. **Build the project**:
```bash
npm run build
```

2. **Serve the `dist` folder** with any static hosting service:
   - Apache
   - Nginx
   - AWS S3 + CloudFront
   - Azure Static Web Apps
   - Google Cloud Storage

## 📧 EmailJS Setup

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create an Email Service**:
   - Go to Email Services
   - Add Gmail, Outlook, or your email service
   - Follow the setup instructions

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email

4. **Get your credentials**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > API Keys

5. **Configure environment variables**:
   - Copy `.env.example` to `.env`
   - Add your credentials

**Note**: If EmailJS is not configured, the contact form will automatically use a mailto fallback.

## 📁 Adding Certificate Images

1. Place certificate images in `public/images/certificates/`
2. Use these exact file names:
   - `ibm-rag-langchain.jpg`
   - `ibm-document-retrieval.jpg`
   - `ibm-ai-getting-started.jpg`
   - `ibm-cloud-journey.jpg`
   - `tata-forage.jpg`
   - `nptel-java.jpg`
   - `hackerrank-javascript.jpg`
   - `hackerrank-css.jpg`

## 🎨 Customization

All content is stored in `src/utils/constants.js`. Update:
- Personal information
- Skills and icons
- Projects
- Education
- Experience
- Certifications
- Contact information
- Social profiles

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

- **Email**: santhoshrisanthu2003@gmail.com
- **Phone**: +91 6369737014
- **LinkedIn**: [Santhoshri Sivakumar](https://www.linkedin.com/in/santhoshri-sivakumar/)
- **GitHub**: [Santhoshri142](https://github.com/Santhoshri142)
- **HackerRank**: [santhoshrisanth1](https://www.hackerrank.com/santhoshrisanth1)
- **LeetCode**: [SANTHOSHRI](https://leetcode.com/u/SANTHOSHRI/)

## 🚀 Quick Deploy

**Ready to deploy?** Just run:
```bash
npm run build
```

Then upload the `dist` folder to your hosting service!

---

Built with ❤️ by Santhoshri S
