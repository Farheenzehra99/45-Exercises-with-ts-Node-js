"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinne.
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
// console.log(` ${absent_Guest} can not make it for dinner.\n\n`);
// console.log('Good News! We find big table we are inviting 3 more guest_list.\n\n');
// There are 3 guests add in array.
guest_list.unshift('Ferwa');
guest_list.splice(2, 0, 'yumna');
guest_list.push('Fizza');
// yhan per main ne 6 guests k array ko print kiya hai
// for(let i=0; i<guest_list.length; i ++){
//     console.log('Dear '+ guest_list[i] +',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n')
// }
//sorry message to guests for not inviting
// console.log('\n\nSorry!we can not arrange bid table, Only two people will be invited.');
//I have removed guests from here.
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Dear ${remove_guest}, You are not invited for dinner.`);
}
// // here are remaining 2 invited guests .
// for(let i=0; i<guest_list.length; i ++){
//     console.log('Dear '+ guest_list[i] +',\nYou are still invited for dinner.\nThank You!\n\n')
// }
// I have removed all guests from array
guest_list.splice(0, 2);
console.log(guest_list);
// Exercise 19
console.log(`totalnumber ofGuestAre:${guest_list.length}`);
