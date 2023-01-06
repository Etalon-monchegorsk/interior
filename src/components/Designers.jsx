import member1 from '../img/member1.jpg';
import member2 from '../img/member2.jpg';
import member3 from '../img/member3.jpg';

function Designers() {
    return (
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
    );
}

export default Designers;