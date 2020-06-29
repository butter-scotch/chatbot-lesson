import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '../assets/img/APMF2733.PNG';
import NoProfile from '../assets/img/no-profile.png';


const Chat = (props) => {

  const isQuestion = (props.type === "question");
  const classes = isQuestion ? 'list_low' : 'list_reverse';

  return(
    <ListItem className={classes}>
      <ListItemAvatar className="avatar">
        {isQuestion ? (
          <Avatar alt="Icon" src={Icon} />
        ) : (
          <Avatar alt="Icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="list_text">
        {props.text}
      </div>
    </ListItem>
  )
}

export default Chat