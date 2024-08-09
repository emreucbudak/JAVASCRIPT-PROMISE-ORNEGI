let check = true;
function deneme () {
  return new Promise((resolve,reject) => {
    if (check) {
      resolve("Promise Doğru")

    }
    else {
      reject("Promise Yanlış")
    }
  })
}
deneme()
.then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
});