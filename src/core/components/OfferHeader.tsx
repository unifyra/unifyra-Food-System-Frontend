import { Box, Divider, Group, Paper, Text } from '@mantine/core';
import {
  IconCircleArrowDownFilled,
  IconMapPinFilled,
  IconShoppingBag,
  IconStar
} from '@tabler/icons-react';
const OfferHeader = () => {
  return (
    <>
      <Group justify="space-between" style={{border:"1px solid #dee2e6"}}>
        <Paper component="div">
          <Group ps={'xs'}>
            <IconStar stroke={2} color="#FC8A06" />
            <Text>Get 5% Off your first order,</Text>
            <Text c="#FC8A06">Promo: ORDER5</Text>
          </Group>
        </Paper>
        <Paper>
          <Group>
            <IconMapPinFilled />
            <Text>Regent Street, A4, A4201, London</Text>
            <Text c="#FC8A06" style={{ textDecoration: 'underline' }}>
              Change Location
            </Text>
          </Group>
        </Paper>
        <Box bg={'#028643'} p={"xs"}>
          <Group w="100%" justify="space-between" align="center">
            <IconShoppingBag stroke={3} color="white" />
            <Divider orientation="vertical" color="white" size={'0.1px'} />
            <Text c={'white'}>23 Items</Text>
            <Divider orientation="vertical" color="white" size={'0.1px'} />
            <Text c={'white'}> GBP 79.89</Text>
            <Divider orientation="vertical" color="white" size={'0.1px'} />
            <IconCircleArrowDownFilled color='white' />
          </Group>
        </Box>
      </Group>
    </>
  );
};
export default OfferHeader;
