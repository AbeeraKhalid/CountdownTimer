import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
function* count_down_Timer(sec) {
    while (sec > 0) {
        yield sec;
        sec--;
    }
}
let timerIterate = count_down_Timer(15);
function display_Countdown() {
    let Answer = timerIterate.next();
    if (!Answer.done) {
        const Now_time = new Date();
        const count_down_Timer = new Date(Now_time.getTime() + (Answer.value * 1000));
        const remainingSecond = differenceInSeconds(count_down_Timer, Now_time);
        console.log(`${remainingSecond}`);
        setTimeout(display_Countdown, 1000); //1 second ==1 micro sec
    }
    else {
        console.log(chalk.blueBright("Timer countdown has been completed"));
    }
}
display_Countdown();
