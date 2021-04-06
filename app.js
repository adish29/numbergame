

var database = firebase.database();

function login()
{

	var email = document.getElementById('user').value;
	var password = document.getElementById('pass').value;

	firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.uid)
    // readUserData(user.uid)   
    window.location.href="dashboard.html"


    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
}


function signout()

{
	firebase.auth().signOut().then(() => {
  	console.log('User signed out')
  	window.location.href='home.html'
	}).catch((error) => {
  	console.log('error signing out')
	});

}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.email + ' is signed in')
    var userId = user.uid;
	var email = user.email;
	// readUserData(userId)
	// writeUserData(email,userId) ..... function working successfully.
	
  } else {
    console.log('No user is currently signed in')
    // window.location.href="admin.html"
  }
});

// var test = firebase.auth();
// console.log(test)
// console.log(test.X)



function writeUserData(email,uid) 
{
	firebase.database().ref('users/' + uid).set({
	email: email,
});
}

function readUserData(uid)
{
	var ref = database.ref('Teqmo/' + 'Stores/' + uid);
    ref.on('value', (snapshot) => {

    console.log(snapshot)
    const data = snapshot.val();
    console.log(data)
});
}

function incrementCount()
{
		firebase.auth().onAuthStateChanged(user => {

		// console.log(user.uid);
		database.ref('Teqmo/' + 'Stores/' + user.uid + '/Count/').set({
		date1: '9'
		});

		})	
	    
	
 
	
}

function updateDatabase(){
  var ref = database.ref('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/Count/' + 'date1');
  ref.once('value', (snapshot) => {

  console.log(snapshot)
  const data = snapshot.val();
  console.log(data)
  let counter = data;
  counter++;
  console.log(counter)
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/Count/' + 'date1'] = counter;
  return firebase.database().ref().update(updates);
  });
  
   
}

function screenLock1()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1/' + 'lock'] = '1';
  return firebase.database().ref().update(updates);
}

function screenUnlock1()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1/' + 'lock'] = '0';
  return firebase.database().ref().update(updates);
}
function screenLock2()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen2/' + 'lock'] = '1';
  return firebase.database().ref().update(updates);
}

function screenUnlock2()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen2/' + 'lock'] = '0';
  return firebase.database().ref().update(updates);
}
function screenLock3()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen3/' + 'lock'] = '1';
  return firebase.database().ref().update(updates);}

function screenUnlock3()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen3/' + 'lock'] = '0';
  return firebase.database().ref().update(updates);
}

function winnerFind()
{
	var obj = document.getElementById('win').value;
    var ref = database.ref('Teqmo/'+'Numbers/'+'2021(year)/'+'4(month)/'+
    '1(date)/'+'Morning/'+'mmR5Ye3XJEPefrYVlrQJPvhQByy1/'+'player1');
    ref.on('value', (snapshot) => {

    console.log(snapshot)
    const data = snapshot.val();
    console.log(data)
    console.log(data.length)
    for (var i = 0; i < data.length; i++) {
     if (data[i] == obj)
     {
      console.log('Winning number '+obj+' is present in array')
      var newPostKey = firebase.database().ref().child('Teqmo/' + 'Winners/' + 'Morning/').push().key;
 	  var updates = {};
 	  updates['Teqmo/' + 'Winners/' + 'Morning/' + '/mmR5Ye3XJEPefrYVlrQJPvhQByy1'] = obj;
 	  return firebase.database().ref().update(updates);
     }
     
   }
  

});
  
}

function resetPassword()
{

  
  var emailAddress = document.getElementById('emailreset').value;
  firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  console.log('Email sent successfully')
  }).catch(function(error) {
  // An error happened.
  console.log('Cannot send email')
  });
}

function changePassword()
{

  var passOne = document.getElementById('passOne').value;
  var passTwo = document.getElementById('passTwo').value;

  if(passOne.length < 6 )
  {
    alert('Password should be minimum of 6 characters')
    location.reload();
  }
  else if(passOne !== passTwo)
  {
    alert('Passwords do not match')
    location.reload();
  }
  else
  {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      document.getElementById('oldPass').value
    );
    
    user.reauthenticateWithCredential(credentials).then(function() {
    // User re-authenticated.
    var newPassword = document.getElementById('passOne').value;
    user.updatePassword(newPassword).then(function() {
    console.log('Password updated successfully')
    }).catch(function(error) {
    console.log('Failed to update password')
    
     });
    }).catch(function(error) {
    // An error happened.
    alert('Old password is incorrect')
    location.reload();
    });
    
  }
  });
    
  }
  
  
    
}