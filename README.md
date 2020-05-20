This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Work Flow

## 1. Field validation for email and password text box are made as follows.
	  # 1.1 Do not enter anything in the text box and try to LOGIN it throws an error "Email feild can't be empty or password feild can't be empty".
	  # 1.2 Enter invalid email it throws an error "Please enter valid email id".
	  # 1.3 Enter password of 4 characters it will throw an error "password must be atleast 6 to 16 in length".
	  # 1.4 Try entering the given email id and password. Then click Login Button, user will succsfully land into Dashboard Page.
	  # 1.5 The given email id or password you entered wrong it will throw an error "invalid email or password".
	  # 1.6 In the password feild give a space it will throw an error "Password should not contain white spaces"
	  
# NOTE: All the above steps will work when you try to LOGIN.(click on Login button).

# 	 Given Email id and Password:
   {
	"username":"hruday@gmail.com",'
	"password" :'hruday123'
   }
   
## 2. Once user successfully logins page will redirect to dashboard.
## 3. The dashboard page has a list of employees in the table Form.


# HOW TO RUN:

## 1. clone the project using github link https://github.com/shashikumarNiranjan/UserFrontEnd.git
## 2.  In the project directory(i.e., in termina;), you can run:

### `npm install` & 
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 3. Login using a Given Email id and password. If login is success page will redirect to dashboard.


