// 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 
let cities:string[] =[
    "Islamabad" , "Karachi" , "Hyderabad" , "Multan" , "Quetta"];
    cities.map((item) => console.log(item));


    // second Method in which we can store values in empty array

    let item2: string[]= [];

    item2.push('Germany');
    item2.push('Korea');
    item2.push('Turkey');

    console.log(item2);