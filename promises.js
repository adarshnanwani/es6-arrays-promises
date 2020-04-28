print2('First');
print('d')
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    print2('Third');
  });

function print(str) {
  return new Promise(function (resolve, reject) {
    if (!str || str === '') {
      reject('No string passed');
    }
    setTimeout(() => {
      resolve(str);
    }, 2000);
  });
}

function print2(str) {
  console.log(str);
}
