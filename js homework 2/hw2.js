// Task 1:
// Ремонт
// Ваш любимый дядя – директор фирмы, которая делает евроремонты в офисах. В связи с финансово-экономическим кризисом,
// дядюшка решил оптимизировать свое предприятие.
// Давно ходят слухи, что бригадир в дядюшкиной фирме покупает лишнее количество стройматериалов,
// а остатки использует для отделки своей новой дачи. Ваш дядя заинтересовался, сколько в действительности банок
// краски необходимо для покраски стен в офисе длиной L метров, шириной – W и высотой – H, если одной банки хватает на 16м2, 
// а размерами дверей и окон можно пренебречь? Заказов много, поэтому дядя попросил написать программу, которая будет все это считать.

// Входные данные
// Пользователь вводит с клавиатуры три натуральных числа L, W, H – длину, ширину и высоту офиса в метрах соответственно, 
// каждое из которых не превышает 1000.

// Выходные данные
// Вывести на экран одно целое число – минимальное количество банок краски, необходимых для покраски стен в офисе.

let height = +prompt("Введите высоту офиса: ");
let width = +prompt("Введите ширину офиса: ");
let length = +prompt("Введите длину офиса: ");
    
// исходя из того, что офис - это Параллелепипед, а пол и потолок мы не красим, то площадь 4 боковых стен S = L * (W + H)

let paintArea = 16;
let wallArea = height * (width + length);
+wallArea;
let paintTotal = Math.ceil(wallArea/paintArea); //Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
alert(`Минимальное колличество банок краски - ${paintTotal}`);




// Task 2:
// Золотой песок
// Сотрудники завода по производству золотого песка из воздуха решили поправить свое финансовое положение. 
// Они пробрались на склад завода, где хранился золотой песок трех видов. Один килограмм золотого песка первого 
// вида они смогли бы продать за A1 рублей, второго вида – за A2 рублей, а третьего вида – за A3 рублей. 
// Так получилось, что у сотрудников оказалось с собой только три емкости: первая была рассчитана на B1 
// килограмм груза, вторая на B2 килограмм, а третья на B3 килограмм. Им надо было заполнить полностью 
// все емкости таким образом, чтобы получить как можно больше денег за весь песок. При заполнении емкостей 
// нельзя смешивать песок разных видов, то есть, в одну емкость помещать более одного вида песка, и заполнять 
// емкости песком так, чтобы один вид песка находился более чем в одной емкости.

// Требуется написать программу, которая определяет, за какую сумму предприимчивые сотрудники смогут продать весь 
// песок в случае наилучшего для себя заполнения емкостей песком.

// Входные данные
// Пользователь вводит с клавиатуры 6 натуральных чисел A1, A2, A3, B1, B2, B3. Все числа не превосходят 100.

// Выходные данные
// Вывести на экран единственное целое число – сумму в рублях, которую смогут сотрудники заработать в случае 
// наилучшего для себя заполнения емкостей песком.

let cost1 = prompt("Введите стоимость золотого песка 1 сорта: ");
let cost2 = prompt("Введите стоимость золотого песка 2 сорта: ");
let cost3 = prompt("Введите стоимость золотого песка 3 сорта: ");

let volume1 = +prompt("Введите объем 1 емкости");
let volume2 = +prompt("Введите объем 2 емкости");
let volume3 = +prompt("Введите объем 3 емкости");

let biggest;
let middle;
let lowest;

let biggestV;
let middleV;
let lowestV;


if (cost1 > cost2 && cost1 > cost3 && cost2 > cost3) {
     biggest = cost1;
     middle = cost2;
     lowest = cost3;
} else if (cost1 > cost2 && cost1 > cost3 && cost3 > cost2) {
    biggest = cost1;
    middle = cost3;
    lowest = cost2;
} else if (cost2 > cost1 && cost2 > cost3 && cost1 > cost3) {
    biggest = cost2;
    middle = cost1;
    lowest = cost3;
} else if (cost2 > cost1 && cost2 > cost3 && cost3 > cost1) {
    biggest = cost2;
    middle = cost3;
    lowest = cost1;
} else if (cost3 > cost2 && cost3 > cost1 && cost1 > cost2) {
    biggest = cost3;
    middle = cost1;
    lowest = cost2;
} else if (cost3 > cost1 && cost3 > cost2 && cost2 > cost1) {
    biggest = cost3;
    middle = cost2;
    lowest = cost1;
}

