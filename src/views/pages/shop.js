import { SlCard, SlButton, SlTab, SlTabGroup, SlTabPanel } from '@shoelace-style/shoelace/dist/react';

function Shop () {
    return (
        <SlTabGroup placement='start' id="shop">
            <SlTab slot='nav' panel='Coffee'>Coffee</SlTab>
            <SlTab slot='nav' panel='Coffee'>Tea</SlTab>
            <SlTab slot='nav' panel='Coffee'>Soda</SlTab>
            <SlTab slot='nav' panel='Coffee'>Coffee Brewing Machines</SlTab>
            <SlTabPanel id="shopRack">
                <h3>Coffees</h3>
                <div className="shopRow">
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                </div>
            </SlTabPanel>
            
            <SlTabPanel id="shopRack">
                <h3>Teas</h3>
                <div className="shopRow">
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>                            
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                </div>
            </SlTabPanel>
            
            <SlTabPanel id="shopRack">
                <h3>Sodas</h3>
                <div className="shopRow">
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                </div>
            </SlTabPanel>

            <SlTabPanel id="shopRack">
                <h3>Coffee Brewing Machines</h3>
                <div className="shopRow">
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                    <SlCard>
                        <strong>vitae purus faucibus</strong>
                        <div slot='footer'>
                            <p>S$3.00</p>
                            <SlButton>Add to Cart</SlButton>
                        </div>
                    </SlCard>
                </div>
            </SlTabPanel>
            
        </SlTabGroup>
        
    );
}

export default Shop;