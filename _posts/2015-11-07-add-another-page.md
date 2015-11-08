---
layout: chapter
title: Update Your Website
order: 1
category: 3. Code Many Projects
---

# Update Your Website

OK, to recap, you just did this:

  * learned a little HTML, CSS, and Javascript - the language of the web
  * made a website with one page
  * stored the source code on github.com
  * also used guthub.com to publicly show your website (which is totally separate from storing the version history of your code)

Next, let's add a new page to your website.

In your Text Editor, create a new file. Add this text to this file: This is my
second page. It links to my [first page.](./index.html) Save the file to the
same directory as you created index.html for your website. Name it: second-
page.html Next, open index.html. Replace "Hello World" with: This is my first
page. It links to my [second page.](./second-page.html) Now, using the same
steps as the last tutorial, deploy your new website to github.com. This will
save your new code (but also keep your old version in history), and it will
also update your public website. Go into your Terminal, and go into the
directory where you made index.html (just like last tutorial). Then: git add
second-page.html git commit -m "added a new file for practice" git push origin
gh-pages In the next chapter, we're going to do this all over again, but make
the new page a little more powerful.

