# XOR protect url
 This is a encryption system for websites. But after all this project use XOR encryption, so it might not be the best way to protect your website, [see also](https://en.wikipedia.org/wiki/XOR_cipher#Use_and_security "Wikipedia-XOR cipher security"). 
 
Step to install
----
1. First you have to create a file you want to protect with. This file's name must combin random number and letters.
2. Then you have to go to hash your URL with passwords, you can hash it here <http://web.hku.hk/~jwilam/it/js_encryption.htm> (zh-Hant) or hash it in the file /install/xor-hash.html that you just downloaded.
3. Copy the hashed URL into the file "index.html" and replace the \<encURL\> with the hashed URL you just get.
4. After you finish the part of hashed URL, then you need to hash your URL you created in first step with SHA256. (In case you don't know where to hash it, so you can hash under /install/hash.html)
5. Finally replace \<sha256\> with the string you get above.
6. Run the index.html test if it works.

Advanced
----
 If you try above and still cannot works, please check the things below:
 
 - Is sha256.js or any other script in the right root? (must under / , example: ``` https://thisis.your.domain/sha256.js ```)
 - Is the password and the URL **matched**?
 
If you still have problem, please report to issues.

Special Thanks
 
----
 
- web.hku.hk
- geraintluff from github
