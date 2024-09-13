const axios = require('axios');

const url = "https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json"
axios.get(url)
  .then(function (response) {
    const data = response.data;
    //1.
    sugarDonut(data);
    //2
    ironDonut(data);
    //3
    proteineDonut(data);

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
            donutNames = donutNames + data.items.item[i].name + " ";
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
                    donutNames = donutNames + data.items.item[i].name + " ";
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
            donutNames = donutNames + data.items.item[i].name + " ";
        }
    }
    if (counter <= 1){
        console.log(donutNames + " is the donut whit more proteines");
    }
    else{
        console.log("the donuts whit more proteines are: " + donutNames);
    }
  }