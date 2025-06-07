# Step 6 – Secure Your Site with HTTPS (SSL)

This step enables HTTPS on your website, showing a padlock icon and encrypting all traffic.  
We use **Let’s Encrypt** (free SSL certificates) and **Certbot** (easy automation for Apache2).

---

## 6.1 Update Your Server

Make sure your system is up to date before installing new software.

```bash
sudo apt update
sudo apt upgrade -y
```

---
## 6.2 Install Certbot and Apache2 Plugin
Install Certbot and its Apache integration:

```bash
sudo apt install certbot python3-certbot-apache -y
```

---
## 6.3 Confirm Port 443 is Open (AWS Security Group)
In the AWS EC2 console, select your instance.

Under Security Groups, check Inbound rules.

You must have a rule for:

|Type	      |   Protocol   |   Port     | 		Source      |
|-----------|--------------|------------|-----------------|
| HTTPS	    |    TCP       |   443	    | 	0.0.0.0/0     |

If missing, click Edit inbound rules and add it.

---
## 6.4 Run Certbot to Obtain and Install an SSL Certificate
In your EC2 terminal, run:

```bash
sudo certbot --apache
```

You will be prompted for:

Email address: For SSL expiry/security notices.

Agree to the terms: Type A and hit Enter.

Domain name(s): Enter your domain (e.g., yourdomain.com).
Enter both with and without www (space-separated) if you set up both.

Redirect HTTP to HTTPS: Choose 2 (recommended).

Certbot will:

Prove you control the domain.

Obtain a free SSL certificate.

Update Apache2 to serve your site securely.

You should see:

```python-repl
Congratulations! You have successfully enabled https://yourdomain.com
```

---
6.5 Test HTTPS
Visit your website in a browser:

```arduino
https://yourdomain.com
```
You should see your homepage with a padlock icon in the address bar.

----
6.6 Check Auto-Renewal
Let’s Encrypt certificates last 90 days, but Certbot auto-renews them.

To check the timer:

```bash
sudo systemctl status certbot.timer
```
You should see active (waiting) in the output.

----
6.7 Troubleshooting
Certbot: “Domain not found” or “Challenge failed”

Make sure your DNS A Record is correct and propagated.

Wait 30 minutes and try again if you just updated DNS.

No padlock / still “Not Secure”

Make sure you use https:// in the browser.

Clear cache or use Incognito mode.

Restart Apache2 if needed:

```bash
sudo systemctl restart apache2
```

Port 443 errors

Re-check AWS Security Group inbound rules for HTTPS.

Certificate won’t renew

Manually test renewal with:

```bash
sudo certbot renew --dry-run
```

---
## 6.8 Next Steps
If your site is secure with HTTPS, continue to Step 7 – Final Checks and Troubleshooting.

## References
Let’s Encrypt

Certbot for Apache

AWS EC2 Documentation



