import { useSelector } from "react-redux"
import { useAuth } from "../hooks/useAuth";

export const Cart = () => {
    const cart = useSelector(state => state.cart)
    const { token } = useAuth();
    console.log(cart);

    return <div>Корзина</div>
}