import {
  Container,
  Group,
  Button,
  Image,
  Text,
  Anchor,
  Box
} from '@mantine/core';
import { useState } from 'react';
import logo from '../../assets/logo.png';
const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabStyles = (tabName: string): React.CSSProperties => ({
    textDecoration: 'none',
    color: 'black',
    fontWeight: activeTab === tabName ? 'bold' : 'normal',
    backgroundColor: activeTab === tabName ? '#FC8A06' : 'transparent',
    padding: '8px 16px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#FC8A06',
      color: 'white'
    },
    transition: 'background-color 0.3s ease, color 0.3s ease'
  });

  return (
    <Container fluid>
      <Group justify="space-between" align="center" p={'xs'}>
        {/* Logo Section */}
        <Group>
          <Box w={'45px'}>
            <Image src={logo} alt="Logo" />
          </Box>
          <Text size="xl">
            Order<span style={{ color: '#FC8A06' }}>Unifyra</span>
          </Text>
        </Group>
        {/* Navigation Section */}
        <Group>
          <Anchor
            href="#"
            style={tabStyles('home')}
            onClick={() => handleTabClick('home')}
          >
            Home
          </Anchor>
          <Anchor
            href="#"
            style={tabStyles('browseMenu')}
            onClick={() => handleTabClick('browseMenu')}
          >
            Browse Menu
          </Anchor>
          <Anchor
            href="#"
            style={tabStyles('specialOffers')}
            onClick={() => handleTabClick('specialOffers')}
          >
            Special Offers
          </Anchor>
          <Anchor
            href="#"
            style={tabStyles('restaurants')}
            onClick={() => handleTabClick('restaurants')}
          >
            Restaurants
          </Anchor>
          <Anchor
            href="#"
            style={tabStyles('trackOrder')}
            onClick={() => handleTabClick('trackOrder')}
          >
            Track Order
          </Anchor>
        </Group>

        {/* Login Section */}
        <Button variant="filled" color="orange" radius="xl">
          Login/Signup
        </Button>
      </Group>
    </Container>
  );
};

export default Header;
