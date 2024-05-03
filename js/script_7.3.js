function inputNumbers() {
    for (let i = 0; i < 10; i++) {
        let number = prompt(`Введіть число більше 100 (ітерація ${i + 1}):`);

        if (number === null || isNaN(number)) {
            console.log('Ви ввели не число або натиснули "Скасувати".');
            return;
        }

        if (parseInt(number) > 100) {
            console.log('Ви ввели число більше 100. Останнє введення:', number);
            return;
        }
    }

    console.log('Досягнуто максимальну кількість ітерацій.');
}

inputNumbers();
