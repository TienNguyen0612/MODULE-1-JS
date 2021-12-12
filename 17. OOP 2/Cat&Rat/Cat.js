class Cat {
    name
    weight
    speed
    sound

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.sound = "meow meow meow ..."
    }

    getSound() {
        return this.sound;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    goHunting(rat) {
        if (rat.getStatus()) {
            if (this.speed > rat.getSpeed()) {
                rat.arrested();
                this.weight += rat.getWeight();
                console.log("eat")
            } else {
                console.log("Mày không bắt được tao đâu =))")
            }
        } else {
            console.log("Thịt không thơm !")
        }
    }
}