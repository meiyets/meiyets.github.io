// 拿到了三个对象
// 1. 初始界面的信封样式 - card
// 2. 初始界面卡片右下方的 爱心图案 --heart
// 3. 像是为了引出布局的东西... -box
let heart = document.querySelector(".heart");
let card = document.querySelector(".card");
let box = document.querySelector("#box");

heart.addEventListener("click", function () {

  // 1. 第一个页面消失
  // opacity透明度
  // 这里设置为0，实际上就是让第一个界面消失
  card.setAttribute("style", "opacity:0");


  // 2. 播放背景音乐
  // 创建了一个音频元素，感觉实际上就是设置了一个标签元素并且获取到了这个对象
  // 取得对象之后才能进行操作
  let x = document.createElement("audio");

  // element.setAttribute(attributeName, value);
  // attributeName：要设置的属性名（例如 style、src、id 等）。
  // value：要设置的属性值。
  x.setAttribute("src", "./letter/backgroundMusic.mp3");
  x.setAttribute("autoplay", "autoplay");
  x.setAttribute("loop", "loop");


  // 3. 开始打字
  // 打字效果
  let i = 0;
  let str =
    "眨一下眼就能回忆完的所有事里，有一段有序紧致但温馨的记忆，大家的社交距离很近，没有什么应不应该或者愿不愿意，同学录、明信片甚至是小纸片，各种各样的字迹中流淌着独属于那时的回忆。<当时，看一眼字迹便知道出于谁手，上面的小小插画时至今日也津津乐道，是我理解与品味感情的线索。<写信真的是一件很温柔的事，怀揣着最好的期许，流向彼此的心坊间。₍^˶ ╸𖥦  ╸˵^₎⟆#收到你的小礼物和留言，真的很开心呐，漫画大概花了40mins左右就很舒爽地看完了，都是简短但又温馨的小故事。跨国恋和养孩子其实应该并不是一件容易的事，仅仅是能想到的困难就觉得压力山大了...作者作为漫画相关工作者大概是有其他的正事的吧？可依旧抽出时间创作了一部充满爱与小小感动的亲子漫，真的很棒。<我曾经看到一位up的个签，当时就觉得有种小小触动，在此处也有点对应了——偷偷把阴霾藏起来，然后把阳光都留给你们！<感受爱，理解爱，传递爱，如同漫画名一样，世界是你的猫窝~#一个相当简单的页面，仅仅是自己突发奇想的结果，希望你喜欢。❤<（ps：咳咳，话虽如此我竟然还是选择了这种电子程序的方式，原因是有很多啦，但要是像自己平时那样自顾自解释，就多少会显得臃肿了，不过我相信这不会是绝唱的说òᆺó）";
  let content = "";

  function print() {
    if (str[i] == "<") {
      document.getElementById("box").innerHTML = content + "<br><br>|";
      content += "<br><br>";
    } else if (str[i] == "#") {
      document.getElementById("box").innerHTML = content + "<br><br>————————————————————————————————————<br><br>|";
      content += "<br><br>————————————————————————————————————<br><br>";
    }
    else {
      // 为呈现内容逐个拼接字符串
      content += str[i];
      // 加上光标
      box.innerHTML = content + "|";
    }
    i++;
  }

  // setTimeout()，指定时间后执行代码
  // setInterval()，周期性执行某个代码
  setTimeout(() => {
    // 此处设置了定时器id
    let timer = setInterval(() => {
      // 打字
      print();
      // 打完就停止
      if (i == str.length) clearInterval(timer);
    }, 300); // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
  }, 5500); //5500毫秒开始打字


  // 4. 背景出现
  function appearBackground() {
    setTimeout(() => {
      // 设置css属性的一种方式
      box.style.opacity = 1;
    }, 1500);
  }
  appearBackground();
});
