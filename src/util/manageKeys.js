export default function manageKeys(){
    let keysPressed = {};

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
        if (keysPressed['Control'] && event.key == 'a') {
            console.log('CTRL+A was pressed');
        }
    });

    document.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
    });
}