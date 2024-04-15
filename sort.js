function get_max(arr) {
    let prog = 'import sys\n' +
        'import json\n' +
        'print(max(json.loads(sys.argv[1])))';

    const write = require('fs').writeFileSync;
    write('max.py', prog);

    const exec = require('child_process').execSync;
    result = parseFloat(exec(`python max.py ${JSON.stringify(arr)}`).toString());
    exec('unlink max.py');
    return result;
}

const numbers = [5, 3, 9.2, 1, 4];

const max = get_max(numbers);

console.log(max)
