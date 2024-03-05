"use strict";
// Q.16:- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["Mahnoor", "Maryam", "Sana"];
// for(let i=0; i<guest_list.length; i ++){
//     console.log('Dear '+ guest_list[i] +',\n\nIt is our pleasure to invite you on dinner.\n\nThank You!')
// }
let absent_Guest = 'Mahnoor';
let new_Guest = 'Iqra';
guest_list[0] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n');
}
console.log(` ${absent_Guest} can not make it for dinner.\n\n`);
console.log('Good News! We find big table we are inviting 3 more guest_list.\n\n');
guest_list.unshift('Ferwa');
guest_list.splice(2, 0, 'yumna');
guest_list.push('Fizza');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n');
}
