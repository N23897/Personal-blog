Step 2: Connect to Your EC2 Instance (Ubuntu Server)
Now that your EC2 instance is running, you need to connect to it to install software and manage your server.

Option 1: Connect Using the AWS Web Browser (EC2 Instance Connect)
Easiest if you’re a beginner!

Go to the AWS EC2 Dashboard and click Instances in the left sidebar.

Find your instance, and select the checkbox next to it.

Click the Connect button at the top.

In the window that pops up, the default tab is EC2 Instance Connect.
(If not, click the EC2 Instance Connect tab.)

Click the orange Connect button.

What happens:
A new browser tab opens with a command-line terminal. You are now logged in as the ubuntu user on your server!

Screenshot suggestions:

Instance selection in EC2 dashboard

Connect button

EC2 Instance Connect tab

Browser terminal showing you’re logged in (ubuntu@ip-...:~$)

Option 2: Connect from Your Computer Using SSH
If you want to use your own Terminal (Mac, Linux, Windows with WSL, or Git Bash):

2.1. Make Sure Your .pem Key Is Safe
Find the .pem key file you downloaded in Step 1 (e.g., myblog-key.pem).

Move it to a safe location (e.g., your home or downloads folder).

2.2. Set Permissions (IMPORTANT)
Open your terminal and run:

bash
Copy
Edit
chmod 400 ~/Downloads/myblog-key.pem
(Replace the path if your .pem file is somewhere else)

Why?
SSH will refuse to use the key if it’s not “read-only” for your user, for security reasons.

2.3. Find Your Public IP
In the EC2 dashboard, copy your Public IPv4 address (e.g., 13.211.120.10).

2.4. Connect Using SSH
From your terminal, run:

bash
Copy
Edit
ssh -i ~/Downloads/myblog-key.pem ubuntu@<YOUR_PUBLIC_IP>
Example:

bash
Copy
Edit
ssh -i ~/Downloads/myblog-key.pem ubuntu@13.211.120.10
If it’s your first time connecting, you’ll see a message about authenticity. Type yes and press Enter.

What happens:
You should see a welcome message and a prompt like:

ruby
Copy
Edit
ubuntu@ip-xxx-xxx-xxx-xxx:~$
You’re now inside your Ubuntu server!

Screenshot suggestions:

File location of .pem key

The terminal showing the ssh command

Successful login message

Troubleshooting
Permission denied (publickey):

Make sure your .pem file permissions are set: chmod 400 myblog-key.pem

Double-check you’re using the correct username (ubuntu) and public IP.

Connection timed out:

Check your AWS security group allows SSH (port 22) from your IP.

