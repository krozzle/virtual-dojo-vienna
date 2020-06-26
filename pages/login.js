import { Box, Input, Label, Checkbox, Button } from 'theme-ui';
import Page from '../src/components/Page';

const Impressum = () => {
  return (
    <Page>
      <Box as='form' onSubmit={e => e.preventDefault}>
        <Label hatmlFor='username'>username</Label>
        <Input id='username' placeholder='username' name='username' required />
        <Label hatmlFor='password'>password</Label>
        <Input
          type='password'
          placeholder='password'
          name='password'
          id='password'
        />
        <Button type='submit'>submit</Button>
        <Label>
          <Checkbox checked='checked' name='remember' />
          remember me
        </Label>
      </Box>
    </Page>
  );
};
export default Impressum;
