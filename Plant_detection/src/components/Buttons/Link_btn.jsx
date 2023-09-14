import { Stack, Box } from "@mui/system";

const LinkButton = ({ children, ...props }) => (
    
    <Box className='hover'>
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.2}
      sx={{
        cursor: "pointer",
        color: "text.primary",
        pb:'0.05em',
        background:'linear-gradient(#000 0 0),linear-gradient(#fff 0 0)',
        backgroundSize: '.5em .1em',
        backgroundPosition:'50% 100%',
        backgroundRepeat:'no-repeat',
        transition: '.3s linear, backgroundSize .3s .2s linear',
        "&:hover": { backgroundSize: '40% .1em', backgroundPosition:'10% 100%, 90% 100%'},
      }}
      {...props}
    >
      {children}
    </Stack>
    </Box>
  );

export default LinkButton;