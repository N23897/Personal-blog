# Step 3 – Install Apache2 Web Server on Ubuntu EC2

This step guides you through installing and starting the Apache2 web server on your Ubuntu EC2 instance.  
Apache2 will serve your website files to anyone who visits your domain or server IP.

---

## 3.1 Update Your Server’s Package List

Before installing new software, always update your server to ensure the latest security patches and versions.

```bash
sudo apt update
sudo apt upgrade -y
```

----
## 3.2 Install Apache2
Install the Apache2 package:

```bash
sudo apt install apache2 -y
```

---
## 3.3 Check Apache2 Status
Verify that Apache2 is running:

```bash
sudo systemctl status apache2
```

You should see Active: active (running) in green.

Tip: Press q to exit the status window and return to the command prompt.

----
## 3.4 Test Apache2 in Your Browser
Go to your AWS EC2 console, select Instances, and copy your instance’s Public IPv4 address (for example, 3.9.142.21).

In your web browser, enter the following URL (replace with your public IP):

```bash
http://<YOUR_PUBLIC_IP>
```
Example:

```bash
http://3.9.142.21
```

You should see the "Apache2 Ubuntu Default Page" with the message:
"It works!"

-----
## 3.5 Where to Place Your Website Files
By default, Apache2 serves files from this directory:

```bash
/var/www/html/
```

The default homepage is /var/www/html/index.html.

You will replace this file with your own index.html and other website assets in the next step.

----
## 3.6 Troubleshooting
The site doesn’t load or the connection is refused:

Ensure your AWS Security Group allows HTTP (port 80) from anywhere.

Make sure your instance is in the running state.

Try restarting Apache2:

```bash
sudo systemctl restart apache2
```
Apache2 status not active:

Start Apache2 manually:

```bash
sudo systemctl start apache2
```

----
## 3.7 Next Steps
Once Apache2 is running and you can see the default page in your browser, continue to Step 4 – Upload Website Files.

----
## References
Apache2 Documentation for Ubuntu

AWS EC2 Getting Started

---
