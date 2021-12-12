class Rat {
    name
    weight
    speed
    status

    constructor(name, weight, speed, status) {
        this.name = name;
        this. weight = weight;
        this.speed = speed;
        this.status = status;
        this.sound = "chit chit chit..."
    }

    getSound() {
        return this.sound;
    }

    getStatus() {
        return this.status;
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

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    arrested() {
        this.status = false;
    }
}