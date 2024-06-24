export function calculateEfficiency(temperature: number){
    if (temperature >= 32) {
        return 100;
    }
    else if (temperature <= 21) {
        return 23;
    }
    else {
        return 23 + (temperature - 21) * (77 / 11);
    }
}
