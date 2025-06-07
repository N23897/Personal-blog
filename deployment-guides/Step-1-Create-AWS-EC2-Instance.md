# Step 1 – Launching an AWS EC2 Instance (Ubuntu 22.04 LTS)

This guide will walk you through launching a **cloud-based Ubuntu server** (EC2 instance) on AWS, suitable for website hosting and SSH access.

---

## 1.1. Prerequisites

- An [AWS account](https://aws.amazon.com/) (sign up for free if you don't have one)
- A web browser and internet connection

---

## 1.2. Launch a New EC2 Instance

### 1.2.1. Access the EC2 Dashboard

- Go to [https://aws.amazon.com/](https://aws.amazon.com/), log in, and search for **EC2** in the AWS console.
- Select **EC2** to open the EC2 Dashboard.

---

### 1.2.2. Start the Launch Wizard

- Click **Launch Instance** (top right).

---

### 1.2.3. Configure Your Instance

- **Name:**  
  Enter a descriptive name (e.g., `personal-blog-server`).

- **Amazon Machine Image (AMI):**  
  Select **Ubuntu Server 22.04 LTS (HVM), SSD Volume Type – 64-bit x86**  
  _(Free Tier eligible)_

- **Instance Type:**  
  Choose **t2.micro** (Free Tier eligible).

---

### 1.2.4. Create or Select a Key Pair (for SSH Access)

- In "Key pair (login)", choose **Create new key pair**.
  - **Key pair name:** `myblog-key` (or any unique name)
  - **Key pair type:** `RSA`
  - **Private key file format:** `PEM`
- Click **Create key pair**.
- **Download and save the `.pem` file** to a secure location on your computer (e.g., `~/Downloads/myblog-key.pem`).
  - _You will need this file to SSH into your instance!_

---

### 1.2.5. Configure Network and Firewall (Security Group)

- Under “Network settings,” click **Edit**.
- Add rules to allow the following ports:
    - **SSH (22):** Required for terminal access.
    - **HTTP (80):** Required for website access.
    - **HTTPS (443):** Required for SSL-secured website access.

**Example configuration:**
| Type   | Protocol | Port Range | Source      | Description         |
|--------|----------|------------|-------------|---------------------|
| SSH    | TCP      | 22         | 0.0.0.0/0   | SSH from anywhere   |
| HTTP   | TCP      | 80         | 0.0.0.0/0   | Web access          |
| HTTPS  | TCP      | 443        | 0.0.0.0/0   | Secure web access   |

---

### 1.2.6. Launch the Instance

- Click the orange **Launch Instance** button at the bottom.
- Wait for the green success message.

---

### 1.2.7. Obtain Your Public IPv4 Address

- Go to **Instances** in the EC2 Dashboard.
- Locate your instance and find its **Public IPv4 address** in the details pane.
- _You’ll use this IP to connect to your server._

---

## 1.3. Verifying Your Setup

- Confirm your instance is in the **running** state and the **Status check** is "2/2 checks passed".
- Make sure you have your `.pem` key file and the public IP address.

---

## Next Steps

Proceed to [Step-2-Connect-To-EC2.md](./Step-2-Connect-To-EC2.md) to learn how to SSH into your server for the first time.

---

## References

- [AWS EC2 Getting Started](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)
- [Murdoch NetworkingLabs: ssh_keys.md](https://github.com/SCH-IT-MurdochUni/NetworkingLabs/blob/main/Reusable_Learning_Objects/ssh_keys.md)

---

> **Note:**  
> Keep your PEM key file secure. Never share it publicly or upload it to any code repositories.

