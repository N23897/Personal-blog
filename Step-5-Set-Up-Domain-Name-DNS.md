Step 5: Set Up Your Domain Name (DNS)
5.1 Buy a Domain Name
If you don’t already have a domain:

Go to a domain registrar like Namecheap, GoDaddy, or any you prefer.

Search for a domain name (e.g., livinginbetweenblog.space) and complete the purchase.

Screenshot:

Domain search or purchase confirmation page

5.2 Open Your Domain’s DNS Settings
Log in to your domain provider (e.g., Namecheap).

Go to the “Domain List” or “My Domains.”

Click “Manage” next to your domain.

Find the “Advanced DNS” or “DNS Settings” tab (sometimes “Host Records”).

Screenshot:

DNS settings or “Advanced DNS” screen

5.3 Set the A Record to Point to Your EC2 Public IP
Find the A Record for @ (the main domain).

If one exists, edit it. If not, add a new A Record.

Host: @

Value: your EC2 Public IPv4 address (from Step 1)

TTL: Leave as default (Automatic or 30 minutes is fine)

Save or confirm changes.

Screenshot:

A Record edit form with your EC2 IP entered

5.4 (Optional) Add an A Record for www
To allow both yourdomain.com and www.yourdomain.com to work:

Add another A Record:

Host: www

Value: your EC2 Public IPv4 address

Save.

5.5 Wait for DNS Propagation
It may take 5 to 30 minutes for the new DNS settings to spread across the internet.

Sometimes, for new domains, it can take a few hours.

5.6 Test Your Domain
In your browser, visit:

arduino
Copy
Edit
http://yourdomain.com
You should see your website (the same as you saw at your server’s public IP).

Screenshot:

Browser with your site live at your domain

5.7 Troubleshooting
Domain doesn’t work?

Double-check the A Record points to your correct EC2 IP.

Wait a bit longer, then refresh.

Use a tool like whatsmydns.net to check DNS propagation worldwide.

Still not working?

Try clearing your browser cache, or test on a different device/network.

⭐️ Tips
Only one A record per host (@ or www). Remove old or extra A records.

Use the registrar’s help section if the interface looks different.

