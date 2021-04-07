# numbergame
 A number game system
 A system designed using firebase as a backend server.

# Web Pages and functions used

page 1 - home html
--> No functions used

page 2 - Admin html(Shop Owner login screen)
--> login(), ...app.js
	Back to home page button
	Forget Password option

page 3 - Dashboard html(Shop owner Dashboard page)
--> Page will load only if shopowner is logged in, else back to page 2
	screenlock functions,
	screenunlock functions,
	Option to change password.
	updateDatabase() - increments player count in database when screen is unlocked.
	winnerFind() - If the winning number was present in any array then winner branch in db will be updated.
	signout() - logout option for store admin

page 4 - gamelogin html (Initial game screen setup page)
--> login(), .... app1.js
	Back to home page button.

page 5 - game_assign html (Initial game screen setup page continued)
--> Page will load only if shopowner is logged in, else back to page 4
	screen login functions,
	screen logout functions,
	signout()

page 6 - playgame html
--> If admin has unlocked the screen then message with you can play now will be displayed.
	Screen where video will be played and player can play after clicking on the screen.
	playGame() - A function which will prompt user to pay before playing and go to game screen
				 if paid.

page 7 - gamescreen1 html
--> Load only if customer has paid.
	Option to enter previous winning number.
	click button to show list of numbers.

page 8 - shonumber html
--> List of arrays shown from database
	countDown() - Timer will run on screen
	Once time is up screen will be locked. 

page 9 - resetpass html
--> input email
	resetPassword() - password reset link sent to email.

page10 - newpassword html
-->	asks for old password.
	new password and confirm new password.
	changePassword()

page 11 - teqmologin html
--> login() .... teqmo.js
	can login only with authorized credentials for teqmo admin.

page 12 - teqmo html (Teqmo admin dashboard)
--> signUp() ..... teqmo.js
	Sign up new stores.













