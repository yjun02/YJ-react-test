import { Link } from "react-router-dom";

function Test() {
    return (
        <>
            <h1 className="title">안녕하세요 제목입니다</h1>
            <Link to="/list">
                <li>list로</li>
            </Link>
            <Link to="/detail">
                <li>detail로</li>
            </Link>
            <hr />
        </>
    );
}

export default Test;
