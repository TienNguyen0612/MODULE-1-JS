class Remote {
    codeConect

    constructor(codeConect) {
        this.codeConect = codeConect;
    }

    turnOnOffTivi(tv) {
        if (this.codeConect === tv.codeConect) {
            tv.turnOnOff();
            return tv.status;
        }
    }

    setChanel(tv, number) {
        if (this.codeConect === tv.codeConect) {
            tv.switchChanel(number);
        }
    }

    upChanel(tv) {
        if (this.codeConect === tv.codeConect) {
            tv.swithcUpChanel();
        }
    }

    downChanel(tv) {
        if (this.codeConect === tv.codeConect) {
            tv.switchDownChanel();
        }
    }

    upVolume(tv) {
        if (this.codeConect === tv.codeConect) {
            tv.switchUpVolume();
        }
    }

    downVolume(tv) {
        if (this.codeConect === tv.codeConect) {
            tv.switchDownVolume();
        }
    }
}