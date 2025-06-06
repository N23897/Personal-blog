Step 2: Connect to Your EC2 Server
Now that your EC2 instance is running, let’s connect to it so you can manage your server and install software.
You have two easy options:

A. Use AWS’s browser terminal (EC2 Instance Connect)

B. Use your own computer’s terminal with the PEM key

Option A: Connect Using EC2 Instance Connect (No Downloads Needed)
Go to your AWS EC2 Console.

In the left menu, click “Instances”.

Select your instance by clicking the checkbox next to it.

At the top, click the “Connect” button.

Choose the “EC2 Instance Connect” tab (it’s the default).

Click the orange “Connect” button.

A new browser tab will open with a terminal window.
You are now logged in as the ubuntu user on your server!

Screenshots to include:

AWS EC2 "Instances" dashboard with your instance listed

The "Connect" button at the top

The "EC2 Instance Connect" dialog/tab

The terminal window after you connect

Option B: Connect Using Your Terminal (macOS, Linux, or Windows PowerShell)
Find your PEM key (downloaded during Step 1).
Example location: ~/Downloads/myblog-key.pem

Set correct permissions (only needed the first time):

bash
Copy
Edit
chmod 400 ~/Downloads/myblog-key.pem
Open your terminal and connect with:

bash
Copy
Edit
ssh -i ~/Downloads/myblog-key.pem ubuntu@<YOUR_PUBLIC_IP>
Replace <YOUR_PUBLIC_IP> with your server’s Public IPv4 address (from Step 1.3).

Example:
ssh -i ~/Downloads/myblog-key.pem ubuntu@54.201.123.45

Accept the prompt (type yes if asked).

You’re now logged in as ubuntu on your EC2 server!

Screenshots to include:

Location of your .pem file in your file manager

Example of running the ssh command in Terminal

Connected session (shows ubuntu@ip-address:~$)

Success!
You are now connected to your EC2 server and ready to install the web server software in the next step.

//////////Tips & Troubleshooting\\\\\\\\\\\\\\\\\\
Permission denied (publickey):

Make sure your PEM file permissions are set with chmod 400

Double-check the path and filename in your SSH command

Cannot connect?

Make sure your instance is running and the security group allows SSH (port 22)
