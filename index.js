

for (let i = 0; i < document.querySelectorAll('.s').length; i++) {
    document.querySelectorAll('.s')[i].addEventListener('click', function () {
        var buttonHtml = this.innerHTML
        switch (buttonHtml) {
            case 'I love you':
                var love1 = new Audio('./sounds/love1.mp3');
                love1.play();
                
                break;

            case 'i love youuu':
                var love2 = new Audio('./sounds/love2.mp3');
                love2.play();
                
                break;

            case 'I...Lovee...You':
                var love3 = new Audio('./sounds/love3.mp3');
                love3.play();
                
                break;

            case 'I LOVE you':
                var love4 = new Audio('./sounds/love4.mp3');
                love4.play();
                
                break;

            case 'I luv uuuu':
                var love5 = new Audio('./sounds/love5.mp3');
                love5.play();
                
                break;

            case 'Mwuahhh':
                var love6 = new Audio('./sounds/mwuah.mp3');
                love6.play();
                
                break;
        
            default:
                break;
        }
    })
    
}