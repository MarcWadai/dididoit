
declare const ENV;

export class Constants {
  //network request time out time
   public static NETWORK_TIMEOUT = 20000;
   //splash screen duration
   public static SPLASH_TIME = 1600;

   //api endpoint
   public static API_ENDPOINT= ENV.apiUrl;
   //Authentification urls
   public static LOGIN_URL = ENV.apiUrl + "/user/login";
   public static LOGOUT_URL = ENV.apiUrl + "/user/logout";
   public static CHECK_LOGIN_URL = ENV.apiUrl + "/user/check";
   public static FORGOT_URL = ENV.apiUrl + "/user/recover";
   //user infos urls
   public static USER_INFO = ENV.apiUrl + "/account";

   //booking urls
   public static BOOKING = ENV.apiUrl + "/bookings";

   //rental urls
   public static RENTAL = ENV.apiUrl + "/rentals";

   //channel urls
   public static CHANNEL = ENV.apiUrl + "/channels";

   //Payment urls
   public static PAYMENT = ENV.apiUrl + "/payments";
}
