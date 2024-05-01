#! /usr/bin/env node

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";
const response = await inquirer.prompt([
  {
    name: "user_input",
    type: "number",
    message: "Enter the amount of Seconds",

    validate: (input) => {
      if (isNaN(input)) {
        return "Please Enter valid number";
      } else if (input > 60) {
        return "second must be in 60";
      } else {
        return true;
      }
    },
  },
]);
let input = response.user_input;
function startTime(val: number) {
  const initial_time = new Date().setSeconds(new Date().getSeconds() + val);
  const interval_time = new Date(initial_time);

  setInterval(() => {
    const current_time = new Date();
    const diff_time = differenceInSeconds(interval_time, current_time);
    if (diff_time <= 0) {
      console.log(
        chalk.magentaBright.bgWhiteBright("CountDownTimer has been completed")
      );
      process.exit(); //our time has expired so exit and never run less than 0 value
    }
    const mins = Math.floor((diff_time % (3600 * 24)) / 3600); //convert into minutes

    const secs = Math.floor(diff_time % 60); //convert into seconds
    console.log(
      chalk.blueBright(
        `${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`
      )
    ); //timer starting value convert into string and also add 0 on starting point
  }, 1000);
}
startTime(input);
