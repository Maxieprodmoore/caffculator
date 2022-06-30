//import { serialize } from '@shoelace-style/shoelace/dist/utilities/form.js';

//const form = document.querySelector('form');
//const data = serialize(form);
import { SlCard, SlDivider } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'react';

const Homepage = () => {
    //Drinks Selection 
const [drinks, /*selectDrinks*/] = useState([
            {drinkName:'McCafé Cappuccino', image: './../images/', catagory:'hot', id: '1'},
            {drinkName:'McCafé Latte', image: './../images/', catagory:'hot', id: '2'},
            {drinkName:'McCafé Premium Roast Coffee', image: './../images/', catagory:'hot', id: '3'},
            {drinkName:'McCafé Kopi Frappé', image: './../images/', catagory:'cold', id: '4'},
            {drinkName:'McCafé Iced Latte', image: './../images/', catagory:'cold', id: '5'},
            {drinkName:'McCafé Mocha Frappe with Oreo Cookies (S)', image: './../images/', catagory:'cold', id: '6'},
            {drinkName:'McCafé Caramel Frappe with Oreo Cookies (S)', image: './../images/', catagory:'cold', id: '7'},
            {drinkName:'McCafé Mocha Frappe (S)', image: './../images/', catagory:'cold', id: '8'},
            {drinkName:'McCafé Caramel Frappe (S)', image: './../images/', catagory:'cold', id: '9'},
        ]);


 //Calculator function

    const btnClick = () => {
     console.log('hi! Drink is selected!')
    }

    return(
        <div>
            <div id="splashScreen">
                <div id="splashScreenTxt">
                    <h2>Caffculator</h2>
                </div>
                
            </div>
            <div id="caffScreen">
                <form id="calculator" target='_self'>
                    <h2>Cups Calculator</h2>
                    <div className="caffeItems">
                        {drinks.map((drink) => (
                            <SlCard className="CaffeItem" onclick={btnClick} key={drink.id}>
                                <img slot='image' src={drink.image} alt={drink.drinkName} />
                            </SlCard>
                        ))}
                    </div>
                    <div className="cafCat">
                        <h3>Hot Coffee</h3>
                        <div className="caffeItems">
                            <SlCard className='CaffeItem'  onclick={btnClick}>

                                <h4>McCafé Cappuccino</h4>
                            </SlCard>
                            <SlCard className='CaffeItem' onClick={btnClick}>

                                <h4>McCafé Latte</h4>
                            </SlCard>
                            <SlCard className='CaffeItem'onClick={btnClick}>

                                <h4>McCafé Premium Roast Coffee</h4>
                            </SlCard>
                            
                        </div>
                    </div>
                    
                    <div className="cafCat">
                        <h3>Cold Coffee Brew</h3>
                        <div className="caffeItems caffeCold">
                            <SlCard className='CaffeItem'onClick={btnClick}>

                                <h4 >McCafé Kopi Frappé</h4>
                            </SlCard>
                            <SlCard className='CaffeItem'onClick={btnClick}>

                                <h4>McCafé Iced Latte</h4>
                            </SlCard>
                            <SlCard className='CaffeItem' onClick={btnClick}>

                                <h4>McCafé Mocha Frappe with Oreo Cookies (S)</h4>
                            </SlCard>
                            <SlCard className='CaffeItem' onClick={btnClick}>

                                <h4>McCafé Caramel Frappe with Oreo Cookies (S)</h4>
                            </SlCard>
                            <SlCard className='CaffeItem' onClick={btnClick}>

                                <h4>McCafé Mocha Frappe (S)</h4>
                            </SlCard>
                            <SlCard className='CaffeItem' onClick={btnClick}>

                                <h4>McCafé Caramel Frappe (S)</h4>
                            </SlCard>
                            
                        </div>

                        <SlDivider />
                    </div>

                    <div className="itemsCalc">
                        <h3>Drinks Selected</h3>
                        <p id="drinksSelected"></p>
                    </div>

                    <input type="submit" value="Make the Calculations!" />
                </form>
                <div>
                    <p>
                        Do note this is a general catch-all calculator on how much caffeine you are drinking overall. 
                        Should you require a more in-depth review of how much coffee you have been taking recently, please consult a nutritionist/trusted advisor.
                    </p>  
                    <p>
                        Thank you!
                    </p>
                </div>
            </div>
            
        </div>
    );

}

export default Homepage;