var database = firebase.database();

function signUp()
{
var email =  document.getElementById('shopemail').value;
var password =  document.getElementById('shoppass').value;
secondaryApp.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user.email)
    var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/').push().key;
    var updates = {};
    updates['Teqmo/' + 'Stores/' + user.uid + '/OwnerName'] = document.getElementById('own').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/StoreName'] = document.getElementById('stn').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/CompanyName'] = document.getElementById('con').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/State'] = document.getElementById('state').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/Zipcode'] = document.getElementById('zc').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/Phone'] = document.getElementById('phn').value;
    updates['Teqmo/' + 'Stores/' + user.uid + '/Count'] = '0';
    return firebase.database().ref().update(updates);

    secondaryApp.auth().signOut();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // ..
  });
    
}

function signoutTeqmo()

{
    firebase.auth().signOut().then(() => {
    console.log('User signed out')
   // window.location.href='home.html'
    }).catch((error) => {
    console.log('error signing out')
    });

}



function login()
{

    var email = document.getElementById('userteqmo').value;
    var password = document.getElementById('passteqmo').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.uid)
    // readUserData(user.uid)   
     if(user.uid == 'BLCsrrtP37OrggMGW2lCL0mUhIj2')
                    {
                        window.location.href="teqmo.html"
                    }
                    else{
                        alert('You are not an authorized user')
                        window.location.href="teqmologin.html" 
                    }


    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
}