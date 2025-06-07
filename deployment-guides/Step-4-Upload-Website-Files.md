# Step 4 – Upload Your Website Files to Apache2

Now that Apache2 is running, you can upload your website’s files (HTML, CSS, JS, images, etc.) so they are visible to the world.

---

## 4.1 Where to Upload Files

Apache2 serves content from:

```bash
/var/www/html/
```

Place all your website files (e.g., `index.html`, `custom.css`, `custom.js`, `/images`) in this directory.

---

## 4.2 Prepare Your Website Files

On your computer, make sure you have all the files you want to upload:
- `index.html`
- `custom.css`
- `custom.js`
- `/images` folder (if you have images)
- Any other files for your site

---

## 4.3 Upload Files Using SCP

SCP (“secure copy”) lets you copy files from your computer to your EC2 server using your `.pem` key.

**Open Terminal (macOS/Linux) or Git Bash (Windows) and use these commands:**

### a) Change to Your Website Directory

```bash
cd /path/to/your/website/files
```
(Replace with your actual file location.)

b) Upload Files
Upload each file:

```bash
scp -i ~/Downloads/myblog-key.pem index.html ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
scp -i ~/Downloads/myblog-key.pem custom.css ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
scp -i ~/Downloads/myblog-key.pem custom.js ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
```
To upload a folder (like images):

```bash
scp -i ~/Downloads/myblog-key.pem -r images ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
```
Replace myblog-key.pem and <YOUR_PUBLIC_IP> with your actual PEM file and instance public IP.

c) Overwrite the Default File
Uploading your index.html will replace the default Apache2 page.

---
#4.4 Test Your Website
In your browser, visit:

```cpp
http://<YOUR_PUBLIC_IP>
```
Replace <YOUR_PUBLIC_IP> with your instance’s actual IP address.

You should now see your own homepage instead of the default “It works!” page.

---
Troubleshooting
Permission denied:

Make sure your .pem file is set to strict permissions:

```bash
chmod 400 ~/Downloads/myblog-key.pem
```
Page not updating:

Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R).

Double-check you uploaded files to /var/www/html/.

Missing images/CSS/JS:

Make sure all folders (like /images) and referenced files are uploaded.

---
Tips
Upload multiple files at once:

```bash
scp -i ~/Downloads/myblog-key.pem *.html *.css *.js ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
```
Upload the entire website folder:

```bash
scp -i ~/Downloads/myblog-key.pem -r . ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
```
---
Next Steps
Once your site is visible at your EC2 IP, continue to Step 5 – Set Up Your Domain Name (DNS).


References
SCP Command Guide

AWS EC2 Documentation

