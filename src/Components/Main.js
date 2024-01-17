import React from 'react';
import logo from '../Assets/logo.png';
import Style from "./Style.css";



const Main = () => {
  return (
    <> 
    <header>
        <div className='container'>
            <div className='row'>
                <div className='coloumn'>
                    <img src={logo} alt='logo' ></img>
                </div>
                <div className='coloumn'>
                    <ul>
                        <li>About us</li>
                        <li>Plans</li>
                        <li>Help</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div class="dropdown">
  <button class="dropdown-button">Dropdown</button>
  <div class="dropdown-content">
    <a href="#" class="dropdown-item">Item 1</a>
    <a href="#" class="dropdown-item">Item 2</a>
    <a href="#" class="dropdown-item">Item 3</a>
  </div>
</div>
            </div>
        </div>
    </header>

    <section className='steps-sections'>
        <div className='container'>
            <h2>Activate by Adding time to your account</h2>
            <div className='row'>
                <div  className='coloumn'>
                <div className='step-section'>
                <h3>Account ID</h3>
                <p>Congrats! Your Account is Ready.</p>
                <div className='note-content'>
                    <div className='copy-items'>
                        <div className='link'>
                            <a href='#'>electronics</a>
                            <a href='#'>roughly</a>
                            <a href='#'>rule</a>
                            <a href='#'>rear</a>
                        </div>
                        <a href="#">
                            <img src="" alt=''></img>
                            <span>Copy</span>
                        </a>
                    </div>
                    <div className='note-icon'>
                        <img src="" alt=""></img>
                        <span>This is your unique account. Do not lose it.Do not share it with others.</span>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </section>
    
    <div className='row'>
    <div className='coloumn'>
    <div className='step-section2'>
        <div className='header-steps'>
            <h4>Add Time</h4>
            <p>Select the best plan that suits your usage needs.</p>
        </div>
        <div className='price-box'>
        <ul className='price-month-row'>
            <li className='active'>
                <span>1 month</span>
            </li>
            <li>
                <span>6 month</span>
            </li>
            <li>
                <span>12 month</span>
            </li>
        </ul>
        <div className='price-tag-month'>
            <span className='big-price'>
                <em>$</em>
                3.49
            </span>
            <button className='month-btn'>Monthly</button>
            <ul className='monthly-text'>
                <li>No personal information required</li>
                <li>5 devices</li>
                <li>No speed limit</li>
                <li>No logs</li>
                <li>
                    <span>30-day money back gurantee</span>
                </li>
                <li>
                    <span>24/7 customer support</span>
                </li>
            </ul>
        <button  className='btn-primary'>Proceed</button>
        </div>
        </div>
    </div>
    </div>
</div>

        <div className='row'>
                <div className='step-section3'>
                    <h4>Payment Menthod</h4>
                    <p>Select your prefeered payment menthod.</p>
                </div>
              
              <div className='payment-method-row'>
                <div className='col-1'>

                    <div className='payment-method-col'>
                        <div className='payment-img'></div>
                        <div className='payment-content'>

                            <h3>Cryptocurrency</h3>
                            <p>Bitcoin, Monero, Bitcoin cash</p>
                        </div>
                    </div>
                </div>






                <div className='col-1'>

                    
                <div className='payment-method-col'>
                        <div className='payment-img'></div>
                        <div className='payment-content'>
                            <h3>Credit card or Paypal</h3>
                            <p>Mastercard, Visa and more</p>
                        </div>
                    </div>

                </div>

              </div>
            </div>
            <button className='payment-btn'>Make payment</button>

    </>
  )
}

export default Main;
