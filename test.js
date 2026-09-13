async function solve(){
  const q=document.getElementById("question").value.trim();
  const a=document.getElementById("answer");
  a.style.display="block";
  a.innerHTML="<b>🧠 Dragon is analyzing...</b>";
  try {
    const r=await fetch("http://localhost:3001/solve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({problem:q})});
    const d=await r.json();
    if(!r.ok) throw new Error(d.error);
    a.innerHTML="<b>✅ Solution</b><br><br>"+d.answer.replace(/\n/g,"<br>");
  } catch(e) {
    a.innerHTML="❌ "+e.message;
  }
}
