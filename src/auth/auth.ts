const TOKEN_KEY = "logged";

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(TOKEN_KEY) === "true";
};

export const setAuthenticated = (): void => {
  localStorage.setItem(TOKEN_KEY, "true");
};

export const clearAuthenticated = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
