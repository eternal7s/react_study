import React from "react";
import WithRouterSample from "./WithRouterSample";
import {withRouter} from "react-router-dom";

const data = {
    jack: {
        name: '송상규',
        description: '리액트를 배우는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({ match }) => {
  const { username } = match.params;
    console.log('match', username);
  const profile = data[username];
  console.log(profile);
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    )
};

export default withRouter(Profile);

