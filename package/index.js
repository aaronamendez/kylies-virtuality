#!/usr/bin/env node

/*
  She reads to find..
      __...--~~~~~-._   _.-~~~~~--...__
    //    wisdom     `V'     ideas     \\ 
   //     strength    |       joy       \\ 
  //__...--~~~~~~-._  |  _.-~~~~~~--...__\\ 
 //__.....----~~~~._\ | /_.~~~~----.....__\\
====================\\|//====================
                    `---`
                    and more..
*/

const chalk = require('chalk');

function helloWorld() {
	console.log(chalk.bgGreen('Hello, World!'));
}

module.export = { helloWorld };
