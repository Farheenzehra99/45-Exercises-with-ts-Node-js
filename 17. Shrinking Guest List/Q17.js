"use strict";
// Q.17:- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest_list = ["Mahnoor", "Maryam", "Sana"];
// for(let i=0; i<guest_list.length; i ++){
//     console.log('Dear '+ guest_list[i] +',\n\nIt is our pleasure to invite you on dinner.\n\nThank You!')
// }
let absent_Guest = 'Mahnoor';
let new_Guest = 'Iqra';
guest_list[0] = new_Guest;
// for(let i=0; i<guest_list.length; i ++){
//     console.log('Dear '+ guest_list[i] +',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n')
// }
console.log(` ${absent_Guest} can not make it for dinner.\n\n`);
console.log('Good News! We find big table we are inviting 3 more guest_list.\n\n');
guest_list.unshift('Ferwa');
guest_list.splice(2, 0, 'yumna');
guest_list.push('Fizza');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n');
}
console.log('\n\nSorry!we can not arrange bid table, Only two people will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Dear ${remove_guest}, You are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\nYou are still invited for dinner.\nThank You!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
