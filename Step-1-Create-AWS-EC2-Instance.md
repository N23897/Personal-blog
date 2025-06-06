Step 1: Launch an AWS EC2 Instance (Ubuntu)
What is an EC2 Instance?
An EC2 instance is a virtual computer in the cloud that you control. It will act as your web server.

1.1. Sign Up or Log In to AWS
Go to https://aws.amazon.com/.

If you don’t have an account, click “Create an AWS Account” and follow the instructions. You’ll need to enter some personal and payment information (you can use the free tier).

If you have an account, just sign in.

1.2. Access the EC2 Dashboard
After logging in, type “EC2” in the search bar at the top of the AWS console and select EC2 from the results.

This opens the EC2 Dashboard.

1.3. Launch a New Instance
Click the “Launch Instance” button (usually at the top right).

1.3.1. Name Your Instance
In the “Name and tags” field, enter a name like Personal Blog Server.

1.3.2. Choose an Amazon Machine Image (AMI)
In the “Application and OS Images” section, search for and select:
Ubuntu Server 22.04 LTS (HVM), SSD Volume Type

Confirm it says “Free tier eligible”.

1.3.3. Choose Instance Type
Select t2.micro (which is free tier eligible).

1.3.4. Configure Key Pair (for SSH Login)
Under “Key pair (login)”, choose Create new key pair.

Name it (e.g., myblog-key), select PEM format, and click Create key pair.

Download the .pem file and save it somewhere safe (you will need this to connect to your server later).

1.3.5. Configure Network Settings (Security Group)
Under “Network settings,” click Edit.

Make sure these ports are allowed:

SSH (port 22): so you can connect to your server.

HTTP (port 80): so your website can be visited.

HTTPS (port 443): so your site can be secure (SSL/HTTPS).

If any are missing, click “Add security group rule” and select the correct type/port.

1.3.6. Launch the Instance
Scroll down and click the orange “Launch Instance” button.

Wait a few seconds. You should see a “Success” message and your new instance listed.

1.4. Find Your Public IPv4 Address
In the EC2 Dashboard, click “Instances” in the left menu.

Find your new instance. There should be a column called Public IPv4 address.

Write this down or copy it—you’ll need it to connect and set up your website.

Summary of What You’ve Done
You’ve created a virtual Ubuntu server in the cloud

You have a .pem key file to access it securely

Your server is ready for the next steps

Example Screenshots to Include:
AWS EC2 Dashboard

“Launch Instance” page

Ubuntu Server 22.04 selected

Key pair creation

Security group settings with ports 22, 80, and 443

Instance running and public IP visible
