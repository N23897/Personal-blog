Step 4: Upload Website Files
In this step, you’ll transfer your own website files (HTML, CSS, JavaScript, images, etc.) from your computer to your EC2 server so that Nginx can display your site.

4.1 Where Do the Files Go?
Nginx’s default web directory is:

css
Copy
Edit
/var/www/html/
Anything you put in this folder becomes visible on your website.

4.2 Prepare Your Website Files
Make sure your website files are on your computer and ready to upload.

Example: index.html, custom.css, custom.js, and an /images folder for pictures.

4.3 Upload Files Using SCP (Secure Copy)
What is SCP?
SCP (“secure copy”) lets you safely transfer files from your computer to your EC2 server using your .pem key.

a) Open Terminal (on your computer, not the server)
On macOS or Linux: use Terminal.

On Windows: use Windows Terminal or Git Bash.

b) Change to the Folder With Your Files
For example, if your files are in Downloads/personal-blog, run:

bash
Copy
Edit
cd ~/Downloads/personal-blog
(Adjust the path as needed.)

c) Upload the Files
Use this SCP command for each file:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem index.html ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
scp -i ~/Downloads/myblog-key.pem custom.css ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
scp -i ~/Downloads/myblog-key.pem custom.js ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
For images or folders (recursively), add -r:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem -r images ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
Replace myblog-key.pem with your key file.

Replace <YOUR_PUBLIC_IP> with your EC2 instance’s public IP (from Step 1).

Example:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem index.html ubuntu@52.201.123.45:/var/www/html/
Screenshot:

Your terminal showing an scp command in action and a successful transfer.

4.4 Replace the Default Page
Nginx serves whatever is named index.html in /var/www/html/.

After you upload your index.html, it overwrites the default welcome page.

4.5 Test Your Website
In a browser, visit:

cpp
Copy
Edit
http://<YOUR_PUBLIC_IP>
You should now see your own homepage, not the Nginx default.

Screenshot:

Browser window showing your own site live at your public IP.

4.6 Uploading Updates
If you change your site, repeat the SCP commands to upload new versions.

🛠️ Troubleshooting
Permission denied

Make sure your .pem file permissions are set:

bash
Copy
Edit
chmod 400 ~/Downloads/myblog-key.pem
Use sudo if you get “permission denied” errors on the server.

File not found

Check the path and filename in your SCP command.

Site not updated

Refresh the browser or clear your cache.

Make sure you uploaded to /var/www/html/ and not another folder.

⭐️ Tips
You can upload multiple files at once:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem *.html *.css *.js ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
For large sites, upload the whole directory:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem -r . ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
