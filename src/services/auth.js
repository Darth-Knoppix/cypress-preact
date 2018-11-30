class Auth {
  login(email, password) {
    if (email === 'a@b.com' && password === 'abc') {
      this.user = {
        email,
        name: 'Test User 1'
      };

      return true;
    } else {
      this.user = null;

      return false;
    }
  }

  get isLoggedIn() {
    return this.user != null;
  }
}

export default new Auth();