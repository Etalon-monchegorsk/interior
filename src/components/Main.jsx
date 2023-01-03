
import Title from "./Title";
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import member1 from '../img/member1.jpg';
import member2 from '../img/member2.jpg';
import member3 from '../img/member3.jpg';

function Main() {
    return (
        <main>
            <Title />
            <section>
                <h2 class="_animation-element" id="element1">Showcase</h2>
                <hr></hr>
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
            </section>
            <section>
                <h2 class="_animation-element" id="element2">Services</h2>
                <hr />
                <p>
                    We are a interior design service that focus on what's best for your home and what's best for you!
                </p>
                <p>
                    Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </section>
            <section className="desingers" id="desingers">
                <h2 class="_animation-element" id="element3">Designers</h2>
                <hr />
                <p>
                    The best team in the world.
                </p>
                <p>
                    We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    <b>Our designers are thoughtfully chosen:</b>
                </p>
                <div class="member">
                    <img src={member1} alt="" />
                    <div className="member__info">
                        <h3>John Doe</h3>
                        <p className="position">
                            CEO & Founder
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                </div>
                <div class="member">
                    <img src={member2} alt="" />
                    <div class="member__info">
                        <h3>Jane Doe</h3>
                        <p class="position">
                            Designer
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                </div>
                <div class="member">
                    <img src={member3} alt="" />
                    <div class="member__info">
                        <h3>Mike Ross</h3>
                        <p class="position">
                            Architect
                        </p>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                </div>
            </section>
            <section class="packages" id="packages">
                <h2 class="_animation-element" id="element4">Packages</h2>
                <hr />
                <p>
                    Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                </p>
                <div class="tariffs">
                    <ul class="tariffs__basic">
                        <li class="name">Basic</li>
                        <li>Floorplanning</li>
                        <li>10 hours support</li>
                        <li>Photography</li>
                        <li>20% furniture discount</li>
                        <li>Good deals</li>
                        <li class="cost">
                            50 cents <span>per day</span>
                        </li>
                        <li>
                            <button>
                                Sign Up
                            </button>
                        </li>
                    </ul>
                    <ul class="tariffs__pro">
                        <li class="name">Pro</li>
                        <li>Floorplanning</li>
                        <li>20 hours support</li>
                        <li>Photography</li>
                        <li>30% furniture discount</li>
                        <li>Good deals</li>
                        <li class="cost">
                            100 cents <span>per day</span>
                        </li>
                        <li>
                            <button>
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="contact" id="contact">
                <h2 class="_animation-element" id="element5">Contact</h2>
                <hr />
                <p>
                    Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!
                </p>
                <form action="#" id="form">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="_req" />
                    <label for="email">Email</label>
                    <input type="email" id="email" class="_req" />
                    <label for="massage">Massage</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <input type="checkbox" name="" id="consent" class="_req" />
                    <label for="consent" class="checkbox">Я даю согласие на обработку персональных данных</label>
                </form>
                <button>
                    Send Massage
                </button>
            </section>
            <footer>
                Site created by...
            </footer>
        </main>
    );
}


export default Main;