(function(){
  const articleMap={"history of computers":"history-of-computers.html","computer history":"history-of-computers.html"};
  function normalizeQuery(value){return String(value||'').trim().toLowerCase().replace(/\s+/g,' ')}
  const form=document.getElementById('search-form');
  const input=document.getElementById('search-input');
  const message=document.getElementById('search-message');
  if(form&&input){form.addEventListener('submit',function(e){e.preventDefault();const q=normalizeQuery(input.value);const target=articleMap[q];if(target){window.location.href=target;return}if(message)message.textContent='No local article found for "'+input.value+'".';});}
  window.normalizeQuery=normalizeQuery;
})();
