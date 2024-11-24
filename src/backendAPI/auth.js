export class AuthService {

    async getOtp(email) {
        try {
            const response = await fetch("http://localhost:3000/user/send-otp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email})
            });

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || "Error while fetching otp!");
            } else {
                return true;
            }
        } catch (error) {
            throw error;
        }
    }

    async createAccount({name, username, email, password, companyName, typeOfWebsite, otp}) {
        try {
            const response = await fetch("http://localhost:3000/user/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, username, email, password, companyName, typeOfWebsite, otp})
            });

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || 'Error while signing up.');
            } else {
                const isLogin = await this.login({username, password, email});
                if(isLogin) return true;
            }            
        } catch (error) {
            throw error;
        }
    }

    async login({username, email, password}) {
        try {
            const response = await fetch("http://localhost:3000/user/signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({username, password, email})
            });

            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || "Error while signing in!")
            } else {
                return true;
            }

        } catch(error) {
            throw error;
        }
    }

    async logout() {
        try {
            const response = await fetch("http://localhost:3000/user/logout", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            });

            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || "Error while logging out!");
            } else {
                return true;
            }
        } catch (error) {
           throw error;
        }
    }

    async getCurrentUser() {
        try {
            const response = await fetch("http://localhost:3000/user/userData", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            });

            const data = await response.json();
            console.log(data);
            
            if(!response.ok) {
                throw new Error(data.message || "Error while fetching the information.");
            }
            return data;

        } catch (error) {
            throw error
        }
    }

    async registerWeb({webName, price}) {
        try {
            const response = await fetch("http://localhost:3000/web/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({webName, price})
            });

            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || "Error while registering website.");
            }

            return data.success;

        } catch (error) {
            throw error;
        }
    }

    async receiveEmail() {
        try {
            const response = await fetch("http://localhost:3000/web/send-mail", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || "Error while fetching email!");
            }
            return data.success; 
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;