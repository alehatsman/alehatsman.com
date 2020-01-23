import styled from 'styled-components'

const getImageSize = (size: string) => {
  switch (size) {
    case 'small':
      return 'max-width: 50%;'
    case 'medium':
      return 'max-width: 80%;'
    case 'large':
      return 'max-width: 95%;'
    default:
      return 'max-width: 100%;'
  }
}

interface Props {
  size: string;
  round: boolean;
  shadow: boolean;
}

const StyledImg = styled.img`
  ${(props: Props) => getImageSize(props.size)}
  ${(props: Props) => props.round && 'border-radius: 3px;'}
  ${(props: Props) =>
    props.shadow &&
    `
    box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 5px 20px 0px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);
  `}
`

const ImgWrapper = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0 0 2rem 0;
`

const Image = (props: Props) => (
  <ImgWrapper>
    <StyledImg {...props} />
  </ImgWrapper>
)

export default Image
