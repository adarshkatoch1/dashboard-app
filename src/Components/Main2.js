import React from 'react'
import logo from '../Assets/logo.png';
import Style from "./Style.css";
import Support from "./Support.css";
const Main2 = () => {
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

    <section className='steps-section'>
        <div className='container'>
            <h2>How can we help ?</h2>
            <div className='row'>
                <div className='coloumn'>
                    <div className='support'>
                        <h4>Our support center</h4>
                        <p>Use the below resources or contact us for further help.</p>

                        <ul className='get-started-list'>
                            <li>
                                <div className='inner-started'>
                                    <h3>Getting started</h3>
                                    <p>Learn the basic using Unseen Online vpn on various devices.</p>
                                    <a href='#'>Learn more</a>
                                </div>
                            </li>
                            <li>
                            <div className='inner-started'>
                                    <h3>Getting started</h3>
                                    <p>Learn the basic using Unseen Online vpn on various devices.</p>
                                    <a href='#'>Learn more</a>
                                </div>
                            </li>
                            <li>
                            <div className='inner-started'>
                                    <h3>Getting started</h3>
                                    <p>Learn the basic using Unseen Online vpn on various devices.</p>
                                    <a href='#'>Learn more</a>
                                </div>
                            </li>
                            <li>
                            <div className='inner-started'>
                                    <h3>Getting started</h3>
                                    <p>Learn the basic using Unseen Online vpn on various devices.</p>
                                    <a href='#'>Learn more</a>
                                </div>
                            </li>
                            <li>
                            <div className='inner-started'>
                                    <h3>Getting started</h3>
                                    <p>Learn the basic using Unseen Online vpn on various devices.</p>
                                    <a href='#'>Learn more</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
   
  )
}

export default Main2;
