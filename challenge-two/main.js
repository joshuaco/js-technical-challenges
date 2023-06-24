const transactions = [
  {
    id: 123,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -30,
    category: 'eating_out',
    time: '2018-03-12T12:34:00Z',
  },
  {
    id: 124,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -30,
    category: 'eating_out',
    time: '2018-03-12T12:34:30Z',
  },
  {
    id: 127,
    sourceAccount: 'my_account',
    targetAccount: 'restaurant',
    amount: -100,
    category: 'eating_out',
    time: '2019-03-23T11:51:00Z',
  },
  {
    id: 125,
    sourceAccount: 'my_work',
    targetAccount: 'my_account',
    amount: 1000,
    category: 'salary',
    time: '2019-02-12T12:34:00Z',
  },
  {
    id: 126,
    sourceAccount: 'my_work',
    targetAccount: 'my_account',
    amount: 1100,
    category: 'salary',
    time: '2019-05-12T12:34:00Z',
  },
  {
    id: 129,
    sourceAccount: 'my_account',
    targetAccount: 'my_work',
    amount: -100,
    category: 'salary',
    time: '2019-05-12T12:35:00Z',
  },
  {
    id: 128,
    sourceAccount: 'my_account',
    targetAccount: 'supermarket',
    amount: -10,
    category: 'groceries',
    time: '2019-01-23T12:51:00Z',
  },
  {
    id: 130,
    sourceAccount: 'my_account',
    targetAccount: 'supermarket',
    amount: -10,
    category: 'groceries',
    time: '2019-01-23T12:51:45Z',
  },
];

const ONE_MINUTE_IN_MS = 60 * 1000;

const compareTransactions = (transactionA, transactionB) => {
  if (
    transactionA.sourceAccount === transactionB.sourceAccount &&
    transactionA.targetAccount === transactionB.targetAccount &&
    transactionA.amount === transactionB.amount &&
    transactionA.category === transactionB.category
  ) {
    return true;
  }
  return false;
};

const getDuplicatedTransactions = (transactions) => {
  const duplicates = [];

  for (let i = 0; i < transactions.length; i++) {
    const transactionA = transactions[i];

    for (let j = i + 1; j < transactions.length; j++) {
      const transactionB = transactions[j];

      if (compareTransactions(transactionA, transactionB)) {
        const timeA = new Date(transactionA.time).getTime();
        const timeB = new Date(transactionB.time).getTime();

        const timeDifference = Math.abs(timeA - timeB);

        if (timeDifference < ONE_MINUTE_IN_MS) {
          duplicates.push([transactionA, transactionB]);
        }
      }
    }
  }
  return duplicates;
};

console.log(getDuplicatedTransactions(transactions));
