import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 실패')
                }
            })
    }

    const onregisterClickHandler = () => {
            props.history.push("/register")
    }

    const onloginClickHandler = () => {
        props.history.push("/login")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                                width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
            <button onClick={onloginClickHandler}>로그인</button>
            <button onClick={onClickHandler}>로그아웃</button>
            <button onClick={onregisterClickHandler}>회원가입</button>
        </div>
    )
}

export default withRouter(LandingPage)