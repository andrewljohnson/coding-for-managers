---
layout: chapter
title: Don't Repeat Yourself (Write Scripts)
category: 5. Unfinished
---

# Don't Repeat Yourself (Write Scripts)

You may find yourself one day doing something repetitive, something where you click your mouse a lot. Stuff like:

 * resizing many images
 * downloading many files from a website
 * converting many files from one kind to another

If you find yourself doing this, you can likely either use a tool, or write a script. You should:

 1. Google for your problem - example search query: _resize all images in a directory_

 2. If there isn't a solution out there pre-built, you should consider writing a script.

## Spend Time to Learn

 The first few times you write a script to automate something, it may take longer than if you just manually did the task. 

 But you should resist this temptation - if you write just a few scripts, over time it will both be faster to write the script, and more enjoyable. Would you rather wrack your wrists with clicking your mouse, or spend a few minutes figuring out a puzzle to automate the action?

## Example: Convert HTML Files to MD

 In writing this book, I started out by hand-writing HTML. I just wanted to get started fast, and get some stuff on the web. Later, I decided it would be better if I was writing the book in markdown. So, I needed to convert all of my HTML to Markdown.

 Here is [the script I wrote](/projects/html_to_markdown.py) to do the conversion. I used my favorite scripting language "Python" tp do this, but you could have easily done it in bash too. If you inspect the script, you'll see I found someone else's Python module which did the heavy lifting, and I just added the ability to loop over a directory.

 I did find a website where I could have just pasted in each HTML file, and gotten back a converted file, but I still would have had to do that a dozen times. Writing the script to do it was both more fun, easier on my wrists, and might have saved me a couple of minutes.