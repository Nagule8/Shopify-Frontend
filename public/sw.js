

self.addEventListener('sync', async function(event) {
    if (event.tag == 'offline-category') {
      event.waitUntil(setTimeout(function(){addCategory()},3000));
    }


  function addCategory(){
    
    let openRequest = indexedDB.open("category",10);

    openRequest.onsuccess = function(event){
      db = openRequest.result;
      console.log("DB: ",event.target.result);

      db.transaction(["postCategory"],"readwrite").objectStore("postCategory").openCursor().onsuccess = function(event){
        cursor = event.target.result;

        if(cursor){
          console.log("Cursor: ",cursor.value.name, cursor.key);
          sendCategory(cursor.value, cursor.key);
        }
      }
    };
    
  }

  function sendCategory(data, index){
    fetch("https://localhost:44385/api/categories",{
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then((response)=>{
      console.log(response);
      deleteIDB(index);
    })
  }

  function deleteIDB(index){
    var indexedDBOpenRequest = indexedDB.open('category',  10)
    indexedDBOpenRequest.onsuccess = function () {
    let db = this.result
    let transaction = db.transaction("postCategory", "readwrite");
    let storeObj = transaction.objectStore("postCategory");
    storeObj.delete(index)
    console.log("Deleted.");
  }
  }

});