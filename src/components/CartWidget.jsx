import React from 'react'
import { IconButton, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from './CartContext'

const CartWidget = () => {
  const { cart } = useCart()
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

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
        badgeContent={totalItems === 0 ? '0' : totalItems}
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