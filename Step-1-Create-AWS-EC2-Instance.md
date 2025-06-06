Step 1: Create an AWS EC2 Instance

Goal:
Set up a virtual server in the cloud (on Amazon Web Services) to host your website.

1.1 Create an AWS Account
Go to https://aws.amazon.com/

Click “Create an AWS Account” (or log in if you already have one).

Complete the signup process (it’s free to start, but requires a credit card).

1.2 Launch a New EC2 Instance
Go to the AWS Console:
After logging in, type “EC2” in the search bar and select EC2 from the list.

Click “Launch Instance”:
This starts the process of creating your virtual server.

Name your instance:
Enter a name like “Personal Blog Server”.

Choose an Amazon Machine Image (AMI):

Select Ubuntu Server 22.04 LTS (HVM), SSD Volume Type – 64-bit x86
(This is eligible for the free tier.)

Choose Instance Type:

Select t2.micro (eligible for free tier).

Configure Key Pair (login):

Click “Create new key pair”

Name it something like myblog-key and select .pem file format.

Download it and save it in a safe place on your computer. You need this to connect later.

Network settings (firewall):

Allow these ports:

22 (SSH) for connecting to the server

80 (HTTP) for your website

443 (HTTPS) for secure web access

You can do this by clicking “Edit” next to the “Network settings” section and adding the rules.

Launch instance:

Click the orange “Launch Instance” button at the bottom.

1.3 Find Your Server’s Public IP Address
In the EC2 Dashboard, under “Instances”, find your new instance.

The Public IPv4 address will be listed in the details.
(Write this down—you’ll use it later.)

Your AWS EC2 instance is now set up and running!
You have a virtual server ready to use.
