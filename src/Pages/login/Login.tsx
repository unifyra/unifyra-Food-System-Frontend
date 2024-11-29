import {
  Stack,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Anchor,
  Button,
  Text,
  Center,
  Box,
  Title,
  Image
} from '@mantine/core';
import googleImage from '../../assets/Gmail.png';
import facebook from '../../assets/Facebook.png';
import instagram from '../../assets/Instagram.png';
import linkedin from '../../assets/Linkedin.png';
import groupImage from '../../assets/Group 33916.png';
import pizzaIcon from '../../assets/Pizza icon.png';
import styles from './SignInPage.module.css';
const Login = () => {
  return (
    <>
      <Box className={styles.container}>
        {/* Left Section: Form */}
        <Box className={styles.formSection}>
          <div className={styles.logo}>
            <Title className={styles.brandName}>
              Order
              <span className={styles.highlight}>
                <Anchor href="#" className={styles.iconLink}>
                  <img src={pizzaIcon} alt="Google" width="24" />
                </Anchor>
                Unifyra
              </span>
            </Title>
          </div>
          <Center>
            <h2 className={styles.heading}>Sign In</h2>
          </Center>
          <Stack>
            <TextInput label="Email" placeholder="Enter your email" required />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              required
            />
            <Group align="center" justify="be">
              <Checkbox label="Remember me?" />
              <Anchor href="#" size="sm" className={styles.link}>
                Forgot Password
              </Anchor>
            </Group>
            <Button className={styles.signInButton} fullWidth>
              Sign in
            </Button>
            <Group justify="center">
              <Text className={styles.socialText}>
                Or sign in with other accounts?
              </Text>
              <Group>
                <Anchor href="#" className={styles.iconLink}>
                  <Image src={googleImage} alt="Google" width="24" />
                </Anchor>
                <Anchor href="#" className={styles.iconLink}>
                  <Image src={facebook} alt="Facebook" width="24" />
                </Anchor>
                <Anchor href="#" className={styles.iconLink}>
                  <Image src={instagram} alt="Instagram" width="24" />
                </Anchor>
                <Anchor href="#" className={styles.iconLink}>
                  <Image src={linkedin} alt="LinkedIn" width="24" />
                </Anchor>
              </Group>
            </Group>
            <Text className={styles.signUpText}>
              Don’t have an account?{' '}
              <Anchor href="#" className={styles.signUpLink}>
                Click here to sign up.
              </Anchor>
            </Text>
          </Stack>
        </Box>

        {/* Right Section: Decorative Images */}
        <Box className={styles.imageSection} me={"xl"}>
          <Image src={groupImage} alt="Food" />
        </Box>
      </Box>
    </>
  );
};

export default Login;
