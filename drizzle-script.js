const { exec } = require('child_process');

const command = process.argv[2];

exec(`npx drizzle-orm ${command}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
  process.exit(0);
});
