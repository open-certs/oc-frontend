export const __prod__ = process.env.NODE_ENV === "production";
export const logoDark =
  "https://user-images.githubusercontent.com/41825906/153617213-e956c616-4f4a-4d62-95af-2d4ac4d57942.png";
export const logoLight =
  "https://user-images.githubusercontent.com/55032900/156938066-090de099-4ec7-47eb-91fd-458b30586651.png";
export const clientId = process.env.REACT_APP_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
export const redirectUri = process.env.REACT_APP_REDIRECT_URI;
export const apiBaseUrl = __prod__
  ? process.env.REACT_APP_API_BASE_URL
  : process.env.REACT_APP_API_BASE_URL_LOCAL;
