
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { useCart } from '../../context/useCart';


const ProductCard = ({ id, img, altImg, title, text }: { id: string, img: string, altImg: string, title: string, text: string }) => {

    const [hovered, setHovered] = useState(false);

    const [price] = useState(() => Math.floor(Math.random() * (500 - 50 + 1)) + 50);

    const { addToCart } = useCart();


    const springProps = useSpring({
        transform: hovered ? 'scale(1.05) translateY(-5px)' : 'scale(1) translateY(0)',
        boxShadow: hovered
        ? '0px 10px 20px rgba(0, 0, 0, 0.2)'
        : '0px 4px 10px rgba(0, 0, 0, 0.1)',
        config: {
            tension: 120,  
            friction: 25,  
        }
    });

    const handleAddToCart = () => {
        addToCart({ id, img, title, price });
    };

  return (
    <animated.div style={springProps} onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

        <Card sx={{
        width: '30vw',
        height: '60vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        }}>
        <CardActionArea sx={{height: '100%'}}>
            <CardMedia
            component="img"
            image={img}
            alt={altImg}
            sx={{
                height: '60%', 
                width: 'fit-content',
                margin: "auto",
                borderRadius: "10px"
                // objectFit: 'cover'
            }}
            />
            <CardContent sx={{ height: '10%'}}>
            <Typography gutterBottom variant="h6" component="div" noWrap>
                {title || 'No title'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                {text}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: "bold" }}>
                Price: {price}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions sx={{height: "10%", padding: "0", margin: "0"}}>
            <IconButton aria-label="add to cart" size="small" color="success" onClick={handleAddToCart}>
                <AddShoppingCartIcon fontSize="small" />
            </IconButton>
        </CardActions>
        </Card>
    </animated.div>
  );
};

export default ProductCard;