const axios = require('axios');

const url = "https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json"
axios.get(url)
  .then(function (response) {
    const data = response.data;
    ////1////
    //1
    sugarDonut(data);
    //2
    ironDonut(data);
    //3
    proteineDonut(data);
    //4
    fibreDonut(data);
    /////////

    ////2////
    //5
    listCalorieDonut(data);
    //6
    listCarbohydratesDonut(data);
    //7
    caloriesMediaDonut(data);
    //8
    fatSumDonut(data);
    //9
    vitamineMediaDonut(data);
    /////////
    ////3////
    //10
    posibleBatterDonuts(data);
    //11
    posibleToppingDonuts(data);
    /////////
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

function sugarDonut(data){
    let maxSugar = 0;
    let counter = 0;
    let counter2 = 0;
    let donutNames = "";
    
    for (i = 0; i < data.items.item.length; i++){
        if (maxSugar <= parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)){
            maxSugar = parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        if (maxSugar === parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)){
            counter += 1
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        if (maxSugar === parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) && counter <= 1){
            donutNames = data.items.item[i].name;
        }
        else if (maxSugar === parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) && counter > 1){
            if (counter2 != counter - 1) {
                donutNames = donutNames + data.items.item[i].name + ", ";
            }
            else{
                donutNames = donutNames + data.items.item[i].name;
            }
            counter2 += 1;
        }
    }
    if (counter <= 1){
        console.log(donutNames + " is the donut whit more sugar");
    }
    else{
        console.log("the donuts whit more sugar are: " + donutNames);
    }
}
  function ironDonut(data){
    let maxIron = 0;
    let counter = 0;
    let counter2 = 0;
    let donutNames = "";
    
    for (i = 0; i < data.items.item.length; i++){
        for (let j = 0; j < data.items.item[i].nutrition_facts.nutrition.vitamines.length; j++) {
            if ("Iron" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type && maxIron <= parseInt(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)){
                maxIron = parseInt(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)
            }
        }   
    }
    for (i = 0; i < data.items.item.length; i++){
        for (let j = 0; j < data.items.item[i].nutrition_facts.nutrition.vitamines.length; j++) {
            if ("Iron" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type && maxIron === parseInt(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)){
                counter += 1;                
            }
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        for (i = 0; i < data.items.item.length; i++){
            for (let j = 0; j < data.items.item[i].nutrition_facts.nutrition.vitamines.length; j++) {
                if ("Iron" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type && maxIron === parseInt(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent) && counter <= 1){
                    donutNames = data.items.item[i].name;
                }
                else if ("Iron" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type && maxIron === parseInt(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent) && counter > 1){
                    if (counter2 != counter - 1) {
                        donutNames = donutNames + data.items.item[i].name + ", ";
                    }
                    else{
                        donutNames = donutNames + data.items.item[i].name;
                    }
                    counter2 += 1;
                }
            }
        }
    }
    if (counter <= 1){
        console.log(donutNames + " is the donut whit more iron");
    }
    else{
        console.log("the donuts whit more iron are: " + donutNames);
    }
}
  function proteineDonut(data){
    let maxProteine = 0;
    let counter = 0;
    let counter2 = 0;
    let donutNames = "";
    
    for (i = 0; i < data.items.item.length; i++){
        if (maxProteine <= parseInt(data.items.item[i].nutrition_facts.nutrition.proteine)){
            maxProteine = parseInt(data.items.item[i].nutrition_facts.nutrition.proteine)
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        if (maxProteine === parseInt(data.items.item[i].nutrition_facts.nutrition.proteine)){
            counter += 1
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        if (maxProteine === parseInt(data.items.item[i].nutrition_facts.nutrition.proteine) && counter <= 1){
            donutNames = data.items.item[i].name;
        }
        else if (maxProteine === parseInt(data.items.item[i].nutrition_facts.nutrition.proteine) && counter > 1){
            if (counter2 != counter - 1) {
                donutNames = donutNames + data.items.item[i].name + ", ";
            }
            else{
                donutNames = donutNames + data.items.item[i].name;
            }
            counter2 += 1;
        }
    }
    if (counter <= 1){
        console.log(donutNames + " is the donut whit more proteines");
    }
    else{
        console.log("the donuts whit more proteines are: " + donutNames);
    }
}
  function fibreDonut(data){
    let maxFibre = 100000000;
    let counter = 0;
    let counter2 = 0;
    let donutNames = "";
    
    for (i = 0; i < data.items.item.length; i++){
        if (maxFibre >= parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)){
            maxFibre = parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        if (maxFibre === parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)){
            counter += 1
        }
    }
    for (i = 0; i < data.items.item.length; i++){
        if (maxFibre === parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) && counter <= 1){
            donutNames = data.items.item[i].name;
        }
        else if (maxFibre === parseInt(data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) && counter > 1){
            if (counter2 != counter - 1) {
                donutNames = donutNames + data.items.item[i].name + ", ";
            }
            else{
                donutNames = donutNames + data.items.item[i].name;
            }
            counter2 += 1;
        }
    }
    if (counter <= 1){
        console.log(donutNames + " is the donut whit more sugar");
    }
    else{
        console.log("The donuts whit more sugar are: " + donutNames);
    }
}
  ///////////////////////////////////////////////////////////////////////
function listCalorieDonut(data){
    for (i = 0; i < data.items.item.length; i++){
        console.log(data.items.item[i].name + " have " + data.items.item[i].nutrition_facts.nutrition.calories + " calories");
    }
}
function listCarbohydratesDonut(data){
    for (i = 0; i < data.items.item.length; i++){
        console.log(data.items.item[i].name + " have daily value " + data.items.item[i].nutrition_facts.nutrition.carbohydrate.daily_value + ", carbs_details, amount: "
            + data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount + ", type, fibres: " + data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre
            + ", sugars: " + data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
    }
}
function caloriesMediaDonut(data){
    let counter = 0;
    let sum = 0;
    
    for (i = 0; i < data.items.item.length; i++){
        sum += parseInt(data.items.item[i].nutrition_facts.nutrition.calories);
        counter++;
    }
    let media = sum / counter;
    console.log("the media of the calories is: " + media);
}
function fatSumDonut(data){
    let sum = 0;
    
    for (i = 0; i < data.items.item.length; i++){
        sum += parseFloat(data.items.item[i].nutrition_facts.nutrition.fat.fat_type.saturated);  
    }
    console.log("The total saturated fat is: " + sum + "g");    
}
function vitamineMediaDonut(data){
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let counter = 0;
    for (i = 0; i < data.items.item.length; i++){
        for (let j = 0; j < data.items.item[i].nutrition_facts.nutrition.vitamines.length; j++) {
            if ("Vitamin A" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type){
                sum += parseFloat(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)
            }
            if ("Vitamin C" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type){
                sum2 += parseFloat(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)
            }
            if ("Calcium" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type){
                sum3 += parseFloat(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)
            }
            if ("Iron" === data.items.item[i].nutrition_facts.nutrition.vitamines[j].type){
                sum4 += parseFloat(data.items.item[i].nutrition_facts.nutrition.vitamines[j].percent)
            }
        }
        counter++;
    }
    console.log("The media percen of the Vitamin A is: " + sum / counter + "%");
    console.log("The media percen of the Vitamin C is: " + sum2 / counter + "%");
    console.log("The media percen of the Calcium is: " + sum3 / counter + "%");
    console.log("The media percen of the Iron A is: " + sum4 / counter + "%");
}
    /////////////////////////////////////////////////////
function posibleBatterDonuts(data){
    let string = "The posibles batters of ";
    let counter = 0;
    for (i = 0; i < data.items.item.length; i++){
        string += data.items.item[i].name + " are: ";
        for (j = 0; j < data.items.item[i].batters.batter.length; j++){
            if(counter < data.items.item[i].batters.batter.length - 1){
                string += data.items.item[i].batters.batter[j].type + ", "
            }
            else{
                string += data.items.item[i].batters.batter[j].type
            }
            counter++;
        }
        console.log(string);
        string = "The posibles batters of ";
        counter = 0;
    }
}
function posibleToppingDonuts(data){
    let string = "The posibles toppings of ";
    let counter = 0;
    for (i = 0; i < data.items.item.length; i++){
        string += data.items.item[i].name + " are: ";
        for (j = 0; j < data.items.item[i].topping.length; j++){
            if(counter < data.items.item[i].topping.length - 1){
                string += data.items.item[i].topping[j].type + ", "
            }
            else{
                string += data.items.item[i].topping[j].type
            }
            counter++;
        }
        console.log(string);
        string = "The posibles toppings of ";
        counter = 0;
    }
}

