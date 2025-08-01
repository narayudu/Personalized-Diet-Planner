import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core';
// Hook
import { useSelector } from 'react-redux';
// import component
import Hd from './Hd.js';

const HealthDetail = ({ user, currentId, setCurrentId }) => {

    // retrieve an array of healthDetail
    const HDs = useSelector((state) => state.healthDetails);

    // mark UserId to compare
    const UserId = user?.userInfo?._id;
    // console.log(`user ._id token: ${user?.userInfo?._id}`);

    let H = {};
    // Looping to check whether the googleId/userID token equals to the HD created
    for (let i = 0; i < HDs.length; i++) {
        if (HDs[i]['userID'] === UserId || HDs[i]['googleId'] === UserId) {
            H = HDs[i];
            break;
        }
    }
    // console.log(H);
    return (
        <Container>
            {
                H ? (
                    <Container key={H._id}>
                        <Hd user={user} H={H} setCurrentId={setCurrentId} />
                    </Container>
                )
                    : (
                        <Container>
                            <Hd />
                        </Container>
                    )
            }
        </Container>
    );
}

export default HealthDetail;
