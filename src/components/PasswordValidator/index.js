import {useState} from 'react'
import {
  BackgroundContainer,
  Container,
  Heading,
  Paragraph,
  Input,
  ErrorParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')

  const onChangeSearchInput = e => {
    setInput(e.target.value)
  }

  return (
    <BackgroundContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangeSearchInput} value={input} />
        {input.length < 8 ? (
          <ErrorParagraph>
            Your password must be at least 8 characters
          </ErrorParagraph>
        ) : null}
      </Container>
    </BackgroundContainer>
  )
}

export default PasswordValidator
