import * as S from './styles'

const Main = () => (
    <S.Wrapper>
        <S.Logo 
            src="/img/logo.svg"
            alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
        <S.Title>
            Typescript, ReactJS, NextJS, e Styled Components
        </S.Title>
        <S.Illustration 
            src="/img/hero-illustration.svg"
        />
        <S.Description>React Avançado</S.Description>
    </S.Wrapper>
)

export default Main