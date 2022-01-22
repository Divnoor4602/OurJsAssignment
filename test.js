score = 75;
console.log(score >= 60 ? "passing" : "failing");

registeredEarly = false;
age = 20;
fee = registeredEarly || age <= 18 ? 10 : 15;
console.log("Fee is $" + fee);
