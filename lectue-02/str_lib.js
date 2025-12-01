const fullName = " Tanakorn Pichai";
const cleandName = fullName.trim();
console.log(`Cleaned Name: ''${cleandName}`);

const nameParts = cleandName.split(" ");
console.log(`Name Parts:`, nameParts);

const finalParts = nameParts.filter(Boolean);
console.log(finalParts);

const firstName = finalParts[0];
console.log(firstName)