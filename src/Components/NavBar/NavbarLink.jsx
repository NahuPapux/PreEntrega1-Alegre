import { Stack, Button, Divider } from "@mui/material";

const NavbarLink = () => {
  return (
    <Stack direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}>
      <Button variant="Text">Todes</Button>
      <Button variant="Text">Líquidos</Button>
      <Button variant="Text">Satinados</Button>
      <Button variant="Text">Mate</Button>
      <Button variant="Text">Gloss</Button>
    </Stack>
    
  );
};

export default NavbarLink;