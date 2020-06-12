1. Tool used: 
$ npm install --save redux
$ npm install --save react-redux

2. Basic info about Redux: 

- Purpose of Redux: making state management more 
manageble, it is a 3rd library software 

- here is a problem of passing data via state through 
the chain of components

- Redux is created to solve the problem. The idea is 
having some central store that store the state of whole
appllication

3. Understanding Redux workflow (video 255 + Redux-Flow.pdf): 
- COMPONENT dispatch an ACTION. The dispatch package contain
type of dispatch and the information needed to be updated
to CENTRAL STORE.

- ACTION then reaches REDUCER. REDUCER receive dispatch info
then update state. It also takes the type of dispatch to
determine which operation to be executed
!!! IMPORTANT NOTES !!!: REDUCER only executes synchronous code.

- REDUCER then update state to CENTRAL STORE
- CENTRAL STORE then trigger SUBSCRIPTION automatically
- SUBSCRIPTION then update State as Props to the COMPONENT

4. Guide of how to use: 

VER 1: Basic setup, how to dispatch ACTION and the use of REDUCER
Code in 3rd commit

- See Redux-Flow.pdf for understanding of the work Flow
- See redux-basic.js. This is the script that contains all 
the basic operations. But has nothing to do with the app running.
compile the code using: 
$ cd src
$ node redux-basics.js
> this will show whatever got executed in console.log


Step 1: open index.js. See the setups (import, store, provider)

Step 2: See Counter.js to see how components dispatch an ACTION, 
see reducer.js to see how REDUCER works. The subscription is done
automatically and update state as props in COMPONENT

VER 2: Passing dispatch data with action, 
updating state (in reducer) immutably, 
updating array (in reducer) immutably

Code in 5th Commit

- When updating state in the CENTRAL STORE, we return a whole new 
object as state using the data of the old state. We shouldn't 
modify the old state and return it. It will cause some unpredictable
behavior in the appllication. See reducer.js for example

Step 1: See Counter.js to see how to dispatch properly to update
state. Note that the onDeleteResults() is not implemented

Step 2: See reducer.js to see how to update state immutably
and update array immutably

