# JavaScript Analytics 
*These are meant to be 'principles'.  You can implement in other languages as well*
###  Implementing and Testing Analytics in Web apps
* Adding Logging (including Analytics) to a Web App *

Used to be Hard!
First let's DEBUG by adding console.trace() to know which function is called at a particular spot in codebase
Example:
``` JavaScript 
  var boom = function boom() {
  console.trace();
  }, flash = function flash(){
  boom();
  };

flash();

```
Notice the console.log of your browser has more info about the mechanism of the code

##  Some important words in Business Analytics **
* Viral factor(K-factor)
* Church Rate
* Monthly Recurring Revenue(MRR)
* Customer Acquisition Cost
* Customer Lifetime Value(CLTV)

### Logging Checklist 
*what you should log*
* Requests from clients (GET, POST, etc.)
* Errors
* Failure alerts
* Conversion goals (sales, social-media shares, etc.)
* Authorizations (user requesting a protected resource)
* Feature activations (moving between pages and views, etc.)
* Performance metrics
* Server response time
* Time to page-ready event
* Time to page-rendered event
