angular.module('dose',  ['satellizer', 'angular-jwt', 'gridster', 'ngFileUpload'])
  .constant('API_URL', 'https://wdi-dose-api.herokuapp.com')
  .constant('YT', 'https://www.googleapis.com/youtube/v3/search')
  .constant('API', 'https://wdi-dose-api.herokuapp.com/users')
  .constant('S3', 'https://s3-eu-west-1.amazonaws.com/wdi-london18/')
  .config(oauthConfig);

oauthConfig.$inject = ['API_URL', '$authProvider', 'FACEBOOK_API_KEY', 'GITHUB_API_KEY'];
function oauthConfig(API_URL, $authProvider, FACEBOOK_API_KEY, GITHUB_API_KEY) {
  $authProvider.facebook({
    url: API_URL + '/auth/facebook',
    clientId: FACEBOOK_API_KEY
  })
  $authProvider.github({
    url: API_URL + '/auth/github',
    clientId: GITHUB_API_KEY
  })

  $authProvider.httpInterceptor = function(config) {
    return !!config.url.match(API_URL);
  };

  $authProvider.tokenPrefix = null;
}