//123
//132
//213
//231
//312
//321
switch (true) {
    case (volume1 > volume2 && volume1 > volume3 && volume2 > volume3): {
        biggestV = volume1;
        middleV = volume2;
        lowestV = volume3;
        break;
    }
    case (volume1 > volume2 && volume1 > volume3 && volume3 > volume2): {
        biggestV = volume1;
        middleV = volume3;
        lowestV = volume2;
        break;
    }
    case (volume2 > volume1 && volume2 > volume3 && volume1 > volume3): {
        biggestV = volume2;
        middleV = volume1;
        lowestV = volume3;
        break;
    }
    case (volume2 > volume1 && volume2 > volume3 && volume3 > volume1): {
        biggestV = volume2;
        middleV = volume3;
        lowestV = volume1;
        break;
    }
    case (volume3 > volume2 && volume3 > volume1 && volume1 > volume2): {
        biggestV = volume3;
        middleV = volume1;
        lowestV = volume2;
        break;
    }
    case (volume3 > volume2 && volume3 > volume1 && volume2 > volume1): {
        biggestV = volume3;
        middleV = volume2;
        lowestV = volume1;
        break;
    }
    default: {
        alert("Что-то не так!");
    }
}
    +biggest;
    +middle;
    +lowest;
    +biggestV;
    +middleV;
    +lowestV;

    let result;
    result = biggest*biggestV + middle*middleV + lowest*lowestV;

    alert(`Самым выгодным решением будет поместить песок, стоимостью ${biggest} в емкость, обемом ${biggestV}, ${middle} в ${middleV} и ${lowest} в ${lowestV}, соответственно. Конечная сумма: ${result}`)





// Task 3:
// Счастливый билет
// Вы пользуетесь общественным транспортом? Вероятно, вы расплачивались за проезд и получали билет с номером. 
// Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех. 
// Т.е. билет с номером 385916 – счастливый, т.к. 3+8+5=9+1+6. Вам требуется написать программу, которая проверяет счастливость билета.
// Входные данные
// Пользователь вводит одно целое число N (0 ≤ N < 10 ** 6).

// Выходные данные
// Нужно вывести «YES», если билет с номером N счастливый и «NO» в противном случае.


let ticket = prompt("Введите номер Вашего билета");
let num00000X = ticket % 10;
let num0000X0 = ((ticket - num00000X) / 10) % 10;
let num000X00 = ((ticket - num00000X - num0000X0*10) / 100) % 10;
let num00X000 = ((ticket - num00000X - num0000X0*10 - num000X00*100) / 1000) % 10;
let num0X0000 = ((ticket - num00000X - num0000X0*10 - num000X00*100 - num00X000*1000) / 10000) % 10;
let numX00000 = ((ticket - num00000X - num0000X0*10 - num000X00*100 - num00X000*1000 - num0X0000*10000) / 100000) % 10;

if (num00000X + num0000X0 + num000X00 == num00X000 + num0X0000 + numX00000) {
    alert("YES")
} else alert("NO");


// Task 4:
// Мини-задачи

// Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления лучше использовать: if, switch или тернарный.

// 1. Запросить у пользователя его возраст и определить, кем он является: 
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = +prompt("Введи свой возраст и узнай свою судьбу!")

switch (true) {  //? если писать switch (age), то код не работает. Хм......??
    case (age >= 0 && age <= 12): {
        alert("Ребенок?! Как ты вообще дополз к клавиатуре...?")
        break;
    }
    case (age > 12 && age <= 18): {
        alert("Подросток... Биполярочка сейчас в моде, слыхал?")
        break;
    }
    case (age > 18 && age <= 60): {
        alert("Взрослый, состоятельный человек. Твои колени предстазывают погоду?")
        break;
    }
    case (age > 60): {
        alert("Пенсионер. Сходи к врачу, проверь здоровье")
        break;
    }
    default: {
        alert("Что-то не так!")
    }
}

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let key = +prompt("Введите любую цифру (0-9)");

switch (key) {
    case(1): {
        alert("Ваша цифра соответствует символу !");
        break;
    }
    case(2): {
        alert("Ваша цифра соответствует символу @");
        break;
    }
    case(3): {
        alert("Ваша цифра соответствует символу #");
        break;
    }
    case(4): {
        alert("Ваша цифра соответствует символу $");
        break;
    }
    case(5): {
        alert("Ваша цифра соответствует символу %");
        break;
    }
    case(6): {
        alert("Ваша цифра соответствует символу ^");
        break;
    }
    case(7): {
        alert("Ваша цифра соответствует символу &");
        break;
    }
    case(8): {
        alert("Ваша цифра соответствует символу *");
        break;
    }
    case(9): {
        alert("Ваша цифра соответствует символу (");
        break;
    }
    case(10): {
        alert("Ваша цифра соответствует символу )");
        break;
    }
    default: {
        alert("Что-то не так!");
    }
}
// 3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.


let number = prompt('Введите трёхзначное число: ');
let num00X = number % 10;
let num0X0 = ((number - num00X) / 10) % 10;
let numX00 = ((number - num00X) - num0X0*10) / 100;

if (num00X == num0X0 || num00X == numX00 || num0X0 == numX00) {
    alert("В Вашем числе есть одиновые цифры :)")
} else alert("В Вашем числе нет одинаковых цифр :(");


// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = +prompt("Введите год");
if ( year % 400 == 0){
    alert("Этот год високосный");
} else if (year % 4 == 0 && year % 100 !== 0) {
        alert("Год високосный");
    } else alert("Год не високосный");


// 5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.

let palindrom = prompt("Введите пятизначное число");

let num0000X = String(palindrom % 10);
let num000X0 = String(((palindrom - num0000X) / 10) % 10);
let num00X00 = String(((palindrom - num0000X - num000X0*10) / 100) % 10);
let num0X000 = String(((palindrom - num0000X - num000X0*10 - num00X00*100) / 1000) % 10);
let numX0000 = String((palindrom - num0000X - num000X0*10 - num00X00*100 - num0X000*1000) / 10000);

