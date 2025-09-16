for (let i = 20; i >= 0; i--) {

    for (let j = 0; j < 20; j++) {
        if (i != j) {
            process.stdout.write('*');

        } else {
            process.stdout.write(' ');
            break;
        }

    }
    console.log();
}