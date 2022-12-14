import React from 'react'
import HeaderCartButton from './HeaderCartButton'

//import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
            <React.Fragment>
                <header className={classes.header}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
                </header>
                <div className={classes['main-image']}>
                    <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="A table full of delicious meals" />
                </div>
            </React.Fragment>
    )
}

export default Header;