
gsap.utils.toArray("section").forEach((section) => {
   
    gsap.from(section.querySelector(".left h2"), {
      x: -100,
      opacity: 0,
      stagger: 0.3,
      delay: 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",  
        toggleActions: "play reverse play reverse", 
      }
    });
  
    
    gsap.from(section.querySelector(".left h3"), {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });
  
   
    gsap.from(section.querySelectorAll(".right p"), {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });
  });
  