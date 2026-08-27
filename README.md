# Webora - Portfolio & Web Development Agency Website

A modern, professional, and fully responsive portfolio website built with Next.js, React, and CSS. This website is designed to help web development agencies showcase their work and attract new clients.

## 🚀 Features

- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Design** - Clean, professional design that builds trust
- **SEO Optimized** - Proper meta tags, semantic HTML, and optimized structure
- **Fast Performance** - Built with Next.js for optimal loading times
- **Interactive Components** - Smooth animations and transitions
- **Portfolio Filtering** - Dynamic project filtering by category
- **Contact Form** - Fully functional form with validation
- **Accessible** - Follows accessibility best practices

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── about/
│   │   ├── page.tsx          # About page
│   │   ├── page.module.css
│   │   └── layout.tsx
│   ├── contact/
│   │   ├── page.tsx          # Contact page
│   │   └── page.module.css
│   ├── portfolio/
│   │   ├── page.tsx          # Portfolio page with filtering
│   │   ├── page.module.css
│   │   └── layout.tsx
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with Navbar and Footer
│   ├── page.tsx              # Home page
│   └── page.module.css
├── components/
│   ├── ContactForm.tsx       # Contact form component
│   ├── ContactForm.module.css
│   ├── CTASection.tsx        # Call-to-action section
│   ├── CTASection.module.css
│   ├── Footer.tsx            # Footer component
│   ├── Footer.module.css
│   ├── Hero.tsx              # Hero section component
│   ├── Hero.module.css
│   ├── Navbar.tsx            # Navigation bar with mobile menu
│   ├── Navbar.module.css
│   ├── ProcessStep.tsx       # Process step component
│   ├── ProcessStep.module.css
│   ├── ProjectCard.tsx       # Project card component
│   ├── ProjectCard.module.css
│   ├── SectionTitle.tsx      # Section title component
│   ├── SectionTitle.module.css
│   ├── ServiceCard.tsx       # Service card component
│   └── ServiceCard.module.css
├── public/
│   └── images/               # Place your images here
├── package.json
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project folder:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## ✏️ Customization Guide

### 1. Replace Your Brand Information

#### Update Brand Name

**Files to edit:**
- `app/layout.tsx` - Update metadata title and description
- `components/Navbar.tsx` - Change "Your Brand" logo text (line 23)
- `components/Footer.tsx` - Change "Your Brand" heading (line 19)

#### Update Contact Information

**File:** `components/Footer.tsx`

Replace the placeholder contact information:
- Email: `hello@yourbrand.com`
- Phone: `+1 (234) 567-890`
- Social media links (Facebook, Twitter, LinkedIn, Instagram)
- Location: "Your City, Your Country"

**File:** `app/contact/page.tsx`

Replace the same contact information in the contact page.

### 2. Add Your Portfolio Projects

**File:** `app/portfolio/page.tsx`

Edit the `projects` array (starting at line 11). Each project has:

```typescript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  category: "Business", // Business, E-commerce, Landing Page, or Personal
  technologies: ["Next.js", "React", "CSS"],
  imageUrl: "/images/project-1.jpg", // Optional: add project screenshot
  link: "/portfolio" // Link to project details
}
```

**To add project images:**
1. Place images in `public/images/` folder
2. Add `imageUrl: "/images/your-image.jpg"` to the project object

### 3. Update the About Page Story

**File:** `app/about/page.tsx`

Replace the placeholder story section (lines 95-108) with your personal story:
- How you got started
- Why you help entrepreneurs
- What makes your approach unique
- Your background and experience

### 4. Customize Colors

**File:** `app/globals.css`

Edit the CSS variables (lines 10-20):

```css
:root {
  --color-primary: #0a1128;        /* Main dark color */
  --color-accent: #3b82f6;         /* Accent/button color */
  --color-accent-hover: #2563eb;   /* Accent hover state */
  /* ... other colors */
}
```

### 5. Modify Services

**File:** `app/page.tsx`

Edit the `services` array (starting at line 10) to add/remove/modify services.

### 6. Update SEO Metadata

**Files to edit:**
- `app/layout.tsx` - Home page metadata
- `app/portfolio/layout.tsx` - Portfolio page metadata
- `app/about/layout.tsx` - About page metadata
- `app/contact/page.tsx` - Contact page metadata

Change the `title`, `description`, and `keywords` for each page.

## 📧 Setting Up the Contact Form

The contact form is currently frontend-only. To connect it to a backend:

### Option 1: Email Service (Recommended for beginners)

Use a service like **EmailJS**, **Formspree**, or **SendGrid**:

1. Sign up for the service
2. Get your API credentials
3. Edit `components/ContactForm.tsx`
4. Replace the `handleSubmit` function (line 45) with the API call

### Option 2: Custom Backend

1. Create an API endpoint in `app/api/contact/route.ts`
2. Update the form submission in `components/ContactForm.tsx`

Example API route structure:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using nodemailer or your preferred service
  return Response.json({ success: true });
}
```

## 🎨 Adding Images

1. Place images in the `public/images/` folder
2. Reference them in your code as `/images/filename.jpg`

**Recommended images to add:**
- Hero section background or illustration
- Portfolio project screenshots
- About page photo
- Favicon (`public/favicon.ico`)

## 📱 Testing Responsiveness

The website is fully responsive and has been tested for:
- Desktop: 1440px, 1280px, 1024px
- Tablet: 768px
- Mobile: 430px, 390px, 375px

Test the website on different devices or use browser DevTools to verify responsiveness.

## 🔍 SEO Checklist

✅ Meta titles and descriptions on all pages  
✅ Open Graph tags for social sharing  
✅ Semantic HTML structure  
✅ Alt text for images (add when you upload images)  
✅ Mobile-friendly design  
✅ Fast loading times  

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click

### Other Options

- **Netlify** - Similar to Vercel
- **Render** - Good for full-stack apps
- **DigitalOcean** - More control, requires setup

## 📝 Key Files to Customize

**Must customize:**
1. `components/Navbar.tsx` - Brand name
2. `components/Footer.tsx` - Contact info and social links
3. `app/contact/page.tsx` - Contact information
4. `app/portfolio/page.tsx` - Your actual projects
5. `app/about/page.tsx` - Your personal story
6. `app/layout.tsx` - Site metadata

**Optional:**
1. `app/globals.css` - Colors and styles
2. `app/page.tsx` - Home page content
3. All component files - Customize as needed

## 🐛 Troubleshooting

### Build Errors

If you get TypeScript errors, make sure all required fields are filled in project data.

### Styling Issues

- Clear your browser cache
- Make sure all CSS module files are imported correctly
- Check that class names match between TSX and CSS files

### Form Not Submitting

The form is frontend-only by default. Follow the "Setting Up the Contact Form" section above.

## 📄 License

This project is free to use for personal and commercial projects.

## 🤝 Support

If you need help customizing this website, feel free to reach out or hire a developer.

---

**Built with ❤️ using Next.js, React, and CSS**

Last Updated: August 2026
