# Bacteria - Steve Walmsley

This project uses Node's Readline to read the starting live bacteria coordinates as standard input, and produces next generation live bacteria coordinates as standard output. 

Clone the git repositary and run:

```http   
npm install
``` 
to install project dependencies (Mocha/Chai for testing).

From the command line, you can run a command to read the starting coordinates from a text file and export the results into another file. You can set up the command to run multiple generations, exporting each generation into a new file. An example command is set up in the package.json for this: 

```http   
npm run multigen
```
This reads the starting coordinates from an input.txt file you can set up in a data folder, and exports subsequent generations to gen1.txt, gen2.txt etc

Or run:
```http   
npm start
```
for a quick way to manually enter coordinates - this runs the index.js file with Node
Then in the command line enter comma separated coordinates either individually or copy/pasted in one, with line breaks between each x/y coordinate. If you are entering manually, you will need to separately enter 'end' as the last input to run the program. 

For example enter: <br>
1,2 <br>
2,2 <br>
3,2 <br>
1000000001,1000000002 <br>
1000000002,1000000002 <br>
1000000003,1000000002 <br>
end <br>

You will then see the next generation coordinates: <br>

2,1 <br>
2,2 <br>
2,3 <br>
1000000002,1000000001 <br>
1000000002,1000000002 <br>
1000000002,1000000003 <br>
end <br>

You can also add optional arguments to the npm start command. 
```http   
npm start shift
```
will change the way grid coordinates are produced. Without the 'shift' argument, 
new bacteria can have negative x and y axis values if the bacteria population moves up and left. 
SHIFT will re-base the grid so that there are no negative x/y values - meaning all coordinates are adjusted.

```http   
npm start 5
``` 
will simulate 5 generations of live bacteria and output them separately through stdout
You can input any number of generations between 2 and 20. The arguments can be used in any order.

```http   
npm test
```
will run tests with Mocha/Chai. 
The tests handle inputs and outputs as arrays - as does the bacteria.js file.
The index.js file converts to and from standard input / output. 



