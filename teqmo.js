

function signUp()
{
var email =  document.getElementById('shopemail').value;
var password =  document.getElementById('shoppass').value;
var ownername = document.getElementById('own').value;
var storename = document.getElementById('stn').value;
var companyname = document.getElementById('con').value;
var state = document.getElementById('state').value;
var zipcode = document.getElementById('zc').value;
var phone = document.getElementById('phn').value;
firebase.auth().createUserWithEmailAndPassword(email, password)
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
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // ..
  });
    
}

