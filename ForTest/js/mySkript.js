var totalprice = 0
confirm('Желаете расчетаю для вас стоимость сайта??')
var name = prompt('Напишите сюда свое имя', name)

function TypeSite() {
	var useranswer1 = prompt("Предлагаю выбрать тип сайта где: 1 - Сайт визитка. 2 - Корпоративный сайт. 3 - Промо сайт");
	useranswer = useranswer1.toLowerCase();
	TypeA = '1';
	TypeB = '2'
	TypeC = '3'
	TypeA1 = 'cайт визитку';
	TypeB1 = 'корпоративный сайт';
	TypeC1 = 'промо сайт';
	if (useranswer == TypeA) {
		totalprice += 3000;
		confirm("Вы выбрали сайт визитку. Приступим к выбору дизайна?");
		//alert(name + ' вы выбрали ' + TypeA1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == TypeB) {
		totalprice += 5000;
		confirm("Вы выбрали Корпоративный сайт. Приступим к выбору дизайна?");
		//alert(name + ' вы выбрали ' + TypeB1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == TypeC) {
		totalprice += 2000;
		confirm("Вы выбрали Промо сайт. Приступим к выбору дизайна?");
		//alert(name + ' вы выбрали ' + TypeC1 + ' Стоимость ' + totalprice + ' ₽');
		return
	} else {
		alert("повторите попытку");
		TypeSite()
	}
}
TypeSite()


function DesingSite() {
	var useranswer1 = prompt("Предлагаю дизайн сайта где: 1 - Рисованный дизайн. 2 - Плоский дизайн. 3 - Красивая типография. 4 - Корпоративный дизайн");
	useranswer = useranswer1.toLowerCase();
	DesingA = '1';
	DesingB = '2'
	DesingC = '3'
	DesingD = '4'
	DesingA1 = 'рисованный дизайн';
	DesingB1 = 'плоский дизайн';
	DesingC1 = 'красивая типография';
	DesingD1 = 'корпоративный дизайн';
	if (useranswer == DesingA) {
		totalprice += 8000;
		confirm("Вы выбрали рисованный дизайн. Приступим к выбору адаптивности?");
		//alert(name + ' вы выбрали ' + DesingA1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == DesingB) {
		totalprice += 1500;
		confirm("Вы выбрали плоский дизайн. Приступим к выбору адаптивности?");
		//alert(name + ' вы выбрали ' + DesingB1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == DesingC) {
		totalprice += 4000;
		confirm("Вы выбрали красивую типографию, желаете узнать стоимость?");
		//alert(name + ' вы выбрали ' + DesingC1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == DesingD) {
		totalprice += 6500;
		confirm("Вы выбрали корпоративный дизайн. Приступим к выбору адаптивности");
		//alert(name + ' вы выбрали ' + DesingD1 + ' Стоимость ' + totalprice + ' ₽');
		return
	} else {
		alert("повторите попытку");
		DesingSite()
	}
}
DesingSite()



function AdaptivitySite() {
	var useranswer1 = prompt("Предлагаю выбрать адаптивность сайта где: 1 - Адаптивный макет. 2 - Отзывчивый макет. 3 - Смешанный макет");
	useranswer = useranswer1.toLowerCase();
	AdaptA = '1';
	AdaptB = '2'
	AdaptC = '3'
	AdaptA1 = 'адаптивный макет';
	AdaptB1 = 'отзывчивый макет';
	AdaptC1 = 'смешанный макет';
	if (useranswer == AdaptA) {
		totalprice += 3000;
		confirm("Вы выбрали адаптивный макет, желаете узнать общую стоимость?");
		//alert(name + ' вы выбрали ' + AdaptA1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == AdaptB) {
		totalprice += 5000;
		confirm("Вы выбрали отзывчивый макет, желаете узнать общую стоимость?");
		//alert(name + ' вы выбрали ' + AdaptB1 + ' Стоимость ' + totalprice + ' ₽');
		return
	}
	if (useranswer == AdaptC) {
		totalprice += 2000;
		confirm("Вы выбрали смешанный макет, желаете узнать общую стоимость?");
		//alert(name + ' вы выбрали ' + AdaptC1 + ' Стоимость ' + totalprice + ' ₽');
		return
	} else {
		alert("повторите попытку");
		AdaptivitySite()
	}
}
AdaptivitySite()

alert(name + ' Сумма вашего заказа составляет ' + totalprice + ' ₽');







