// Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .divider');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // Terminal typing effect
  const lines = [
    "SELECT skill FROM sang WHERE ready = TRUE;",
    "-- 4 dự án · 5 mảng kỹ năng · GPA 3.2/4.0",
    "INSERT INTO opportunities VALUES ('Data Analyst');"
  ];
  const termLine = document.getElementById('termLine');
  let li = 0, ci = 0, deleting = false;

  function typeLoop(){
    const current = lines[li];
    if(!deleting){
      ci++;
      termLine.textContent = current.slice(0, ci);
      if(ci === current.length){
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      ci--;
      termLine.textContent = current.slice(0, ci);
      if(ci === 0){
        deleting = false;
        li = (li+1) % lines.length;
      }
    }
    setTimeout(typeLoop, deleting ? 22 : 38);
  }
  typeLoop();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){
    document.querySelectorAll('.reveal, .divider').forEach(el=>el.classList.add('show'));
  }
