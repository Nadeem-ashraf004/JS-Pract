function Timer() {
    this.seconds = 0;
  
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 10000);
  }
  
  const timer = new Timer();
  // Output: 1, 2, 3, 4,... (increments every second)
  