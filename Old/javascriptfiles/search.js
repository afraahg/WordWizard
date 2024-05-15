async function searchWord(){
  let getWord="";
  const searchItem = document.searchForm.searchbar.value;
  if (!searchItem){
    console.log("no input");
    return false;
  }
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`);
    getWord = await response.json();
    
    if (!getWord) {
      console.log('word not found');
      return;
    }
    
    console.log('reached2');
  } catch (error) {
    console.log('error');
    return;
  }

  // Save data to cache 
  localStorage.setItem('wordData', JSON.stringify(getWord));
  localStorage.setItem('searchItem', searchItem);


  // Change location to browse
  window.location.href = '/htmlfiles/browse.html';
}

document.searchForm.addEventListener('submit', (event) => {

  searchWord();
  console.log('reached');
});
