class Television {
    status
    volume
    chanel

    constructor(codeConect) {
        this.status = false;
        this.volume = 10;
        this.chanel = 1;
        this.codeConect = codeConect;
    }

    turnOnOff() {
        this.status = !this.status;
    }

    switchChanel(chanel) {
        if(this.status) {
            return this.chanel = chanel;
        }
    }

    swithcUpChanel() {
        if (this.status) {
            return this.chanel += 1;
        }
    }

    switchDownChanel() {
        if (this.status) {
            return this.chanel -= 1;
        }
    }

    switchUpVolume() {
        if (this.status) {
            return this.volume += 1;
        }
    }

    switchDownVolume() {
        if (this.status) {
            return this.volume -= 1;
        }
    }
}