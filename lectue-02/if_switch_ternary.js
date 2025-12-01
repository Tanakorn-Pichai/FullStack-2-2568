const err_status = 400
if (err_status === 200) {
    console.log("ok")
}else if(err_status === 400){
console.log("Error!")
} 
else {
   console.log("unknown")
}

switch (err_status) {
    case 200:
        console.log("ok")
        break;
    case 400:
        console.log("Error!")
        break;

    default:
          console.log("unknown")
        break;
}

const message = (err_status === 200 ) ?'OK':'Error!'
console.log(message)