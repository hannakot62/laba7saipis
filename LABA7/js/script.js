function count(block, j) {
    const form = document.getElementsByClassName(block);

    var city = 0;
    for (var i = 1; i < 6; i++) {
        var select = document.getElementById("city-select" + j + i);
        var value = select.value;
        if (value == "ok") {
            city++;
        }
    }
    console.log(city);
    return city;
}

function totalCount() {
    for (let i = 1; i < 6; i++) {
        const total = document.getElementById('total' + i);
        let arr = count('block' + i, i);
        total.innerText = arr;
    }
}

function weight() {
    for (let i = 1; i < 6; i++) {
        const total = document.getElementById('weight' + i);
        let arr = count('block' + i, i) / 5;
        total.innerText = arr;
    }
}

function resetCalc() {
    for (var i = 1; i < 6; i++) {
        for (var j = 1; j < 6; j++)
            document.getElementById('city-select' + i + j).value = '';
    }
}

function expert(i, j) {
    const select = document.getElementById('city-select' + j + i);
    if (document.getElementById('city-select' + i + j).value == 'ok') {
        select.value = 'ne-ok';
    }
    else { select.value = 'ok' };
}
function answer() {
    let london = count('block1', 1);
    let pekin = count('block2', 2);
    let seul = count('block3', 3);
    let vladivostok = count('block4', 4);
    let telaviv = count('block5', 5);
    let result = Math.max(london, pekin, seul, vladivostok, telaviv);
    console.log(result);
    const total = document.getElementById('res');
    let arr = '';
    if (result == london) {
        arr = 'Лондон';
    }
    if (result == pekin) {
        if (arr != '') {
            arr = arr + ', Пекин';
        }
        else arr = 'Пекин';
    }
    if (result == seul) {
        if (arr != '') {
            arr = arr + ', Сеул';
        }
        else arr = 'Сеул';
    }
    if (result == vladivostok) {
        if (arr != '') {
            arr = arr + ', Владивосток';
        }
        else arr = 'Владивосток';
    }
    if (result == telaviv) {
        if (arr != '') {
            arr = arr + ', Тель-Авив';
        }
        else arr = 'Тель-Авив';
    }
    total.innerText = arr;

}