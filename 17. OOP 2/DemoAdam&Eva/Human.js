class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender === 'Male' ? true : false;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        return Apple.isEmpty() ? true : false;
    }

    eat(Apple) {
        if (this.checkApple(Apple)) {
            this.say('Ăn nữa đi mà ...');
        } else {
            this.say('Hết mất rồi, mình cùng đi kiếm quả khác nha !');
        }
        Apple.decrease();
        this.weight++;
    }

    say(string) {
        console.log(`${this.name} say: ${string}`);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}