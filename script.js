//set this up in the script editor, then apply a trigger of your choice to the postToSlack function. 
var webhookUrlSlack = '#yourwebhookurlgoeshere';

function postToSlack() {
  var payload = {
    'channel' : '#Channel or user code goes here',
    'username' : 'Alert Message Title',
    'icon_emoji' : ':mailbox_with_mail:',
    'text' : 'Alert Message',
  }
 
  var options = {
    'method' : 'post',
    'contentType' : 'application/json',
    'payload' : JSON.stringify(payload)
  };
 
  return UrlFetchApp.fetch(webhookUrlSlack, options)
}
