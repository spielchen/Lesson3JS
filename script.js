let money, 
		time;

function start (){
	 money = +prompt("Ваш бюджет на месяц?");
	 time = prompt("Введите дату в формате YYYY-MM-DD");

	 while(isNaN(money) || money == "" || money == null){
	 		money = +prompt("Ваш бюджет на месяц?");
	 }
}
start();

let appData = {
		budget: money,
		timeData: time, 
		expenses: {},
		income:[],
		optionalExpenses:{},
		savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) { 
				let a = prompt("Введите обязательную статью расходов в этом месяце"), 
						b = prompt("Во сколько обойдется?"); 
				if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length <50) { 
						console.log('done') 
						appData.expenses[a] = b; 
				}	else {
					alert("Введите статью расходов!");
					console.log('Была ошибка');
					i--;
				};
		};
};
	
chooseExpenses();	 

function detectDayBudget(){
	alert('Бюджет за 1 день: '+ (appData.money / 30).toFixed());
};

detectDayBudget();

appData.moneyPerDay = appData.money / 30;

function detectLevel() {
		if (appData.moneyPerDay < 100){
			console.log('Минимальный уровень достатка')
		} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if ( appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('произошла ошибка')
		}
}

detectLevel();

function checkSavings (){
		if(appData.savings == true ) {
			let save = +prompt('Какая сумма накопления?'),
					percent = +prompt('Под какой процент?');
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
}

checkSavings();

function chooseOptExpenses(){
	for(let a = 0; a < 3; a++) {
 		let optExpenses = prompt('Статья необязательных расходов?');
			appData.optionalExpenses[a + 1] = optExpenses;
	}
	console.log(appData.optionalExpenses);
}
chooseOptExpenses();

console.log(appData.expenses);

