var fs = require('fs');
var input_array = [];

function my_func(N_array) {
  for (Nx of N_array) {
    var N = parseInt(Nx);
    var count = 0;
    var a, b, c;
    if (N < 4) continue;
      for (a = Math.ceil(N / 4); a <= N - 3; a++) {
          for (b = Math.ceil((N - a) / 3); b <= Math.min(a, N - 2 - a); b++) {
              for (c = Math.ceil((N - a - b) / 2); c <= Math.min(b, N - 1 - a - b); c++) {
                  count++;
              }
          }
      }
    this.push(count);
  }
  return this;
};

function calculate_and_write_to_output(filepath) {
    fs.readFile(filepath, 'utf8', (err, data) => {
        var array_of_input = data.split(/\r\n/);
        var result = my_func.call([],array_of_input);
        console.log(filepath + ' --- ' +result);
    })
}

fs.readdir('./data', (err, files) => {
    if (err) throw err;
    for (file of files) {
        file.startsWith('input') && calculate_and_write_to_output('./data/' + file);
    }
});
