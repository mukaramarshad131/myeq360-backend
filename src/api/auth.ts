
export interface LoginResponse {
    success: boolean;
    message?: string;
  }
  
  export const login = async (username: string, password: string): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "123") {
          resolve({ success: true });
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000); // Simulate network delay
    });
  };
  