function incrementcount(){
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



//toggle buttons on store admin dashboard
function switchVisible1() {

                var starCountRef = firebase.database().ref('Teqmo/' + 'Stores/' + 'OHatm0qKa2Rf3DFnAj1Vq64Fcn62' + '/screen1/' + 'lockUnlock');
                starCountRef.on('value', (snapshot) => {
                const data = snapshot.val();
                 if (data == '0') {
                    document.getElementById('div1').style.display = 'block';
                    document.getElementById('div2').style.display = 'none';
                }
                else {
                    document.getElementById('div1').style.display = 'none';
                    document.getElementById('div2').style.display = 'block';
                }
                });

               
            
}

function screenUnlock()
{
              
            $("button").click(function() {
            var t = $(this).attr('id');
  var newPostKey = firebase.database().ref().child('Teqmo/' + 'Stores/' + 'OHatm0qKa2Rf3DFnAj1Vq64Fcn62' + '/screen'
    + t).push().key;
  var updates = {};
  updates['Teqmo/' + 'Stores/' + 'OHatm0qKa2Rf3DFnAj1Vq64Fcn62' + '/screen'+t + '/lockUnlock'] = '0';
  return firebase.database().ref().update(updates);
});
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