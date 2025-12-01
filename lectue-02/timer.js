const statTime = Date.now();
function someHeavyTask() {

}

const endTime = Date.now();

const duration = endTime -statTime;

console.log(duration)