for (let i = 0; i < 20; i++) {

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