axios.get('https://api.github.com/users/tiagokriok')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });