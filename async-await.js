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

const printData = async () => {
  print2('First');
  try {
    const data = await print('Second');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  print2('Third');
};

printData();
