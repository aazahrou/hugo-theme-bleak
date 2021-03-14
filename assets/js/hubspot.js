// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

(function (id, src) {
  if (document.getElementById(id)) { return; }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('hs-analytics', 'https://wwsrecipes.com/assets/js/hubspot-analytics.js');

(function (id, src, attrs) {
  if (document.getElementById(id)) {
    return;
  }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  for (var name in attrs) { if(attrs.hasOwnProperty(name)) { js.setAttribute(name, attrs[name]); } }
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('LeadFlows-2375382', 'https://wwsrecipes.com/assets/js/hubspot-leadflows.js', {"crossorigin":"anonymous","data-leadin-portal-id":2375382,"data-leadin-env":"prod","data-loader":"hs-scriptloader","data-hsjs-portal":2375382,"data-hsjs-env":"prod"});

(function (id, src, attrs) {
  if (document.getElementById(id)) {
    return;
  }
  var js = document.createElement('script');
  js.src = src;
  js.type = 'text/javascript';
  js.id = id;
  for (var name in attrs) { if(attrs.hasOwnProperty(name)) { js.setAttribute(name, attrs[name]); } }
  var e = document.getElementsByTagName('script')[0];
  e.parentNode.insertBefore(js, e);
})('CollectedForms-2375382', 'https://wwsrecipes.com/assets/js/hubspot-collectedforms.js', {"crossorigin":"anonymous","data-leadin-portal-id":2375382,"data-leadin-env":"prod","data-loader":"hs-scriptloader","data-hsjs-portal":2375382,"data-hsjs-env":"prod"});
