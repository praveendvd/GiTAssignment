#!/bin/bash
read  -p "please enter file name: " filename

while read line;

 do
# reading each line
echo -n $line| sha1sum |cut -c 1-40 >> a.txt
 
done < $filename
