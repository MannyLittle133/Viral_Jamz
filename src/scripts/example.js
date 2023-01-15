class Example {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>Click Me 😇</h1>"
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(e) {
        e.preventDefault();
        this.ele.children[0].innerHTML = "Clicked 😈";
    }
}

export default Example;