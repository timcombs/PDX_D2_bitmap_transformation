var fs = require('fs');

fs.readFile('/images/aPic.bmp', function(err, data){
  if (err) console.log(err);

  var


})
building a Bitmap reader and transformer.
It will read a Bitmap in from disk
run one or more color transforms on the bitmap
write it out to a new file

This project will require the use of node buffers in order to manipulate binary data and your project should include tests, as well as a Gruntfile and package.json file. Also, make sure to run all your code through jshint and jscs.

makes it easier to manipulate the file
  readFileSync
  writeFrileSync


create an object to store the header information
  two headers file and info header
  bitmap header offset is 54 bytes
  does that mean that the data starts at byte 54
    slice 54 to length and that cuts the header off
    have the header on the one object
    have the pic on another object
    then alter the pic
    then concat them back together, they should be arrays

  // buf.readUInt16LE(offset[, no assert]) - look in buf node documentation
  use offsets from wiki article as parameters to create this object
  little-endian



Open file using fs and read it into a buffer
Convert buffer into a string
do I then put it into a Javascript Object?
do I separate
try to find the smallest bitmap with few colors
HAVE to have an uncompressed images
Run a transform on that Javascript Object.
Turn the transformed object back into a buffer.
Write that buffer to a new file.

You can also just directly manipulate the buffer.

the byte specification of a "windows bitmap file."
We will be working the simplest version
meaning no compression

Your project should be able to:
take a transform as a callback that will be run once the bitmap file has been read into a buffer.
Your project should also include at least one transform.

This is a difficult assignment so make sure to come to me with questions early.

Here are a few ideas for easy transformations:


Invert the colors (essentially subtract every color value from the max color value which is 255).
Grayscale the colors, multiply each color value by a constant, just make sure your values don't go over 255.
RGB - (red|green|blue)scale the colors, same as above but only multiply one of the colors.

***********************************************************
// what laura did that worked!!!!!
you readFile the bmp
do not add encoding so it is a buffer not a string
go to the offeset in the buffer and run the transform on the buffer
then you writeFile to a newFile name

test that the header does not change, length and bits

************************************************************
