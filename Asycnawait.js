// Utility function to simulate API call with a delay
const fetchData = async (url) => {
    // Simulate API call delay
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1000);  // Simulate a 1-second delay

    // Simulate fetching data
    if (url === 'api/error') {
        throw new Error('Failed to fetch data');
    } else {
        return { url, data: `Data from ${url}` };
    }
};

// Sequential execution: Fetching data one after another
const fetchSequentially = async () => {
    try {
        const data1 = await fetchData('api/endpoint1');
        console.log('Fetched sequentially:', data1);

        const data2 = await fetchData('api/endpoint2');
        console.log('Fetched sequentially:', data2);

        const data3 = await fetchData('api/endpoint3');
        console.log('Fetched sequentially:', data3);
    } catch (error) {
        console.error('Error in sequential fetching:', error);
    }
};

// Parallel execution: Fetching data concurrently
const fetchInParallel = async () => {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetchData('api/endpoint1'),
            fetchData('api/endpoint2'),
            fetchData('api/endpoint3')
        ]);
        console.log('Fetched in parallel:', data1, data2, data3);
    } catch (error) {
        console.error('Error in parallel fetching:', error);
    }
};

// Mixed execution: Fetch in parallel, then sequentially process
const mixedExecution = async () => {
    try {
        // Fetch the first batch of data in parallel
        const [data1, data2] = await Promise.all([
            fetchData('api/endpoint1'),
            fetchData('api/endpoint2')
        ]);
        console.log('Fetched first batch in parallel:', data1, data2);

        // Process each result sequentially
        const processedData1 = await processResult(data1);
        const processedData2 = await processResult(data2);

        // Fetch the next data sequentially after processing
        const data3 = await fetchData('api/endpoint3');
        console.log('Fetched sequentially after processing:', data3);
    } catch (error) {
        console.error('Error in mixed execution:', error);
    }
};

// Helper function to simulate processing the fetched data
const processResult = async (data) => {
    console.log('Processing:', data);
    await new Promise(resolve => setTimeout(resolve, 500));  // Simulate processing time
    return `Processed ${data.data}`;
};

// Error handling example: Fetching data with potential errors
const fetchWithErrorHandling = async () => {
    try {
        const data = await fetchData('api/error');
        console.log('This will not be logged:', data);
    } catch (error) {
        console.error('Caught an error during fetching:', error);
    }
};

// Execute the functions
(async () => {
    console.log('Starting sequential execution:');
    await fetchSequentially();

    console.log('\nStarting parallel execution:');
    await fetchInParallel();

    console.log('\nStarting mixed execution:');
    await mixedExecution();

    console.log('\nStarting execution with error handling:');
    await fetchWithErrorHandling();
})();
