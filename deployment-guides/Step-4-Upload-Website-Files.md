Step 4: Upload Your Website Files to Apache2
Now that Apache2 is running, it’s time to put your actual website files on the server so the world can see your site.

4.1 Where to Upload Your Files
The folder Apache2 uses to serve web pages is:

css
Copy
Edit
/var/www/html/
Anything you put here becomes public on your website!

4.2 Prepare Your Website Files
On your own computer, make sure you have all your website files ready, such as:

index.html

custom.css

custom.js

an /images folder (if you have images)

any other pages or assets

4.3 Use SCP (Secure Copy) to Upload Files
SCP lets you copy files from your computer to your AWS server using your .pem key.

a) Open Terminal on Your Computer
On macOS or Linux: Use the built-in Terminal app.

On Windows: Use Git Bash or Windows Terminal.

b) Navigate to Your Files’ Folder
For example, if your files are in Downloads/mywebsite, use:

bash
Copy
Edit
cd ~/Downloads/mywebsite
(Change the path as needed.)

c) Copy Files to the Server
Use this command for each file (replace paths and filenames as needed):

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem index.html ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
scp -i ~/Downloads/myblog-key.pem custom.css ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
scp -i ~/Downloads/myblog-key.pem custom.js ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
Replace myblog-key.pem with your key file name.

Replace <YOUR_PUBLIC_IP> with your EC2 public IP.

To upload a whole folder (like images), use the -r flag:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem -r images ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
d) Overwrite the Default File
Your new index.html will replace the default Apache2 page.

4.4 Test Your Website
In your web browser, go to:

cpp
Copy
Edit
http://<YOUR_PUBLIC_IP>
You should now see your own homepage instead of the Apache2 “It works!” page.

4.5 Common Troubleshooting
Permission Denied?

Make sure your .pem file permissions are correct:

bash
Copy
Edit
chmod 400 ~/Downloads/myblog-key.pem
Wrong page or not updated?

Refresh your browser (Ctrl+Shift+R).

Double-check you uploaded files to /var/www/html/.

Errors or missing images?

Make sure you uploaded all referenced files and folders.

⭐️ Tips
You can upload multiple files at once:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem *.html *.css *.js ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
If you have a lot of assets, upload your whole project folder:

bash
Copy
Edit
scp -i ~/Downloads/myblog-key.pem -r . ubuntu@<YOUR_PUBLIC_IP>:/var/www/html/
(This uploads everything in the current directory to /var/www/html/.)

Screenshot suggestions:
Terminal running the scp command

Browser showing your custom homepage at your public IP
