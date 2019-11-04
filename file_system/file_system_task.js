const fs = require('fs');

const path = './couter.txt';

const isExistFile = (path) => {
  return fs.existsSync(path);
}

const createNewFile = (path) => {
  const counter = 1;
  const options = {
    mode: 0777
  };
  fs.writeFile(path, counter, options, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      exitWithStatusConeZero();
    }
  })
}

const readExistFile = async (path) => {
  const data = await fs.promises.readFile(path);
  return data.toString();
}

const isValidInteger = (dataFromFile) => {
  const num = Number(dataFromFile);
  return Number.isInteger(num) && num !== 0;
}

const exitWithStatusConeOne = () => {
  process.exit(1);
}

const exitWithStatusConeZero = () => {
  process.exit(0);
}

const incrementsCounter = (data) => {
  let num = Number(data);
  return String(num += 1);
}

const writeFileWithNewDigit = (path, data) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      throw new Error(err)
    } else {
      exitWithStatusConeZero();
    }
  })
}

const processingData = (promiseWithData) => {
  promiseWithData
    .then(data => {
      if (isValidInteger(data)) {
        return incrementsCounter(data);
      } else {
        exitWithStatusConeOne();
      }
    })
    .then(newData => {
      writeFileWithNewDigit(path, newData);
    })
    .catch(console.error)
}

const main = (path) => {
  if (!isExistFile(path)) {
    createNewFile(path);
  } else {
    const promiseWithDataFromFile = readExistFile(path);
    processingData(promiseWithDataFromFile);
  }
}

main(path);