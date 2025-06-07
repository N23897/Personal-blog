# Step 7 – Final Checks and Troubleshooting

This step ensures your website is working, secure, and visible from anywhere. It also helps you resolve common issues.

---

## 7.1 Visit Your Website

- In your browser, enter your full domain name with `https://`:

```bash
https://yourdomain.com
```
*(Replace with your domain, e.g., `https://livinginbetweenblog.space`)*


- Press Enter.

---

## 7.2 What Should You See?

- Your homepage (not the Apache “It works!” page)
- A **padlock icon** in the address bar (shows HTTPS is active)
- No “Not Secure” or browser error messages
- All features (images, CSS, JS, map, countdown, contact form) work properly

---

## 7.3 Test on Other Devices and Networks

- Try on your phone and/or a friend’s device
- Use both WiFi and mobile data
- This confirms your DNS and SSL work everywhere, not just for you

---

## 7.4 Check HTTP to HTTPS Redirection

- In your browser, visit your domain with `http://` (not `https://`):

```bash
http://yourdomain.com
```

- You should be **automatically redirected** to `https://yourdomain.com`

---

## 7.5 Use Online Testing Tools

- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/)  
Enter your domain and review your SSL grade (should be A or A+)
- [whatsmydns.net](https://www.whatsmydns.net/)  
Enter your domain to check if DNS points to your EC2 public IP worldwide

---

## Troubleshooting Common Problems

**A. Browser says “Not Secure” or no padlock**

- Use `https://` in the address bar
- Reload/refresh the page, or clear browser cache
- Click the padlock to view SSL certificate details (should say “Let’s Encrypt”)
- If not working, rerun Certbot:

```bash
sudo certbot --apache
```

B. Still seeing Apache “It works!” page

Your new index.html may not be uploaded

Upload your files again to /var/www/html/

Refresh the page


C. DNS Issues (site won’t load or “can’t be found”)

Double-check your DNS A Record points to your EC2 public IP

Wait up to 60 minutes for DNS propagation

Test with whatsmydns.net


D. SSL certificate errors

Rerun Certbot and double-check your domain spelling

Ensure port 443 is open in AWS Security Group

Restart Apache2:

```bash
sudo systemctl restart apache2
```

E. Features missing (images, CSS, JS not loading)

Ensure all referenced files are uploaded to /var/www/html/

Check for typos in filenames or paths in your HTML

----
## Success Criteria
Website loads at https://yourdomain.com with a padlock icon

No browser warnings or errors

All features (images, JS, map, contact form, etc.) work from any device or network

Congratulations!
You have deployed a professional, secure Apache2 website on AWS EC2 with your own domain.

---
## Optional Next Steps
Add new pages or features

Share your site with friends or as part of your portfolio

Set up analytics or backup solutions

## References
SSL Labs Test

whatsmydns.net

Let’s Encrypt

AWS EC2 Documentation

