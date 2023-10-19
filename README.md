# Portfolio Page

프론트엔드를 준비하면서 개발한 작업물들을 보여주는 포트폴리오 페이지입니다. <br>
React를 사용하여 작업했고, 도트 게임 형식으로 디자인했습니다.

<br>

## ⚙️ 개발환경

React, react-router-dom, tailwind, scss

<br>

## ✒️ 코드 리뷰

실제 도트 게임처럼 말풍선 안에 타이핑 효과를 낼 수 있도록 하고 싶어서 useState와 useEffec, setInterval을 사용했습니다.

```js
// App.js

function App() {
  const txt = "Baek Seung Yeon’s portfolio!";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="wrap">
      <Header />
      <Visual />
      <Balloon text={text} compUrl="/profile" />
    </div>
  );
}
```

<br>
