# Step 5 – Set Up Your Domain Name (DNS)

This step connects your custom domain (e.g., `yourblog.com`) to your EC2 server so anyone can access your site with an easy-to-remember web address.

---

## 5.1 Purchase a Domain Name

If you do not already own a domain:

- Buy one from a registrar such as [Namecheap](https://www.namecheap.com/), [GoDaddy](https://www.godaddy.com/), or any other provider.

---

## 5.2 Access Your Domain’s DNS Settings

1. Log in to your registrar’s website.
2. Go to your **Domain List** or **My Domains**.
3. Click **Manage** next to your chosen domain.
4. Find the section for **DNS settings**, **Advanced DNS**, or **Host Records**.

---

## 5.3 Add or Edit the A Record

You need to point your domain to your EC2 instance’s public IP.

- Find the **A Record** for your domain root (`@`).  
- **Edit** it if it exists, or **add** a new one.

| Host | Type | Value (Destination)     | TTL         |
|------|------|------------------------|-------------|
| @    | A    | `<YOUR_PUBLIC_IP>`     | Automatic   |

**Example entry:**

| Host | Type | Value         | TTL       |
|------|------|---------------|-----------|
| @    | A    | 3.9.142.21    | Automatic |

*Replace `<YOUR_PUBLIC_IP>` with your actual EC2 IP address.*

- Click **Save** or **Confirm**.

---

## 5.4 (Optional) Add an A Record for “www”

To allow visitors to use both `yourdomain.com` and `www.yourdomain.com`, add:

| Host | Type | Value (Destination)     | TTL         |
|------|------|------------------------|-------------|
| www  | A    | `<YOUR_PUBLIC_IP>`     | Automatic   |

---

## 5.5 Wait for DNS Propagation

- DNS updates usually take **5–30 minutes** but may be longer (up to 1–2 hours) for new domains.

---

## 5.6 Test Your Domain

In your browser, enter:

```bash
http://yourdomain.com
```

- You should see your website (the same as you saw at your server’s public IP).
- If not, wait a bit and try again.

---

## Troubleshooting

- **Domain does not load your site?**
  - Double-check your A Record points to your EC2 public IP.
  - Wait for DNS propagation.
  - Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation worldwide.

- **Page loads at IP but not at domain?**
  - Try a hard refresh, or clear your browser cache.

---

## Next Steps

Once your domain shows your site, continue to  
[Step 6 – Secure Your Website with HTTPS (SSL)](./Step-6-Secure-With-SSL.md).

---

## References

- [Namecheap DNS Management](https://www.namecheap.com/support/knowledgebase/category/43/domain-dns/)
- [GoDaddy DNS Help](https://au.godaddy.com/help/manage-dns-zone-files-680)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)

---
