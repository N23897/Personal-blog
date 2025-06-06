# Living In Between – Personal Blog Cloud Deployment

**Author:** Nasrin Sadiqi  
**Live Site:** [https://livinginbetweenblog.space](https://livinginbetweenblog.space)  
**Server IP Address**: 18.139.162.207![image](https://github.com/user-attachments/assets/aec37934-7061-4a30-b75d-e443bfb8d51a)
**Video Explainer:** (add your video link here)

---

## Project Overview

This repository documents the full cloud deployment of **Living In Between**, a modern, interactive personal blog built with HTML, CSS, and JavaScript and hosted securely on AWS EC2 with Apache2.  
It includes step-by-step setup guides for infrastructure, domain, and SSL, plus all files needed to reproduce or customize the project.

---

## Website Features

**Living In Between** is more than just a blog. It’s a visual, interactive experience focused on sharing travel stories, everyday life moments, and cultural connections. Key features include:

- **Animated “Flower Shower” Background**  
  Subtle falling frangipani petals create a calm, dreamy backdrop using HTML5 canvas animation.

- **Dynamic Mood Toggle**  
  A “Press me” button instantly changes the site’s background to a new pastel color palette.

- **Flip-Clock Countdown Timer**  
  Shows a live countdown to the next planned trip, with animated days, hours, minutes, and seconds.

- **Travel Map with Interactive Pins**  
  A map highlights places visited so far, with custom icons and pop-up notes about each destination.

- **Polaroid-Style Photo Carousel**  
  Horizontally scrolling “polaroid” cards display memorable travel moments, each with playful captions.

- **Modal Lightbox for Photos**  
  Click any photo to enlarge it and view its caption in a stylish modal overlay.

- **Typing Animation for Welcome Message**  
  Rotating header text types out a series of friendly intro phrases.

- **Random Fun Fact Display**  
  Each page load shows a different travel tip or fun fact at the top of the site.

- **Image Gallery Filters**  
  Buttons allow visitors to filter photos by country or trip, instantly reorganizing the grid.

- **Back to Top Button**  
  Smoothly scrolls the page back to the top, appearing only when needed.

- **Contact Form**  
  Visitors can send a message directly via the built-in contact form (using Formspree).

- **Footer with Social Links**  
  Quick links to Instagram and GitHub profiles.

- **Mobile Responsive & Accessible**  
  Layout, navigation, and visuals adapt for all devices and screen sizes.

---

## Cloud Project Purpose

- **End-to-end cloud hosting:** Full documentation for deploying a static website on AWS EC2.
- **Modern, interactive front-end:** Uses pure HTML/CSS/JS—no frameworks required.
- **Secure and professional:** Connected to a custom domain and secured with free HTTPS via Let’s Encrypt.
- **Beginner-friendly and reproducible:** Every step is detailed for easy rebuilding or adaptation.

---

## Documentation

All setup steps are included as Markdown files for easy following:
- **[Step-1-Launch-EC2-Instance.md](./Step-1-Launch-EC2-Instance.md)**
- **[Step-2-Connect-To-EC2.md](./Step-2-Connect-To-EC2.md)**
- **[Step-3-Install-Apache2.md](./Step-3-Install-Apache2.md)**
- **[Step-4-Upload-Website-Files.md](./Step-4-Upload-Website-Files.md)**
- **[Step-5-Setup-Domain-DNS.md](./Step-5-Setup-Domain-DNS.md)**
- **[Step-6-Secure-With-SSL.md](./Step-6-Secure-With-SSL.md)**
- **[Step-7-Final-Checks.md](./Step-7-Final-Checks.md)**
- **[Deployment-Checklist.md](./Deployment-Checklist.md)**

---

## References & Credits

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Let’s Encrypt](https://letsencrypt.org/)
- [Certbot](https://certbot.eff.org/)
- [HTML5 UP](https://html5up.net/) (design inspiration)
- [Formspree](https://formspree.io/) (contact form)
- [Leaflet](https://leafletjs.com/) (interactive map)
- [Font Awesome](https://fontawesome.com/) (icons)
- [Murdoch University ICT171 Labs](https://github.com/SCH-IT-MurdochUni/NetworkingLabs)

---

## License

All website code and instructions are for educational purposes.  
You’re welcome to use, adapt, or reference for your own learning or coursework.

---

## Support

For questions, troubleshooting, or suggestions, open an Issue in this repo or contact me via GitHub.

---

**Thank you for exploring! Deploy your story to the world—one cloud at a time.**
