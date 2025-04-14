const cron = require("node-cron");

cron.schedule("*/14 6-23,0-1 * * *", async () => {
  console.log(new Date());
  try {
    const res = await fetch("https://viby.onrender.com");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});
