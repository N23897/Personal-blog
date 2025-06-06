Step 5: Set Up Your Domain Name (DNS)
Now you’ll connect a custom domain name (like yourblog.com) to your EC2 instance.
This step uses Namecheap as an example, but the process is similar on GoDaddy or others.

5.1 Buy a Domain Name
Go to https://www.namecheap.com/

Use the search bar to find an available domain you like (e.g., livinginbetweenblog.space)

Add it to your cart and complete the purchase

Screenshot:

Namecheap’s domain search and purchase page

5.2 Go to Your Domain’s Dashboard
Log in to Namecheap

Click “Domain List” on the left sidebar

Find your domain and click the “Manage” button next to it

Screenshot:

Namecheap domain dashboard, showing your domain and “Manage” button

5.3 Find Advanced DNS or Host Records
Click the “Advanced DNS” tab (sometimes called “DNS” or “Host Records”)

Screenshot:

Advanced DNS/Host Records section

5.4 Add/Edit an A Record
In the “Host Records” or “Records” section, find the A Record for @ (this represents your main domain, e.g., livinginbetweenblog.space)

Click “Edit” (or “Add New Record” if none exists)

Set the fields:

Host: @

Value: your EC2 Public IPv4 address (e.g., 52.201.123.45)

TTL: leave as “Automatic” or “30 min”

Click the green checkmark or “Save” button to save your changes

Screenshot:

A record editing screen, showing “@” and your EC2 IP

5.5 Wait for DNS Propagation
It usually takes 5–30 minutes for DNS changes to spread across the internet

Sometimes it can take up to a few hours for new domains

5.6 Test Your Domain
In your browser, go to your domain (e.g., http://livinginbetweenblog.space)

You should see your website!

Screenshot:

Browser window showing your site loading from your new domain

🛠️ Troubleshooting
Domain doesn’t work?

Wait a bit longer and refresh

Make sure the A record is pointing to the correct EC2 Public IPv4 address

Remove any old A records for the same host

Still not working after 2 hours?

Try flushing your browser cache or check from a different device/network

Use a DNS checker like whatsmydns.net to see if your domain’s A record is updated worldwide

⭐️ Tips
If you want your site to load with or without “www.”, add a second A record with Host: www and Value: your EC2 IP.

