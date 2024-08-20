console.log("Начало работы скрипта");

// Функция для скрытия загрузки и отображения результата
function showResult(taskId, result) {
    document.getElementById(`${taskId}-loading`).style.display = 'none';
    document.getElementById(`${taskId}-result`).innerText = result;
}

// Задание 1: Promise с resolve или reject
const condition = "string"; // Измените на "number", чтобы увидеть reject
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof condition === 'string') {
            resolve('Promise выполнен успешно!');
        } else {
            reject('Promise был отклонен.');
        }
    }, 2000);
});

myPromise1
    .then(result => {
        showResult('task1', result);
    })
    .catch(error => {
        showResult('task1', error);
    });

// Задание 2: Promise с отловом ошибки
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Произошла ошибка'));
    }, 2000);
});

myPromise2
    .catch(error => {
        showResult('task2', 'Ошибка поймана: ' + error.message);
    });

// Задание 3: Цепочечное выполнение .then и обработка ошибок catch
const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Первый шаг выполнен');
    }, 2000);
});

myPromise3
    .then(result => {
        showResult('task3', result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Ошибка во втором шаге'));
            }, 2000);
        });
    })
    .then(result => {
        showResult('task3', result);
    })
    .catch(error => {
        showResult('task3', 'Ошибка поймана: ' + error.message);
    });

// Задание 4: Цепочечное выполнение с двумя catch и finally
const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Первоначальная ошибка');
    }, 2000);
});

myPromise4
    .then(result => {
        showResult('task4', result);
    })
    .catch(error => {
        showResult('task4', 'Первый catch: ' + error);
        throw new Error('Ошибка после первого catch');
    })
    .catch(error => {
        showResult('task4', 'Второй catch: ' + error.message);
    })
    .finally(() => {
        showResult('task4', document.getElementById('task4-result').innerText + '\nБлок finally выполнен');
    });

// Задание 5: Два catch для одного Promise
const myPromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Ошибка в Promise');
    }, 2000);
});

myPromise5
    .then(result => {
        showResult('task5', result);
    })
    .catch(error => {
        showResult('task5', 'Первый catch: ' + error);
        throw new Error('Новая ошибка после первого catch');
    })
    .catch(error => {
        showResult('task5', document.getElementById('task5-result').innerText + '\nВторой catch: ' + error.message);
    });

console.log("Конец работы скрипта");