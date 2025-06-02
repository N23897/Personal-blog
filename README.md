# ICT171 Assignment 2 – Personal Blog Server

**Live Site**: [https://livinginbetweenblog.space](https://livinginbetweenblog.space)
**Server IP Address**: 52.221.239.108

---------------------------------------------------------------------------------

## Overview

This is a creative personal blog hosted on an AWS EC2 server (t2.micro), set up from scratch using Ubuntu Linux. The site features a countdown to my next trip, a mood mode toggle, and a custom domain with HTTPS enabled.

It demonstrates my understanding of cloud infrastructure, manual server configuration, DNS linking, SSL setup, GitHub version control, and scripting.

------------------------------------------------------------------------------------

## Website Features

* Deployed on AWS EC2 t2.micro instance (IaaS)
* DNS + SSL/TLS configured (HTTPS using Let’s Encrypt)
* HTML/CSS blog layout with separate entries
* JavaScript countdown script (live)
* Light/Dark Mode switcher (interactive)
* Video explainer embedded directly on the site

-------------------------------------------------------------------------------------

## Server Setup Steps

### 1. Launch EC2 Instance

* AWS t2.micro with Ubuntu 22.04
* Opened ports: 22, 80, 443
* Connected via SSH:

