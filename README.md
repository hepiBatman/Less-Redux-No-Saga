# Are you somehow ... overusing Redux?
Contrary to local state, Redux state needs to be manually cleared. It will not go away simply by browser reloading.
Without proper clearing you may encounter intermittent errors when revisiting the module after doing some other actions.
Less data in Redux may mean less chance of making these kind of errors.
However, if you use Redux Saga chances are you will store most of the state data into Redux.


## Do you need to store everything into Redux? Can you only make API calls in Saga?
Since you work on large-scale React application you end up using a global store, in this case Redux, to keep your code neat.
You also use Redux Saga to make API calls.

Soon you realise most of the data from the API calls are not actually reusable.
* API call to get the latest exchange rate of a currency to calculate in your calculator, once calculated you have no use of it until next transaction.
* API call to get your ticket detail. It is only used by this module, local state should suffice.
* Server response of your form submission.
* Data that only used by the module.
 
However, since every API call is always made in Sagas you end up storing the result from API calls into Redux just so you can pass values back to view.


## Why not do things the traditional way ...
During the days of rich/thick client application, on the on-click event we make a function call to process some business logic (Let's name the group: services). Service functions are responsible to massage your data, do merging and filtering, anything related to business process, including making database calls.
For example,
	 * Get list of clients and accounts from server.
	 * Filter, sort, then merge data into a single data structure.

Service function is not aware of React, it just knows business logic and invoking API calls (API call implementation will be done by other class).

Doing this you can store your state/data into local state (unless more than a module requires it), your code will be simpler because:
* When the component is not in-scope (unmounted) you need not worry to reset junk data, it will just disappear.
* Your business logic will not be split between Reducers and Sagas (In case of chain reactions Saga to another Saga).

	```javascript
	onClick() {
	  const result = calculatorServices.calc(op1, op2);
	  
	  // do more work ... eg. store to local state
	}

	calculatorServices:
	  calc = async (op1, op2) {
	    const rate = await api.getRate(op1); //api can be a promise to Ajax call/s
	    const result = op1 * op2 * rate;
	    
	    // If your business logic requires it, you can also call other service functions, eg. to get discount.
	    // Next developer just need to look at this function to get overall picture of business process
	    
	    return result;
	  }

Download the code to see it in action.


## What if I need to pass properties to deep-down children?
If you can not pass it down naturally using markups, have you considered React.Context?


## When do we use Redux?
Your Redux will be simpler if you treat the Redux store like RDMS database tables, you do not just create tables for storing temporary data (Exception would be if you need to store aggregated data for generating reports).


## What if I need to pass data between components/modules?
* If you need to redirect to another URI when navigating to other module, consider history object. 
  this.props.history.push({ pathname: '/myOrder', state: { action: 'submit', myOrderDetail } });
  On the destination module, you can do initialisation on mounting:
  
  	```javascript
  	componentDidMount() {
  	  if (this.props.location.state.action === 'submit') {
  	    //...
  	  }
  	}
  	
* If you do not redirect to another URI, you can consider using publish-subscribe.

  ```javascript
  Component1:
    onClick() {
      publish('calculator', data);
    }
  
  CalculatorContainer:
    componentDidMount() {
      subscribe('calculator', (data) => {
        if (data.action === 'submit') {
          // ...
        }
      })
    }
  
## With Redux Saga I can avoid callbacks nightmare?
Instead of ES6 Generators feature 'yield' used by Redux Saga to avoid callbacks nightmare, you can use 'await' and 'async' (See calculatorServices above).  


## Can my large-scale application survive without Redux Saga?
Before the advent of Redux, we coded using jQuery and Angular just fine.
If you simply need to limit the amount of unnecessary API call, you can consider lodash's debounce. 


## With Redux Saga I can chain my Sagas into a workflow?
Would you prefer to read the scattered code or a single function that gives a brief overview of the whole business activity for that particular instance.
With plain Service functions, your service function can invoke other service functions as required.


## Redux Saga has cool features like cancelling API calls, plain Service function does not have it?
But do you need it. We once implemented a search-as-you-type component using Redux Saga and discovered the search for keyword 'Book' is never made to API call because Saga is configured to limit one API call at a time and it is currently searching for keyword 'Bo'.  
