#!/usr/bin/env python

# pip install html2text if you don't have it
import html2text
import sys, os

# set up the HTML to markdown converter
converter = html2text.HTML2Text()
converter.ignore_links = False

# make a directory to put the converted markdown into
generated_directory = 'generated'
if not os.path.exists(generated_directory):
    os.makedirs(generated_directory)

# loop over all files in the given directory
directory_to_convert = sys.argv[1]
for i in os.listdir(directory_to_convert):
    if i.endswith(".html"):
    	filepath = directory_to_convert + i
    	data=open(filepath, 'r').read()
        write_path = "generated/" + os.path.splitext(i)[0] + ".md"
        text_file = open(write_path, "w")
        text_file.write(converter.handle(data))
        text_file.close()
        continue
    else:
    	print "not an html file"
        continue