/*confirm('Желаете расчетаю для вас стоимость сайта??')
var name = prompt('Напишите сюда свое имя', name)
var testscp173 = 'Желаете Сайт визитку?';
var test2 = 'Может корпоративный сайт?';
var test3 = 'Возможно вы хотите Промо Сайт?';



var test4 = 'Рисованный дизайн?';
var test5 = 'Плоский дизайн?';
var test6 = 'Корпоративный дизайн?';

var test7 = 'Адаптивная макет?';
var test8 = 'Отзывчивый макет?';
var test9 = 'Смешанный макет?';


var testResult = 0;

var answer1 = confirm(testscp173);
if (answer1 == true) {
    alert('Хорошо, следуюзий этап');
    testResult += 6000;
}

var answer2 = confirm(test2);
if (answer2 == true) {
    alert('Хорошо, следующий этап');
    testResult += 15000;
}

var answer3 = confirm(test3);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 4000;
}

confirm('Перейдем к выбору дизайна?')


var answer4 = confirm(test4);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 5500;
}

var answer5 = confirm(test5);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 3000;
}

var answer6 = confirm(test6);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 10000;
}

confirm('Ну и на последок предлогаю выбрать Адаптивность сайта')

var answer7 = confirm(test7);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 6000;
}

var answer8 = confirm(test8);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 7500;
}

var answer9 = confirm(test9);
if (answer3 == true) {
    alert('Хорошо, следующий этап');
    testResult += 10000;
}

alert(name + ' вы выбрали  Стоимость ' + testResult + '₽');*/


/*confirm('Желаете расчетаю для вас стоимость сайта??')
var name = prompt('Напишите сюда свое имя', name)
var testscp173 = 'Желаете Сайт визитку?';
var test2 = 'Может корпоративный сайт?';
var test3 = 'Возможно вы хотите Промо Сайт?';

var choose_testscp173 = "Сайт визитку";
var choose_test2 = "Корпоративный сайт";
var choose_test3 = "Промо сайт";


var testResult = 0;

var answer1 = confirm(testscp173);
if (answer1 == true) {
    choose_testscp173
    testResult += 6000;
    return testscp173;
} else
    alert("Может тогда " + choose_test2);
*/

/*let part = "book";


let book = {
    name: "JS",
    age: 3,
    [part]: "Описание",
    autor: {
        name: "Artur",
        surname: "Samirkhanow",
    }
};

конструктор для массива
function createBook(name, age) {
    return {
        name: name,
        age: age,
    };
}

console.log(createBook("Viktor", "30"));
console.log(createBook("Viktora", "18"));
*/


/*
let part = "book";


let book = {
    name: "JS",
    age: 3,
    [part]: "Описание",
    autor: {
        name: "Artur",
        surname: "Samirkhanow",
    }
};

let bookTwo = {
    name: "Artur",
}

console.log(bookTwo);

bookTwo.age = 10;
bookTwo["new character"] = true;

bookTwo.author = {
    name: "Artur",
    surname: "Samirkhanow",
}


console.log(bookTwo);


delete bookTwo.age;
console.log(bookTwo);





//КОНСТРУКТОР ДЛЯ ОДНОТИПНЫХ БЛОКОВ ДАНЫХ

let part = "book";


let book = {
    name: "JS",
    age: 3,
    [part]: "Описание",
    autor: {
        name: "Artur",
        surname: "Samirkhanow",
    }
};

function Book(name, age) {
    this.name = name;
    this.age = age;
}
console.log(new Book("Artur", 30));
*/

// КОНЕЦ КОНСТРУКТОРА
/* ДОРАБОТАТЬ!!
var fullprice = 0;

let TypeSite = [
    "Сайт визитку", "Корпоративный сайт", "Промо сайт"]
console.log(TypeSite);
confirm("Желаете " + TypeSite[0] + "?");
if (TypeSite[0] == true) {
    fullprice += 6000;
} else(confirm[1] == false);

let TypeDessing = [
    "Рисованный дизайн", "Плоский дизайн", "Корпаративный дизайн", "Красивая типаграфика"]
console.log(TypeDessing);
confirm("Желаете " + TypeDessing[0] + "?");
confirm("Желаете " + TypeDessing[1] + "?");
confirm("Желаете " + TypeDessing[2] + "?");
confirm("Желаете " + TypeDessing[3] + "?");

let Adaptivity = [
    "Адаптивный макет", "Отзывчивый макет", "Смешанный макет"]
console.log(Adaptivity);
confirm("Желаете " + Adaptivity[0] + "?");
confirm("Желаете " + Adaptivity[1] + "?");
confirm("Желаете " + Adaptivity[2] + "?");
alert(' вы выбрали ' + TypeSite[0] + ' Стоимость ' + fullprice + '₽');
*/
/*


var fullprice = 0;

let TypeSite = ["1", "2", "3"];
console.log(TypeSite);
confirm("1?")
if (1 == true) {

} else
    aler("иди дальше");

alert('1')

    //confirm("Желаете " + TypeSite[0] + "?");
    //if (TypeSite[0] == true) {
    //fullprice += 6000;
    ///} else(confirm[1] == true);
    //alert(' вы выбрали ' + TypeSite[0] + ' Стоимость ' + fullprice + '₽');
*/
