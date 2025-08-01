# Shok iOS App Website

A modern, responsive website for the Shok iOS app built with vanilla HTML, CSS, and JavaScript. Designed for deployment via GitHub Pages with minimal dependencies.

## ✨ Features

- **Modern Design**: Clean, sleek interface with smooth animations
- **Fully Responsive**: Looks great on all devices (mobile-first approach)
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed
- **Contact Form**: Integrated contact form using Formspree
- **Privacy Policy**: Complete privacy policy page
- **Smooth Animations**: CSS animations with performance optimizations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Quick Start

### 1. Add Your Images

Add the required images to the `images/` directory:
- `logo.svg` - Your app logo
- `hero-screenshot.png` - Main app screenshot
- `screenshot-1.png` to `screenshot-4.png` - App screenshots
- `app-store-badge.svg` - App Store download badge
- `favicon.svg` and `favicon.ico` - Website favicons

See `images/README.md` for detailed specifications.

### 2. Customize Content

Edit the following files to match your app:

**`index.html`:**
- Update app name, description, and features
- Replace placeholder text with your app's information
- Update email addresses and social links

**`privacy.html`:**
- Update company information and contact details
- Modify privacy policy content as needed

### 3. Setup Contact Form

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. In `index.html`, replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 4. Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your Site:**
   Your website will be available at: `https://yourusername.github.io/shok-web`

## 🛠 Customization

### Colors & Branding

The website uses CSS custom properties for easy theming. Edit `css/style.css`:

```css
:root {
  --primary-color: #007AFF;        /* Main brand color */
  --secondary-color: #5AC8FA;      /* Secondary brand color */
  --primary-gradient: linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%);
  /* ... other variables ... */
}
```

### Adding New Sections

The website is built with semantic HTML. To add new sections:

1. Add the HTML structure in `index.html`
2. Add corresponding CSS in `css/style.css`
3. Add any JavaScript interactions in `js/main.js`

### Animations

Animations are CSS-based for performance. Key animation classes:
- `.fadeInUp` - Fade in from bottom
- `.fadeInLeft` - Fade in from left
- `.fadeInRight` - Fade in from right
- `.animate-on-scroll` - Triggered by scroll

## 📱 Contact Form Features

- **Real-time validation** with error messages
- **Spam protection** via Formspree
- **Success/error notifications** with smooth animations
- **Responsive design** that works on all devices
- **Accessible** with proper labels and ARIA attributes

## 🎨 Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No framework dependencies
- **Formspree**: Contact form backend
- **GitHub Pages**: Free hosting

## 📊 Performance Features

- **Optimized images**: Proper format recommendations
- **Minimal JavaScript**: Only essential interactions
- **CSS animations**: Hardware-accelerated where possible
- **Lazy loading**: Images load as needed
- **Responsive images**: Proper sizing for different screens

## 🔒 Privacy & Security

- **GDPR Compliant**: Comprehensive privacy policy
- **No tracking**: No analytics or tracking scripts by default
- **Secure forms**: Protected by Formspree's security measures
- **HTTPS**: Automatically enabled on GitHub Pages

## 📖 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful degradation**: Basic functionality on older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help:
1. Check the `images/README.md` for asset specifications
2. Review the inline comments in the code
3. Test the contact form with your Formspree setup
4. Ensure all images are properly sized and optimized

## 🚢 Going Live Checklist

- [ ] Add all required images to `images/` directory
- [ ] Update all content in `index.html` and `privacy.html`
- [ ] Setup Formspree contact form
- [ ] Test contact form functionality
- [ ] Verify responsive design on different devices
- [ ] Check loading speed and optimize images
- [ ] Enable GitHub Pages in repository settings
- [ ] Test live website functionality
- [ ] Update App Store links when app is published

---

**Built with ❤️ for iOS app developers who want a professional web presence without the complexity.**
