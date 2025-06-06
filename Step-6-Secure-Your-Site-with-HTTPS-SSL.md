Step 6: Secure Your Website with HTTPS (SSL)
Why Do You Need HTTPS?
Security: Encrypts all information between your visitors and your website. No one can “listen in.”

Trust: Shows a padlock in the browser, so visitors know your site is safe.

Better Google Ranking: Google ranks secure sites higher.

We will use Let’s Encrypt (a free, trusted certificate authority) and Certbot (an easy tool to get and install SSL certificates for you).

6.1 Update Your Server (Always Do This First)
Connect to your EC2 instance (see Step 2).

In your terminal, run:

bash
Copy
Edit
sudo apt update
sudo apt upgrade -y
What does this do?

Refreshes your server’s list of software and installs the latest updates.

Keeps your server secure and avoids errors when installing new programs.

6.2 Install Certbot and the Apache2 Plugin
Certbot helps you get and install SSL certificates. The Apache2 plugin lets Certbot automatically set up HTTPS for you.

Run this in your server’s terminal:

bash
Copy
Edit
sudo apt install certbot python3-certbot-apache -y
This downloads and installs Certbot and its Apache integration.

It may take a minute or two.

How to know it worked:
You’ll see lines that say things like Setting up certbot..., and you’ll get your prompt back (ubuntu@...:~$).

6.3 Make Sure Your Server’s Firewall (Security Group) Allows HTTPS
Why?
Apache needs to accept traffic on port 443 (the port for HTTPS).

How:
In the AWS EC2 console, click Instances in the left menu.

Find your running instance.

In the details pane at the bottom, look for Security groups and click the group name (it’s a blue link).

Click the Inbound rules tab.

You need a rule that says:

Type: HTTPS

Port: 443

Source: 0.0.0.0/0 (anywhere)

If it’s not there, click Edit inbound rules → Add rule → fill as above → Save rules.

6.4 Run Certbot to Get Your SSL Certificate
Now, let’s request and install your SSL certificate.

In your EC2 terminal, run:

bash
Copy
Edit
sudo certbot --apache
Certbot will guide you through a few questions:

Email Address:

It will ask:

pgsql
Copy
Edit
Enter email address (used for urgent renewal and security notices) (Enter 'c' to cancel):
Type your real email and press Enter.
Why? If your certificate is about to expire or there’s a problem, Let’s Encrypt will email you.*

Agree to Terms of Service:

It will ask:

css
Copy
Edit
(A)gree/(C)ancel:
Type A and press Enter.

Share Email with EFF:

It will ask:

mathematica
Copy
Edit
Share your email with the Electronic Frontier Foundation? (Y)es/(N)o:
You can type N (this does not affect SSL).

Enter Domain Name:

It will ask:

pgsql
Copy
Edit
Please enter the domain name(s) you would like on your certificate (comma and/or space separated):
Type your domain name (e.g., livinginbetweenblog.space).
If you want both www.livinginbetweenblog.space and livinginbetweenblog.space to work securely, enter both, separated by a space.

Choose the Site to Enable HTTPS For:

If you see a list of sites, choose the number matching your site or press Enter for the default.

Redirect HTTP to HTTPS?

It will ask:

pgsql
Copy
Edit
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for new sites, or if you're confident your site works on HTTPS.
Type 2 and press Enter.
Why? This is the most secure. Anyone visiting http:// will be sent to https://.*

If everything works, Certbot will finish with:

python-repl
Copy
Edit
Congratulations! You have successfully enabled https://yourdomain.com
...
Your site is now secure!

6.5 Test Your HTTPS Website
In your browser, go to:

arduino
Copy
Edit
https://yourdomain.com
You should see your website with a padlock icon in the address bar.

Click the padlock to view certificate details (should say “Let’s Encrypt”).

6.6 How SSL Auto-Renewal Works
Let’s Encrypt certificates are valid for 90 days.

Certbot sets up automatic renewal, so you don’t have to do anything.

To check the status, run:

bash
Copy
Edit
sudo systemctl status certbot.timer
It should say active (waiting).

6.7 Common Problems & Fixes
A. Certbot errors like “Domain not found” or “Challenge failed”:

Make sure your DNS A record points to your EC2 IP.

Make sure DNS has finished propagating (can take up to 30 minutes after changes).

Wait and try again.

B. No padlock or “Not Secure”:

Make sure you’re using https:// in your browser.

Clear browser cache, or try Incognito/Private browsing.

Check for typos in your domain.

Restart Apache2 if needed:

bash
Copy
Edit
sudo systemctl restart apache2
C. Port 443 not open:

Check your AWS Security Group inbound rules (see 6.3).

D. Certificate won’t renew:

You can test manual renewal with:

bash
Copy
Edit
sudo certbot renew --dry-run
⭐️ Extra Tips
You only need to do this process once per domain.

If you change your domain or add a subdomain, run Certbot again.

You can always check your SSL certificate’s details by clicking the padlock in your browser.

