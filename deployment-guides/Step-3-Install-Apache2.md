Step 3: Install Apache2 Web Server
You’ll now install Apache2, a popular and reliable web server, on your Ubuntu EC2 instance. This will let your server show web pages to the world.

3.1 Update Your Server’s Package List
Why?
To ensure you get the latest software and security updates before installing anything new.

How:

In your EC2 terminal (from Step 2), type:

bash
Copy
Edit
sudo apt update
sudo apt upgrade -y
sudo = run as administrator (“superuser do”)

apt update = refreshes the list of available software

apt upgrade -y = installs any available updates (-y means “yes to all prompts”)

What you should see:
Lots of output as your server updates. Ends with your regular prompt.

3.2 Install Apache2
How:

In the terminal, type:

bash
Copy
Edit
sudo apt install apache2 -y
This command tells Ubuntu to download and install the Apache2 web server.

The process should take less than a minute.

What you should see:
More lines of output. At the end, Apache2 will be installed and running.

3.3 Check That Apache2 is Running
How:

Type:

bash
Copy
Edit
sudo systemctl status apache2
What you should see:
A status report. Look for a line that says Active: active (running) in green.

If you see this, Apache2 is up and running!

Press q to exit the status screen.

3.4 Test Apache2 in Your Browser
Go back to your AWS EC2 dashboard and find your instance’s Public IPv4 address (e.g., 13.211.120.10).

In your web browser, type:

cpp
Copy
Edit
http://<YOUR_PUBLIC_IP>
(Replace <YOUR_PUBLIC_IP> with your actual IP, e.g., http://13.211.120.10)

What you should see:
A white page with the message:

rust
Copy
Edit
Apache2 Ubuntu Default Page
It works!
If you see this, Apache2 is serving web pages to the internet!

3.5 Where to Place Your Website Files
The web server “document root” is:

css
Copy
Edit
/var/www/html/
The default file you see is /var/www/html/index.html.

You will upload your own website files here in the next step!

Screenshot suggestions:
Terminal with sudo apt install apache2 -y

Apache2 “It works!” page in the browser

Status command showing active (running)

Troubleshooting
Site won’t load:

Check that your AWS security group allows HTTP (port 80).

Try restarting Apache2: sudo systemctl restart apache2

“Active: inactive (dead)” or “failed” status:

Try: sudo systemctl start apache2

Check for errors in terminal output.
