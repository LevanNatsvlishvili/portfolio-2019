import React from 'react';
import Box from '@material-ui/core/Box';
import SocMediaLink from './Components/SocMediaLink';


const SidebarSocialMedia = () => {

  return (
    <Box display='flex' justifyContent='center' >
      <SocMediaLink link="https://www.linkedin.com/in/levan-natsvlishvili-0488b9199" img='/icons/linkedIn.svg' />
      <SocMediaLink link="https://github.com/levannatsvlishvili/" img='/icons/github.svg' />
    </Box>
  );
}

export default SidebarSocialMedia;