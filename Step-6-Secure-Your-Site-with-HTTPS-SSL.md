Step 6: Secure Your Site with HTTPS (SSL)
Why Enable HTTPS?
Security: Encrypts information sent between visitors and your website.

Trust: Visitors see a padlock and “Secure” in their browser.

SEO: Google ranks HTTPS sites higher than non-secure ones.

You’ll use Let’s Encrypt (a free, automated, open certificate authority) and Certbot to set this up.

6.1 Update Your Server
Why?
To make sure your system and package list are up-to-date before installing new software.

How:

bash
Copy
Edit
sudo apt update
sudo apt upgrade -y
sudo apt update gets the latest list of available software.

sudo apt upgrade -y installs the latest security patches and updates.

What You Should See:

Several lines of progress and maybe some packages being upgraded.

Ends with your regular prompt (ubuntu@...:~$).

Screenshot:

6.2 Install Certbot and the Nginx Plugin
Why?
Certbot gets and installs free SSL certificates from Let’s Encrypt and automatically configures Nginx for you.

How:

bash
Copy
Edit
sudo apt install certbot python3-certbot-nginx -y
certbot – the tool to automate SSL setup

python3-certbot-nginx – lets Certbot talk to Nginx and set it up automatically

What You Should See:

Terminal prints out “Reading package lists…”, then “Setting up certbot…”, etc.

Ends with your command prompt.

Screenshot:

6.3 Allow HTTPS Traffic in AWS Security Group
Why?
If you skipped opening port 443 for HTTPS earlier, your site won’t work over HTTPS.

How:

Go to AWS EC2 console

Click Instances in the sidebar

Select your instance

In the lower pane, find “Security” and click the security group link (it’s a blue text link)

Go to the Inbound rules tab

Click Edit inbound rules

Add Rule:

Type: HTTPS

Port: 443

Source: Anywhere (0.0.0.0/0)

Click Save rules

Screenshot:

6.4 Run Certbot to Get Your SSL Certificate
Why?
This command will:

Verify you own the domain

Request a free SSL certificate

Set up your Nginx server for HTTPS automatically

How:

bash
Copy
Edit
sudo certbot --nginx
Step-by-Step Prompts:

Email Address Prompt

Certbot asks:

pgsql
Copy
Edit
Enter email address (used for urgent renewal and security notices) (Enter 'c' to cancel): 
Enter your real email (used for security alerts, never spam)

Agree to Terms

Certbot asks:

css
Copy
Edit
(A)gree/(C)ancel: 
Type A and press Enter to agree to Let’s Encrypt’s terms.

Would you like to share your email with EFF?

Certbot asks:

mathematica
Copy
Edit
Share your email with the Electronic Frontier Foundation? (Y)es/(N)o: 
Type N (or Y if you wish—doesn’t affect SSL)

Enter domain names

Certbot asks:

pgsql
Copy
Edit
Please enter the domain name(s) you would like on your certificate (comma and/or space separated)
Type your domain, e.g.,

Copy
Edit
livinginbetweenblog.space
(If you want both with and without www., enter both: livinginbetweenblog.space www.livinginbetweenblog.space)

Which server blocks do you want to enable HTTPS for?

Certbot lists your Nginx configuration. Usually you can just hit Enter to select the default.

Redirect HTTP to HTTPS?

Certbot asks:

pgsql
Copy
Edit
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
1: No Redirect
2: Redirect (recommended)
Type 2 and press Enter. (This is the best option for security.)

What You Should See:

Certbot will print “Congratulations! Your certificate and chain have been saved at: …”

No errors or warnings

Screenshot:

6.5 Test Your Site
Why?
To confirm your SSL certificate is installed and HTTPS is working.

How:

Open your browser and type:

arduino
Copy
Edit
https://livinginbetweenblog.space
Look for:

A padlock icon in the address bar

No “Not Secure” warnings

Your website loads as expected

Screenshot:

6.6 Automatic Renewal for SSL Certificates
Why?
Let’s Encrypt certificates last only 90 days. Certbot sets up automatic renewal by default.

How to Check:

bash
Copy
Edit
sudo systemctl status certbot.timer
You should see active (waiting) in the output.

Screenshot:

How to Test Renewal Manually (Optional):

bash
Copy
Edit
sudo certbot renew --dry-run
This simulates a renewal without making changes.

🛠️ Troubleshooting
Certbot fails or says DNS not found:

Make sure your domain’s A record is correct and DNS has propagated (see whatsmydns.net).

Port 443 not open:

Check your AWS security group and add HTTPS (443) as shown above.

Browser still says “Not Secure”:

Try clearing your browser cache, using an incognito window, or reloading the page.

Certificate renewal warnings:

Manually renew with sudo certbot renew

⭐️ Tips
You only need to run Certbot once per domain.

Always use https:// in your links, especially for logins or forms.

To check your SSL configuration, use SSL Labs’ free tester.
