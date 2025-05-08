function Navbar() {

    const MENUDATA = [
        { icons: 'fas fa-home mr-1', name: "Home", link: './src/pages/login.html' },
        { icons: 'fas fa-folder-open mr-1', name: "Projects", link: './project.html' },
        { icons: 'fas fa-users mr-1', name: "Students", link: './students.html' },
        { icons: 'fas fa-info-circle mr-1', name: "About", link: './src/pages/login.html' },
    ];

    const AUTHDATA = [
        { icons: 'fas fa-sign-in-alt mr-1 hover:scale-110 duration-300', name: "Sign-in", link: "login.html" },
        { icons: 'fas fa-user-plus mr-1 hover:scale-110 duration-300', name: "Sign Up", link: "signup.html" },
    ];

    const MENU = MENUDATA.map((item) => {
        return `
            <a href="${item.link}" class="flex items-center text-white hover:text-blue-600">
                <i class="${item.icons}"></i> ${item.name}
            </a>
        `;
    }).join('');

    const Auth = AUTHDATA.map((item) => `
        <a href="${item.link}" class="text-white hover:text-blue-600">
            <i class="${item.icons}"></i> ${item.name}
        </a>
    `).join('');


    return `
     <nav class="bg-[rgb(0,31,41)] shadow-md select-none">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <a href="./index.html">
                    <i class="fas fa-graduation-cap text-blue-600 text-2xl mr-2"></i>
                    <span class="text-xl font-bold text-white">EDUVAULT</span>
                    </a>
                </div>

                <div class="hidden md:flex space-x-8 items-center">
                   ${MENU}
                </div>

                <div class="hidden md:flex items-center space-x-4">
                   ${Auth}
                </div>

                <div class="md:hidden">
                    <button id="menu-toggle" class="text-white focus:outline-none">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="md:hidden px-4 gap-5 pb-4 flex items-center flex-col">
        ${MENU}
         ${Auth}
        </div>
    </nav>
    `
}


document.getElementById('Navbar').innerHTML = Navbar()
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});