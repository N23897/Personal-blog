# Step 6: Secure Your Site with HTTPS (SSL)
---
## 6.1 Why Enable HTTPS?
HTTPS (SSL/TLS) encrypts all data between your visitors and your site

Makes your site safer and shows the 🔒 padlock in browsers

Google prefers (and sometimes requires) HTTPS for ranking

---
## 6.2 Prerequisites
Your site is running on your EC2 Ubuntu server and is publicly accessible

Apache2 is installed and serving your content

DNS A record is set up, and your domain (e.g., yourdomain.com) points to your server’s IP

You can access your site using your domain in a browser

----
## 6.3 Install Snap and Certbot
Certbot (the tool that handles SSL for us) is best installed via Snap.

```bash
sudo apt update
sudo apt install snapd -y
sudo snap install core; sudo snap refresh core
```
(Installs Snap and its core utilities)

Remove old Certbot if it exists:

```bash
sudo apt remove certbot
```
Install Certbot using Snap:

```bash
sudo snap install --classic certbot
```
Link Certbot so you can run it directly:

```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

---
6.4 Open HTTPS (Port 443) in AWS
Go to your EC2 instance’s Security Group in the AWS Console

Make sure there is an inbound rule:


|   	  Type             |         Protocol	         |         Port	               |        Source           |
|--------------------------|-----------------------------|-----------------------------|-------------------------|
|      HTTPS               |        TCP	4                |           443	           |       0.0.0.0/0         | 


(Needed for visitors to access your secure site)

---
## 6.5 Request and Install Your Free SSL Certificate
Run Certbot with Apache integration (this will update Apache for you):

```bash
sudo certbot --apache
```
Enter your email address (for important SSL expiry reminders)

Agree to the terms (type A)

Enter your domain(s) when prompted (e.g., yourdomain.com and www.yourdomain.com)

Choose to redirect HTTP to HTTPS when asked (recommended)

Certbot will:

Prove you own the domain

Automatically configure Apache for HTTPS

Install your SSL certificate

---
## 6.6 Test Your Site
In your browser, visit:
https://yourdomain.com

You should see the padlock icon and your site will load securely

6.7 Auto-Renewal and Manual Renewal
Let’s Encrypt certificates last for 90 days. Certbot sets up auto-renewal for you.

Check if the renewal timer is active:

```bash
sudo systemctl status snap.certbot.renew.timer
```
To renew manually (or test renewal), run:

```bash
sudo certbot renew
```

----
## Troubleshooting
Error: “Domain not found” or challenge fails

Double-check your DNS A record and wait for propagation (up to 30 min)

Still “Not Secure”

Use the Incognito window or clear your browser cache

Confirm you selected redirect during Certbot setup

HTTPS/443 not working

Make sure port 443 is open in the AWS Security Group

----
## References
Certbot: Apache on Ubuntu with Snap

Let’s Encrypt: Getting Started

Murdoch Uni: Obtain a Digital Certificate


You’re now live and secure with HTTPS! Your visitors will see the 🔒 padlock in their browser.
