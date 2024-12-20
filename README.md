### 리액트 기초 설명을 위한 테스트 프로젝트입니다.

프론트를 구성하는 기본적인 내용들과 useState, useEffect가 있습니다.

<hr>

리액트는 컴포넌트라는 단위로 화면에 무언가 보여주는 시스템이다.
컴포넌트는 클래스형, 함수형이 있는데 요즘은 함수형만 쓴다.
JSX 라는 언어로 보통 js 파일을 작성한다. JSX란? JS인데 리턴값에 html요소 (xml)요소를 넣을 수 있다.

리액트는 왜 굳이 컴포넌트 단위를 쓸까?
-> 기존 웹은 무언가 요소가 변하면 페이지 전체를 새로고침하고 다시 보여주는 과정에서 기술적인 손실이 있음. 리액트는 바뀐 부분만 딱 파악해서 거기만 새로고침 해줌.

JSX에서 리턴할때는 ()로 전체를 일단 감싸야 하고, <> </> 처럼 가장 상위 태그 1개로 나머지 태그를 다 감싼 형태여야 한다.

라우터 개념.

useState => 변수에 위치추적기 달아서 변수를 변경할때 무조건 세터같은 함수로 바꿔야 하고, 그 함수가 호출되면 그 변수와 관련된 컴포넌트 요소가 리렌더링 된다. 그래서 효율적임.

useEffect => 특정 상태가 변했을 때, 렌더링 된 이후에 특정 작업을 하고 싶을 때 쓰는 것. 파라미터 뒤에 있는 [ ]안에 넣은 상태를 따라서, [ ] 안에 있는 친구가 변하면 리렌더링 이후에 특정 작업을 한다. 비워두면 처음 화면을 렌더링한 이후 1회 실행되고 실행되지 않는다. (새로고침 전까지)

    function Jstest() {
    const [x, setX] = useState(10);
    const [y, setY] = useState(100);

    useEffect(() => {
        console.log(x);
    }, [y]);

    useEffect(() => {
        console.log(y);
    }, [x]);

    return (
        <>
            <div>현재 x값은: {x}</div>
            <button onClick={() => setX(x + 1)}>x를 더해보세요</button>
            <br />
            <div>현재 y값은: {y}</div>
            <button onClick={() => setY(y + 1)}>y를 더해보세요</button>
            <hr />
        </>
    );
    }
