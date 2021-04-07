

var database = firebase.database();
function numberFind()
{
  var ref = database.ref('Teqmo/'+'Numbers/'+'2021(year)/'+'4(month)/'+
    '1(date)/'+'Morning/'+'mmR5Ye3XJEPefrYVlrQJPvhQByy1/'+'player1');
    ref.on('value', (snapshot) => {

    console.log(snapshot)
    const data = snapshot.val();
    console.log(data)
    console.log(data.length)
    for (var i = 0; i < data.length; i++) {
      const obj = 4;
     if (data[i] == obj)
     {
      console.log('Winning number '+obj+' is present in array')
     }
     // else
     // {
     //  console.log('Winner not present in array')
     // }

   }
  

});
  
}

function login()
{

	var email = document.getElementById('user').value;
	var password = document.getElementById('pass').value;

	firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.uid)
    window.location.href='game_assign.html'
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
        console.log(user.email + ' is signed in')
      
  } else {
    console.log('No user is currently signed in')
    
  }
});

function updateDatabase()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1/' + 'log'] = '2';
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen2/' + 'log'] = '1';

  return firebase.database().ref().update(updates);
}

function screenLogin1()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1/' + 'log'] = '1';
  return firebase.database().ref().update(updates);
}

function screenLogout1()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1/' + 'log'] = '0';
  return firebase.database().ref().update(updates);
}
function screenLogin2()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen2/' + 'log'] = '1';
  return firebase.database().ref().update(updates);
}

function screenLogout2()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen2/' + 'log'] = '0';
  return firebase.database().ref().update(updates);
}
function screenLogin3()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen3/' + 'log'] = '1';
  return firebase.database().ref().update(updates);}

function screenLogout3()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen3/' + 'log'] = '0';
  return firebase.database().ref().update(updates);
}


function screenLock1()
{
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1').push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'mmR5Ye3XJEPefrYVlrQJPvhQByy1' + '/screen1/' + 'lock'] = '1';
  return firebase.database().ref().update(updates);
}


function startGame()
{
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
          var ref = database.ref('Teqmo/'+'Stores/'+'mmR5Ye3XJEPefrYVlrQJPvhQByy1'+'/screen1/'+'/lock');
           ref.on('value', (snapshot) => {

            console.log(snapshot)
            const data = snapshot.val();
            console.log(data)
            if(data == '0')
            {
                console.log('You can play now')
                window.location.href= 'gamescreen1.html'
            }
            else{
              alert("Pay shopowner 1$ in order to play")
              location.reload();
            }
      });

  } else {
    window.location.href="gamelogin.html"
    }
  });
}