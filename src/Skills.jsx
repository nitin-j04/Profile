import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DevicesIcon from '@mui/icons-material/Devices';
import AndroidIcon from '@mui/icons-material/Android';
import AssessmentIcon from '@mui/icons-material/Assessment';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };




  return (
    <List
      sx={{ width: '100%', maxWidth: 360, color: "black", fontSize:'2rem' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: '2rem', background: 'none', color:'black'}}>
         Technical Skills
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <AssessmentIcon fontSize='large'  />
        </ListItemIcon>
        <ListItemText primary="DSA" primaryTypographyProps={{ fontSize: '1.5rem' }} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AndroidIcon fontSize='large' />
        </ListItemIcon>
        <ListItemText primary="Android" primaryTypographyProps={{ fontSize: '1.5rem' }} />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DevicesIcon fontSize='large' />
        </ListItemIcon>
        <ListItemText primary="Web Development" primaryTypographyProps={{ fontSize: '1.5rem' }}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary=" (html,css,Reactjs)" primaryTypographyProps={{ fontSize: '1.2rem' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary=" nodejs,MySQL,MongoDB" primaryTypographyProps={{ fontSize: '1.2rem' }}/>
          </ListItemButton>
         
            
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <KeyboardIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Languages" primaryTypographyProps={{ fontSize: '1.5rem' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="C,C++,Java" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>
  );
}