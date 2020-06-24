class Form {
    constructor() {
        this.title = createElement('h2');
        this.input = createInput('Enter Your Name');
        this.button = createButton('Click Me');
    }

    display() {
        this.title.html("CAR RACING GAME");
        this.title.position(400,150);
        this.input.position(400,300);
        this.button.position(400,350);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            console.log(name);
            var greeting = createElement('h3');
            greeting.html("Hello "+name+" Welcome To The Game");
            greeting.position(400,300);
        });
    }
}