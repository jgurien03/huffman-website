The purpose of this lab was to create a encode and decode program that uses huffman trees to do this task. This program will take any file or stdin and compress it using the encode file, while decode will uncompress it. The code that the program uses to operate is found in files ending in .c while the .h files are the headers for the code.\\

Compile and Run Instructions:\\

First you must give the encode and decode file permissions using chmod +x <file name>. Then you can make it compile by typing make and pressing enter. Following this, you can use ./encode and ./decode with whatever options you choose to do the compressing and decompressing. The options can be found by using the -h option in the command line. If you use stdin, type what you want and then press enter and cntrl d. To use them encode and decode together on stdin, you can use | to pipe the output to the decode (./encode | ./decode). To get rid of the object files and clean up the compile, type make spotless and press enter. \\

Files:\\

heap.c - this file contains the code for the heap sort from lab 4 for use in this lab \\

heap.h - this file contains the headers for the functions in the c file \\

encode.c - This file contains the code for encoding the files or stdin\\

decode.c - this file contains the code for decoding the files or stdin\\

defines.h - this file contains the headers with the macros used in other files\\

header.h - this file contains the header used in the encode and decode process \\ 

node.h - this file contains the headers for the code used in the node.c file\\

node.c - this file contains the code for the node functions \\

pq.h - this file contains the headers for the pq functions in the c file \\

pq.c - this file contains the code for the pq functions to work \\

code.h - this file contains the headers for the code functions in the c file \\ 

code.c - this file contains the code for the code functions to work \\

io.h - this file contains the headers for the functions in the c file \\ 

io.c - this file contains the code for the io functions to operate \\ 

stack.h - this file contains the headers for the code in the c file \\ 

stack.c - this file contains the code for the stack functions to operate \\ 

huffman.h - this file contains the headers for the functions in the c file \\ 

huffman.c - this file contain the code for the huffman function to work \\ 

Makefile - this file contains the code to compile and clean the program \\ 

README.md - this is this file with the details of the lab \\ 

DESIGN.pdf - this file contains the planning for the programming \\ 


Scan Build False Positives : \\

if(node->right == NULL && node->left == NULL){ : this is a false positive because the code needs to check for the null situation, meaning it needs to try to access the node. \\ 

Command Line Options For Both encode and decode: \\

The command line options and argument ranges are as follows - \\

-h = this option will display the help message and nothing else \\ 

-i = this option is followed by a file name to specify the infile choice (default stdin) \\ 

-o = this option is followed by the file name to specify the outfile choice (default stdout) \\ 

-v = this option prints the stats for the compressions (default off) \\ 

