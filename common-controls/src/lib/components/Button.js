import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button, {
  shouldForwardProp: (prop) => !["style"].includes(prop),
})(({ style }) => ({
  color: style && style.color ? style.color : 'white',
  backgroundColor: style && style.backgroundColor ? style.backgroundColor : '#1A0F7A',
  margin: style && style.margin ? style.margin : '2px 2px 2px 2px',
  border: style && style.border ? style.border : '1px solid',
  '&:hover': {
    backgroundColor: style && style.backgroundColor ? style.backgroundColor : '#584FA4',
  },
  "&:disabled": {
    backgroundColor: style && style.diabledBackgroundColor ? style.diabledBackgroundColor : 'white',
    color: style && style.diabledColor ? style.diabledColor : 'black',
  }
}))

const CustomButton = (props) => {
  return (
    <CustomizedButton
      variant={props.variant}
      size={props.size ?? 'medium'}
      onClick={props.onClick}
      disabled={props.disabled}
    >{props.label}</CustomizedButton>
  )
}

export default CustomButton