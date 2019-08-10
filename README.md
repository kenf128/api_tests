# Test Suite for Order Processing API

## Instructions: 

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
        ✓ creates a new order (1356ms)
      scheduled delivery in Ho Chi Minh City
        ✓ creates a new order (1213ms)
      delivery in a non-serviced country
        ✓ does not create an order (171ms)
      for each order created
        ✓ assigns a numeric order id - 2/2
        ✓ calculates distances - 2/2
    Fetch Order Details
      for each order fetched
        ✓ provides status - 2/2
        ✓ provides distances - 2/2
        1) calculates fare - 1/2


  7 passing (3s)
  1 failing

  1) Order Processing API
       Fetch Order Details
         for each order fetched
           calculates fare - 1/2:
     Uncaught AssertionError: expected 1055.85 to be within 1686.86..1687.86
      at chai.request.get.end (test/process_order.js:99:30)
      at Test.Request.callback (node_modules/superagent/lib/node/index.js:716:12)
      at parser (node_modules/superagent/lib/node/index.js:916:18)
      at IncomingMessage.res.on (node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1129:12)
      at process._tickCallback (internal/process/next_tick.js:63:19)


Testing http://localhost:51544/v1

  Order Processing API
    Place Order
      immediate delivery in Hong Kong
        ✓ creates a new order (256ms)
      scheduled delivery in Ho Chi Minh City
        ✓ creates a new order (154ms)
      delivery in a non-serviced country
        ✓ does not create an order (73ms)
      for each order created
        ✓ assigns a numeric order id - 2/2
        ✓ calculates distances - 2/2
    Fetch Order Details
      for each order fetched
        ✓ provides status - 2/2
        ✓ provides distances - 2/2
        - calculates fare
      if order not found
        ✓ returns a client error
    Driver to Take the Order
      ✓ advances the order to Ongoing status
      if order not found
        ✓ returns a client error
    Driver to Complete the Order
      ✓ advances the order to Completed status
      once completed
        ✓ the order cannot be cancelled
        ✓ the order cannot be taken again
    Cancel Order
      ✓ advances the order to Cancelled status
      once cancelled
        ✓ the order cannot be completed
        ✓ the order cannot be taken


  16 passing (603ms)
  1 pending
```
