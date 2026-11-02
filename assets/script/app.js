
document.querySelectorAll("[data-search]").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const input=form.querySelector("input");
    const q=(input?.value||"").trim();
    window.location.href="search.html"+(q?"?q="+encodeURIComponent(q):"");
  });
});
