import { useUser } from '../Contexts/UserContext';
import { Box, VStack, Text, Heading } from '@chakra-ui/react';

const UserPage = () => {
  const { user } = useUser();

  return (
    <Box p={6} maxW="600px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading size="lg">ユーザーページ</Heading>
        {user ? (
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth={1} borderRadius="md">
              <Text fontWeight="bold">ユーザーID:</Text>
              <Text>{user.user_id}</Text>
            </Box>
            <Box p={4} borderWidth={1} borderRadius="md">
              <Text fontWeight="bold">メールアドレス:</Text>
              <Text>{user.email}</Text>
            </Box>
          </VStack>
        ) : (
          <Text color="red.500">ログインしてください</Text>
        )}
      </VStack>
    </Box>
  );
};

export default UserPage;
