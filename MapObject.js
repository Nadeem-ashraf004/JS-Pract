const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Emily', lastName: 'Johnson' }
  ];
  
  const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
  
  console.log(fullNames); // Output: ["John Doe", "Jane Smith", "Emily Johnson"]
  