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

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

function helloWorld() {
	console.log(chalk.bgGreen('Hello, World!'));
}

let kylie;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function start() {
	const title = chalkAnimation.rainbow(`Welcome Kylie! \n`);
	await sleep();

	console.log(`
    ${chalk.bgGreen(`${chalk.black("Let's get started!")}`)}
    Welcome to your virtuality..
    This is published and will live in the internet ${chalk.bgRed(
		`${chalk.white('forever..')}`
	)}
    No seriously.. ${chalk.bgRed(`${chalk.white('forever..')}`)} haha!
  `);

	// await askLastName();
	await question();
	await question2();
	await question3();
	await itsKylie();
}

// async function askLastName() {
// 	const answers = await inquirer.prompt({
// 		name: 'her_name',
// 		type: 'input',
// 		message: 'What is your last name?',
// 		default() {
// 			return 'Last Name';
// 		},
// 	});

// 	kylie = `Kylie ${answers.her_name}`;
// }

async function question() {
	const answers = await inquirer.prompt({
		name: 'question_1',
		type: 'list',
		message: 'What city did we meet in?\n',
		choices: ['California', 'New York', 'Chicago', 'Florida', 'Texas'],
	});

	return handleAnswer(answers.question_1 == 'New York');
}

async function question2() {
	const answers = await inquirer.prompt({
		name: 'question_2',
		type: 'input',
		message: 'Who are you?\n',
	});

	return handleAnswer(
		answers.question_2.toLowerCase() == 'kylie' ||
			answers.question_2.toLowerCase() == 'kylie ritchie'
	);
}

async function question3() {
	const answers = await inquirer.prompt({
		name: 'question_2',
		type: 'list',
		message: 'Last question.. Who am I?\n',
		choices: [
			'Lizard',
			'Togo',
			'Elon',
			'The greatest Aaron that ever lived',
		],
	});

	return handleAnswer(
		answers.question_2 == 'The greatest Aaron that ever lived'
	);
}

async function handleAnswer(isCorrect) {
	const spinner = createSpinner('Checking your answer...').start();
	await sleep();

	if (isCorrect) {
		spinner.success({ text: `Good job!` });
	} else {
		spinner.error({
			text: `Sorry, this is reserved for someone special, Goodbye :P`,
		});
		process.exit(1);
	}
}

function itsKylie() {
	console.clear();
	const msg = `
    Hey Kylie Ritchie,\n 
    glad to see you passed!\n 
    Just wanted to leave you \n
    with this positive message: \n

    You are an incredible person,\n
    and I'm extremely proud \n
    of how far you've come in \n
    this world. I pray that this \n
    year be the greatest one\n 
    you've ever lived, and \n
    that you only get to \n
    experience greater moments.\n

    I'm incredibly grateful to\n
    have met you, and I hope to \n 
    be around long enough to\n
    see you shine brighter. \n
    I don't think I've ever \n
    met someone so alluring \n
    and ingenious. \n

    Happy Belated Birthday \n

    With love.. Aaron\n
  
  `;

	figlet(
		msg,
		{ width: 200, font: 'cybermedium', whitespaceBreak: true },
		(err, data) => {
			console.log(gradient.pastel.multiline(data));
		}
	);
}

export default {
	start,
};