let anotherPalindrom = String(num0000X + num000X0 + num00X00 + num0X000 + numX0000)
if (palindrom === anotherPalindrom) {
    alert("Введенное Вами число - палиндром!")
} else alert("Введенное Вами число - НЕ палиндром")

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: 
// EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let moneyUSD = +prompt("Введите сумму, которую хотите поменять (в USD):");
let curency = prompt("Введите валюту обмена (EUR, UAH, AZN):");

const USDtoEUR = 0.91;
const USDtoUAH = 24.6;
const USDtoAZN = 1.7;

let changedMoney;

switch (curency) {
    case ('EUR'): {
        changedMoney = moneyUSD*USDtoEUR;
        alert(`${moneyUSD} долларов в составит ${changedMoney} евро`);
        break;
    }
    case ('UAH'): {
        changedMoney = moneyUSD*USDtoUAH;
        alert(`${moneyUSD} долларов в составит ${changedMoney} гривен`);
        break;
    }
    case ('AZN'): {
        changedMoney = moneyUSD*USDtoAZN;
        alert(`${moneyUSD} долларов в составит ${changedMoney} азербайджанских манат`);
        break;
    }
    default: {
        alert("Что-то не так!");
    }
}


// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, 
// от 300 до 500 – 5%, от 500 и выше – 7%.

let summ = +prompt("Введите сумму чека");
let total = Number(0);
switch (true) {   //switch (summ) не работает
    case (summ >= 0 && summ < 200): {
        total = summ;
        alert(`Сумма составит ${total} гривен`);
        break;
    }
    case (summ >= 200 && summ < 300): {
        total = summ*0.97;
        alert(`Сумма со скидкой составит ${total} гривен`);
        break;
    }
    case (summ >= 300 && summ < 500): {
        total = summ*0.95;
        alert(`Сумма со скидкой составит ${total} гривен`);
        break;
    }
    case (summ >= 500): {
        total = summ*0.93;
        alert(`Сумма со скидкой составит ${total} гривен`);
        break;
    }
    default: {
        alert("Что-то не так!");
    }
}


// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circumference = +prompt("Введите длину окружности: ");
let perimeter = +prompt("Введите периметр квадрата")

let diametr = Number(circumference/Math.PI);
let lengthSquare = Number(perimeter/4);
if (diametr <= lengthSquare) {
    alert("Да, можно вписать такую окружность в квадрат");
} else alert("Нет, такую окружность вписать не получится");

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

let answer1 = +prompt("2+2*2, если 2 - string?"); //44 8 6
let answer2 = prompt("Имя нашего лектора по JS?") // николай, Дмитрий, Алёша
let answer3 = +prompt("tg45° = ?") // 1 0.5 0
let rate = 0;
switch (true) {
    case (answer1 == 44): {
        rate += 3
        break;
    }
    case (answer1 == 8): {
        rate += 0
        break;
    }
    case (answer1 == 6): {
        rate += 0
        break;
    }
    default: {
        break;
    }
}
switch (true) {
    case (answer2 == 'Николай'): {
        rate += 3
        break;
    }
    case (answer2 == 'Ник'): {
        rate += 2
        break;
    }
    case (answer2 == 'Коля'): {
        rate += 1
        break;
    }
    default: {
        break;
    }
}
switch (true) {
    case (answer3 == 1): {
        rate += 3
        break;
    }
    case (answer3 == 0): {
        rate += 0
        break;
    }
    case (answer3 == 0.5): {
        rate += 0
        break;
    }
    default: {
        break;
    }
}
if (rate < 5) {
    alert(`${rate} балла из 9 возможных... Ну ты, конечно, мда...`)
} else alert(`${rate} Баллов из 9 возможных! Неплохо!`);

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год

let day = +prompt("Введите день");
let month = +prompt("Введите цифру месяца");
let year2 = +prompt("Введите год");

let leapyear = 0;
// //проверка на високосный год 
if ( year2 % 400 == 0){
    leapyear = 1;
} else if (year2 % 4 == 0 && year2 % 100 !== 0) {
        leapyear = 1;
    } else leapyear = 0;
// //особые случаи
switch(true) {
    case (day <= 27): {
        day++;
        break;
    }
    case (day >=28 && month == 2 && leapyear == 1): { //29 февраля високосного года
        day++;
        break;
    }
    case (day >=28 && month == 2 && leapyear == 0): { //28 февраля обычного года
        day = 1;
        month++;
        break;
    }
    case (day >=28 && day <= 29 && month !== 2): { 
        day++;
        break;
    }
    case (day == 31 && month == 12): { //новый год
        day = 1;
        month = 1;
        year2++;
        break;
    }
}
if (month == 4 || month == 6 || month == 9 || month == 11 ) {
    if (day == 30) {
        month++;
        day = 1;
    }
}
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
    if (day == 31) {
        month++;
        day = 1;
    }
}
alert(`${day}.${month}.${year2}`)


