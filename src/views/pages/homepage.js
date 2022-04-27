//import { serialize } from '@shoelace-style/shoelace/dist/utilities/form.js';

//const form = document.querySelector('form');
//const data = serialize(form);


function Homepage () {
 //Calculator function

 return(
    <div>
        <div id="splashScreen">
            <div id="splashScreenTxt">
                <h2>Caffculator</h2>
            </div>
            
        </div>
        <div id="caffScreen">
            <form id="calculator" target='_self'>
                <div className="cafCat">
                    <h3>Hot Coffee</h3>
                    <div className="formInput">
                        <label For="sHCup">Espresso Cup (2.5oz / 80ml)</label>
                        <input type="text" id='sHCup' name='sHCup'/>
                    </div>
                    <div className="formInput">
                        <label For="mHCup">Flat white cup (5oz / 150ml) </label>
                        <input type="text" id='mHCup' name='mHCup'/>
                    </div>
                    <div className="formInput">
                        <label For="mHCup2">Cappuccino cup (6.75oz / 200ml) </label>
                        <input type="text" id='mHCup2' name='mHCup2'/>
                    </div>
                    <div className="formInput">
                        <label For="lHCup">Cappuccino cup (8.5oz / 250ml) </label>
                        <input type="text" id='lHCup' name='lHCup'/>
                    </div>
                    <div className="formInput">
                        <label For="lHCup2">Cafe Latte cup (10oz / 300ml) </label>
                        <input type="text" id='lHCup2' name='lHCup2'/>
                    </div>
                </div>
                
                <div className="cafCat">
                    <h3>Cold Coffee Brew</h3>
                    <div className="formInput">
                        <label For="sCCup">Small Cup (16 - 18oz)</label>
                        <input type="text" id='sCCup' name='sCCup'/>
                    </div>
                    <div className="formInput">
                        <label For="mCCup">Medium cup (22 - 24oz) </label>
                        <input type="text" id='mCCup' name='mCCup'/>
                    </div>
                    <div className="formInput">
                        <label For="lCCup">Large cup (~ 32oz) </label>
                        <input type="text" id='lCCup' name='lCCup'/>
                    </div>
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