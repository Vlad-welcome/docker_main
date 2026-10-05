import axios from "axios";

let num = 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

while (num < 10) {
  console.log(num);
  await sleep(1000);
  num++;
}
