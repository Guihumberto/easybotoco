import React from 'react'

import * as S from "./styled"

const Welcome = () => {
    return (
        <S.WelcomeWrapper>
            <S.WelcomeTitle>
                Bem-vindo a Easy Boteco!!
            </S.WelcomeTitle>
            <S.WelcomeSubtitle>
                A sua cerveja preferida sempre gelada.
            </S.WelcomeSubtitle>
        </S.WelcomeWrapper>
    )
}

export default Welcome