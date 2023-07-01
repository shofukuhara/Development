const front = document.querySelector(".maskFront");
const back = document.querySelector(".maskBack");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      front.style.clipPath = "inset(0)";
      back.style.clipPath = "inset(0)";
      observer.disconnect();
    }
  });
};

const options = {
  threshold: 1,
};

const io = new IntersectionObserver(callback, options); //初期化
const target = document.querySelector(".bgImage"); //監視対象を取得
io.observe(target);
