const products = [
    { name: 'Laptop', price: 1000, rating: 4.5 },
    { name: 'Smartphone', price: 500, rating: 4.7 },
    { name: 'Tablet', price: 300, rating: 4.2 },
    { name: 'Monitor', price: 200, rating: 4.1 },
    { name: 'Keyboard', price: 50, rating: 3.9 },
  ];
  
  const filterAndSort = (arr, minRating = 4, sortBy = 'price') => 
    arr
      .filter(({ rating }) => rating >= minRating) // Filter products by rating
      .sort((a, b) => a[sortBy] - b[sortBy]); // Sort by the specified criterion
  
  const filteredAndSortedProducts = filterAndSort(products, 4.2, 'rating');
  
  console.log(filteredAndSortedProducts);
  