import { Button, List, ListItem, IconButton, ListItemText, ListItemAvatar, Avatar, Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../../context/useCart';
import { useMemo } from "react";
import { useModalStore } from "./useModalStore";
import CartChart from "../CartChart";

const SummaryCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const openReserve = useModalStore(state => state.openReserve);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <List dense>
        {cartItems.map(item => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar
                src={item.img}
                alt={item.title}
                variant="rounded"
                sx={{ width: 56, height: 56, margin: "2rem" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={`Quantity: ${item.quantity} | Price: $${item.price * item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
      <Box display="flex" justifyContent="center" >
        <Button 
          variant="contained" 
          color="success" 
          sx={{marginBottom: "2rem"}}
          onClick={openReserve}
        >
          Reserve
        </Button>
      </Box>
      
      <Box display="flex" justifyContent="center" mt={3}>
        <Typography variant="h6" fontWeight="bold">
          Total: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Box mt={10} mb={10} width="50rem" height="fit-content">
            <CartChart />
        </Box>
      </Box>

      
    </div>
  );
};

export default SummaryCart;
