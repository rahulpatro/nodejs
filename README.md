Write an application that processes a directory and zip all the directories content inside it into another directory.

INPUT: Following diagram is a directory structure that the node application is going to process. 
- test
---> a.txt 
---> b.txt
---> temp [ directory]
------> temp1.txt
------> temp2.txt
---> dummy [ directory]
------> dummy1.txt
------> dummy2.txt
----> readMe.md
----> doc.txt

 
 OUTPUT should be a zip directory named as output.zip with all the files in it. Make sure it extracts all the content to into a single directory.

 The output should be like this
 output.zip
 -> a.txt
 -> b.txt
 -> temp1.txt
 -> temp2.txt
 -> dummy1.txt
 -> dummy2.txt
 -> readMe.md
 -> doc.txt

 2) Build a CLI application to calculate SUM of purchases. Here is how the CLI application should work.

  Hey there, We have the following items in our shop.

  1) Soap - 10 rupees/item
  2) Tooth Paste 20 rupees/item
  3) Ice cream 30 rupees/item

  What do you want to purchase today ?
  user input : 1 
  How many ? 
  user input : 2
  Anything else ?
  user input : Yes

  1) Soap - 10 rupees/item
  2) Tooth Paste 20 rupees/item
  3) Ice cream 30 rupees/item
  What do you want to purchase today ?
  2
  How many ?
  1
  Anything else ?
  No
  calculating your bill...

  Your bill is 40 rupees
