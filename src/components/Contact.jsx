function Contact() {
    return (
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
                <button>
                    Send Massage
                </button>
            </form>

        </section>
    );
}

export default Contact;