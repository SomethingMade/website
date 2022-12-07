<script>

  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      window.top.location = "https://somethingmade.github.io/website2/";
      testAPI();
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
       window.top.location = "https://somethingmade.github.io/website2/";
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '3255068518146123',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v15.0'           // Use this Graph API version for this call.
    });


    FB.login(function(response) {
     if (response.authResponse) {
        window.top.location = "https://somethingmade.github.io/website2/";
     }

});
 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
       window.top.location = "https://somethingmade.github.io/website2/";
    });
  }

</script>
