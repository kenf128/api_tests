# Test Suite for Order Processing API

## Instructions for test execution

### (1) Download this repo
```
git clone git@github.com:kenf128/api_tests.git
cd api_tests
```

### (2) Install required framework
```
npm install
```

### (3) Set URL to API
```
export API_URL=http://localhost:51544/v1
# substitute URL for the API under test
```

### (4) Run tests
```
npm test
```

#### Sample test output:
```
Testing http://localhost:51544/v1

  Order Processing API
    Place Order
      immediate delivery in Hong Kong
        ✓ creates a new order (216ms)
      scheduled delivery in Ho Chi Minh City
        ✓ creates a new order (164ms)
      delivery in a non-serviced country
        ✓ does not create an order (117ms)
      for each order created
        ✓ assigns a numeric order id - 2/2
        ✓ calculates distances - 2/2
    Fetch Order Details
      for each order fetched
        ✓ provides status - 2/2
        ✓ provides distances - 2/2
        ✓ calculates fare - 2/2 (246ms)
      if order not found
        ✓ returns a client error
    Driver to Take the Order
      ✓ advances the order to Ongoing status
      if order not found
        ✓ returns a client error (67ms)
    Driver to Complete the Order
      ✓ advances the order to Completed status
      once completed
        ✓ the order cannot be cancelled
        ✓ the order cannot be taken again
    Cancel Order
      ✓ advances the order to Cancelled status (83ms)
      once cancelled
        ✓ the order cannot be completed
        ✓ the order cannot be taken (78ms)


  17 passing (1s)
```
