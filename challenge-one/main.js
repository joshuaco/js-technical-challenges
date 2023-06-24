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
    amount: -50,
    category: 'eating_out',
    time: '2018-03-12T11:34:00Z',
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
];

/* funcion final */
// getBalance(transactions, "eating_out", "2019-01-01", "2019-12-31")

const filterByCategory = (category) => (transaction) => {
  return transaction?.category === category;
};

const filterByDate = (startDate, endDate) => (transaction) => {
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const transactionTime = new Date(transaction.time).getTime();

  return transactionTime >= startTime && transactionTime <= endTime;
}

const sumAmount = (totalBalance, transaction) => {
  return totalBalance + transaction.amount;
};

const getBalanceByCategoryAndRangeDate = (
  transactions,
  category,
  startDate,
  endDate
) => {
  return transactions
    .filter(filterByCategory(category))
    .filter(filterByDate(startDate, endDate))
    .reduce(sumAmount, 0);
};

console.log(getBalanceByCategoryAndRangeDate(transactions, "salario", "2018-01-01", "2023-12-31"));
