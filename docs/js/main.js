const MENU_OPEN = document.querySelector('#menu_open');
const MENU_CLOSE = document.querySelector('#menu_close');
const NAVLIST = document.querySelector('#nav_list');

MENU_CLOSE.style.display = 'none'; /* Hides the #menu_close icon by default */

MENU_OPEN.addEventListener('click', () => {
    NAVLIST.style.width = '70%'; /* Navbar takes 70% of the mobile screen size */
    NAVLIST.style.transition = '.5s';

    MENU_OPEN.style.display = 'none'; /* Hide the #menu_open icon when navbar is open */
    MENU_CLOSE.style.display = 'block'; /* Display the #menu_close icon when the navbar is open */

    document.querySelector('body').style.background = 'hsl(233, 8%, 79%)'; /* Changes the background color of the body when navbar is open */

    // The following blurs every selected element on the body when navbar is open - exempting navbar */
    document.querySelector('#logo').style.filter = 'blur(1px)';
    document.querySelector('#main').style.filter = 'blur(1px)';
    document.querySelector('#footer').style.filter = 'blur(1px)';
});

MENU_CLOSE.addEventListener('click', () => {
    NAVLIST.style.width = '0'; /* Hide the navbar when #menu_close icon is clicked */
    
    MENU_CLOSE.style.display = 'none'; /* Hide the #menu_close icon when the navbar is closed */
    MENU_OPEN.style.display = 'block'; /* Display the #menu_open icon when the navbar is closed */

    document.querySelector('body').style.background = 'hsl(36, 100%, 99%)'; /* Changes the background color of the body to Off_white (the default) */

    // The following removes the blur effect from the selected elements
    document.querySelector('#logo').style.filter = 'blur(0)';
    document.querySelector('#main').style.filter = 'blur(0)';
    document.querySelector('#footer').style.filter = 'blur(0)';
});
