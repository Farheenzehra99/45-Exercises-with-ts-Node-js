// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_list: string[] = ["Mahnoor", "Maryam", "Sana"]

// for(let i=0; i<guest_list.length; i ++){

//     console.log('Dear '+ guest_list[i] +',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n')
// }
let absent_Guest :string = 'Mahnoor';

let new_Guest :string = 'Iqra';

guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i ++){

    console.log('Dear '+ guest_list[i] +',\nIt is our pleasure to invite you on dinner.\nThank You!\n\n')
}

console.log(` ${absent_Guest} can not make it for dinner.`)



