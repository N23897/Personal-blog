# Step 2 – Connect to Your AWS EC2 Ubuntu Server

This guide explains how to securely connect to your running EC2 instance using SSH, either with AWS's web browser interface or your own terminal and PEM key.

---

## 2.1 Prerequisites

- Your EC2 instance is running (see [Step 1](./Step-1-Create-AWS-EC2-Instance.md))
- You have your `.pem` private key file downloaded and safe
- You know your instance’s **Public IPv4 address**

---

## 2.2 Option A: Connect Using AWS Web Browser (EC2 Instance Connect)

This is the easiest way for beginners—no command line required.

1. Open the [AWS EC2 Console](https://console.aws.amazon.com/ec2) and select **Instances**.
2. Tick the checkbox for your instance.
3. Click **Connect** at the top of the dashboard.
4. In the popup, select the **EC2 Instance Connect** tab.
5. Click **Connect** (orange button).

**Result:**  
A new browser tab opens with a terminal—you're now logged in as `ubuntu` on your EC2 server.

---

## 2.3 Option B: Connect from Your Computer Using SSH

This method uses your terminal and PEM key (recommended for developers and repeat access).

### 2.3.1 Set File Permissions for Your PEM Key

SSH requires the PEM file to have strict permissions:

```bash
chmod 400 ~/Downloads/myblog-key.pem
```


2.3.2 Connect to Your EC2 Instance
Use the following command, replacing with your values:

```bash
ssh -i ~/Downloads/myblog-key.pem ubuntu@<YOUR_PUBLIC_IP>
```

Example:
```bash
ssh -i ~/Downloads/myblog-key.pem ubuntu@13.211.120.10
```

The first time, type yes if prompted about authenticity.

You should now see a prompt like ubuntu@ip-xxx-xxx-xxx-xxx:~$

---
## Troubleshooting
Permission denied (publickey):

Ensure you ran chmod 400 on your PEM file.

Double-check your username (ubuntu) and public IP.

Connection timed out:

Check your AWS Security Group allows inbound SSH (port 22).

Still stuck?

Try connecting from the AWS browser interface (see 2.2).

---
## Next Steps
You are now securely connected to your server!

Continue with Step 3 – Install Apache2 Web Server.

##References:

AWS: Connect to your Linux instance using SSH

Murdoch NetworkingLabs: ssh_keys.md

> **Security Reminder:**

> Never share your PEM key file or private IP addresses. Keep your key file secure at all times.
