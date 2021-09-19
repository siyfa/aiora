import {
  FormButton,
  FormH1,
  FormInput,
  Text,
  Container,
  Form,
  FormContent,
  FormLabel,
  FormWrap,
  Icon,
} from "./Signin.styles";

export default function Signin() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">sifa</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account </FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password ?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
