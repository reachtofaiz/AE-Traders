
function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                    We provide high-quality home essentials like curtains, bedsheets, and doormats, combining style, comfort, and affordability to elevate your living space effortlessly.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a href="/home" className="hover:text-white transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Products</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">

                        <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Odisha, India</p>
                    <p>Rourkela 769001</p>
                    <p>Email: aetraders@gmail.com</p>
                    <p>Phone: 7008709808</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2025 AE TRADERS. All rights reserved.</p>
        </footer>
    )
}

export default Footer