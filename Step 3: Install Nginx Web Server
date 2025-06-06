Step 3: Install Nginx Web Server (Detailed)

What is Nginx?
Nginx (“engine-x”) is a free, open-source web server. It’s used to host websites and web applications. When you install Nginx, your server will be able to show your website to anyone who visits your server’s IP address.

3.1 Update Your Server’s Package List
Why?
Before installing any new software, you should update your server’s list of available packages. This ensures you get the latest version and avoid errors.

How to do it:

In your EC2 terminal, type:

sudo apt update

What to expect:

Lots of lines starting with Hit:, Get:, or Reading package lists… Done.

No errors.

Screenshot:

Troubleshooting:

If you see “Temporary failure resolving…”, you might have a network issue (rare on AWS).

Try again after a minute or check your instance's internet connectivity.

3.2 Install Nginx
Why?
This command downloads and installs the Nginx web server software on your EC2 instance.

How to do it:

In your terminal, type:

sudo apt install nginx -y

What to expect:

A list of packages being downloaded and installed

Lines like:

Setting up nginx (1.18.0-...) ...
The process may take a few seconds to a minute

Screenshot:

Troubleshooting:

If you see a “permission denied” error, make sure you used sudo.

If you see a “package not found” error, go back and run sudo apt update again.

3.3 Check That Nginx is Running
Why?
After installation, Nginx should start automatically. This command checks if it’s running and ready to serve your website.

How to do it:

In your terminal, type:

sudo systemctl status nginx
What to expect:

You should see something like:

● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) ...
The key thing is that it says active (running) in green.

Screenshot:

How to exit:

Press the q key to quit the status view and return to the command prompt.

Troubleshooting:

If you see inactive (dead) or failed, try starting it manually:


sudo systemctl start nginx
If it still doesn’t work, check for typos or error messages in the output.

3.4 View the Default Nginx Web Page

Why?
You should now see Nginx’s test page from your browser to confirm the installation worked and your firewall settings are correct.

How to do it:

In the AWS EC2 console, find your instance’s Public IPv4 address.

Open a new tab in your web browser.

Type your IP address into the address bar, like this:

http://<your-public-ip>

Example:

http://52.201.123.45
Press Enter.

What to expect:

You should see a page that says “Welcome to nginx!”

If you see this, your web server is running and accessible!

Screenshot:

Troubleshooting:

If you get a timeout or “site can’t be reached” error:

Make sure you allowed HTTP (port 80) in your security group settings in Step 1.

Make sure your instance is running.

Try sudo systemctl restart nginx and refresh the page.

3.5 What’s Happening Behind the Scenes?
Nginx is listening on port 80 for incoming web requests.

When someone visits your server’s IP, Nginx serves a test page located at /var/www/html/index.nginx-debian.html.

Later, you’ll replace this page with your own website files.

You’re Ready!
If you see the “Welcome to nginx!” page, your server is ready to host your website.
