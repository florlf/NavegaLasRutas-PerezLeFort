import React from 'react'
import { IconButton, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function CartWidget() {
  const cartItemCount = 0

  return (
    <IconButton
    color="inherit"
      disableRipple
      sx={{
        '&:focus': {
          outline: 'none',
        },
      }}
    >
      <Badge
        badgeContent={cartItemCount === 0 ? '0' : cartItemCount}
        color="error"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default CartWidget