Step 7: Final Checks and Troubleshooting
After all your hard work, let’s make sure your website is live, secure, and fully working for anyone in the world.

7.1 Visit Your Website
In Your Browser:
Type your domain name using https:// in the address bar (not just http://):

arduino
Copy
Edit
https://yourdomain.com
(For your project: https://livinginbetweenblog.space)

Press Enter.

7.2 What You Should See
Your homepage loads (not the Apache "It works!" page).

A padlock icon appears in the address bar (shows HTTPS is working).

No "Not Secure" or error messages from your browser.

All your website features (images, CSS, JavaScript) work properly.

Screenshot suggestions:

Browser showing your live site with the padlock icon.

7.3 Try on Different Devices & Networks
Test your website on your phone and/or a friend’s device.

Try on both WiFi and mobile data.

This helps you catch DNS or SSL issues you might not see on your main computer.

7.4 Check HTTP to HTTPS Redirection
In your browser, type your domain with http:// (not https://):

arduino
Copy
Edit
http://yourdomain.com
You should be automatically redirected to HTTPS (the padlock version).

7.5 Check with Online Tools
Use SSL Labs SSL Test:

Enter your domain and check for an A or A+ grade.

This means your SSL is set up correctly.

Use whatsmydns.net to check if your domain’s A record points to your EC2 IP everywhere in the world.

7.6 Troubleshooting Common Problems
A. Browser Says “Not Secure” or No Padlock
Make sure you’re using https:// in your address bar.

Reload the page or clear your browser cache.

Check your SSL certificate (click the padlock > Certificate).

If needed, rerun Certbot:

bash
Copy
Edit
sudo certbot --apache
B. Apache “It Works!” Page Still Shows
Your new index.html might not be uploaded.

Upload your website files again to /var/www/html/.

Refresh your browser.

C. DNS Problems (Site Won’t Load or Can’t Be Found)
Check that your domain’s A record points to your EC2 Public IPv4 address.

Wait 15–60 minutes for DNS changes to spread worldwide.

Test using whatsmydns.net.

D. SSL Certificate Errors
Run Certbot again and double-check your domain name.

Make sure port 443 is open in your AWS security group.

Restart Apache2:

bash
Copy
Edit
sudo systemctl restart apache2
E. Some Features (CSS/JS/Images) Not Working
Make sure all related files are uploaded to /var/www/html/.

Double-check file names and paths in your HTML code.

7.7 What Success Looks Like
Your website is live at https://yourdomain.com.

Visitors see a padlock icon (secure connection).

No browser security warnings.

All features work from any device, anywhere.

Congratulations—you have deployed a professional, secure website using Apache2 on AWS EC2!
