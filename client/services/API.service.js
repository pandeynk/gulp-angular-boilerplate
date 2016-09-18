var APIService=function(Restangular, $window, API_URL){
  var headers={
    'Content-Type': 'application/json'
  };
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer
        .setBaseUrl(API_URL)
        .setDefaultHeaders(headers)
        .setErrorInterceptor(function (response) {
          if (response.status === 422) {
            // for (var error in response.data.errors) {
            // return ToastService.error(response.data.errors[error][0])
            // }
          }
        })
        .addFullRequestInterceptor(function (element, operation, what, url, headers) {
          var token = $window.localStorage.satellizer_token;
          if (token) {
            headers.Authorization = 'Bearer ' + token;
          }
        })
        .addResponseInterceptor(function (response, operation, what) {
          if (operation === 'getList') {
            var newResponse = response.data[what];
            newResponse.error = response.error;
            return newResponse;
          }

          return response;
        });
    });
};

APIService.$inject=['Restangular', '$window'];

module.exports=APIService;

