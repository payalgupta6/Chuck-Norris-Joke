document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){

  console.log('getJokes');
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

  xhr.onload=function(){
    if(this.status===200){
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';
      var num = 1;
      if(response.type==='success'){
        response.value.forEach(function(joke){
          output+=`<h3>${num}. ${joke.joke}</h3>`;
          num++;
        });
      }else{
        output+='Something went Wrong';
      }
          console.log(output);
          document.querySelector('.jokes').innerHTML=output;
    }
  }
  xhr.send();
  e.preventDefault();
}
