process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin = ['|','/','-', '\\','|']

  for (let i = 0; i < spin.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + spin[i]);
    }, (i * 200) - 100);
  }  setTimeout(() => {
    process.stdout.write('\n')
  }, spin.length * 200 - 100);
  