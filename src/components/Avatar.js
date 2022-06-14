import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

function stringToColor(string) {
  let length = string.length;
  let color = '#';
  let colorcode;

    if (length <=10 ){
        colorcode = color + 'C9B79C';
    }
    else if (length > 10 && length <= 20){
        colorcode = color + '71816d';
    }
    else{
        colorcode = color + 'bb3e03'
    }
    return colorcode;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function BackgroundLetterAvatars() {
  const {user, setUser} = useContext(AppContext);

  return (
    <Stack direction="row" spacing={2}>
      
      <Avatar {...stringAvatar(user?.token?`${user.first_name} ${user.last_name}`:'? ?')} />
      {/* <Avatar {...stringAvatar('Jed Watson')} />
      <Avatar {...stringAvatar('Tim Neutkens')} /> */}
    </Stack>
  );
}

