 /*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  let result = {};

  transactions.forEach((transaction) => {
    if(result[transaction.category])
      result[transaction.category] += transaction.price;
    else  
      result[transaction.category] = transaction.price;
  });

  let output = Object.entries(result).map(
    ([category, price]) => ({
      category: category,
      totalSpent: price
    })
  );
  
  return output;
}


module.exports = calculateTotalSpentByCategory;
